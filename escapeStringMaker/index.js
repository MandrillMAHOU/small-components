(function(){
  window.onload = function(){
    document.querySelector("#inputArea").onkeydown = enableTab;
    document.querySelector("#convert").onclick = convertStr;
  }

  var enableTab = function(e){
    console.log(e.keyCode);
    // enables the table key on textarea
    if (e.keyCode === 9) {
      e.preventDefault();
      this.value += "\t";
    }
  }

  var convertStr = function(){
    let inputArea = document.querySelector("#inputArea");
    let outputArea = document.querySelector("#outputArea");
    let escapeStr = makeStr(inputArea.value);
    outputArea.value = "//===========================\n\n" + escapeStr + 
                       "\n\n//===========================";
  }

  var makeStr = function(inputStr){
    let allLines = inputStr.split(/\r?\n/);
    // trim all the leading and trailing blank lines
    while(allLines.length > 0 && allLines[0].length === 0) {
      allLines.shift();
    }
    while(allLines.length > 0 && allLines[allLines.length - 1].length === 0) {
      allLines.pop();
    }
    for (let i = 0; i < allLines.length; i++) {
      let curLine = allLines[i];
      // convert normal escape chars
      curLine = curLine.replace(/\\/gi, "\\\\");
      curLine = curLine.replace(/\'/gi, "\\\'");
      curLine = curLine.replace(/\"/gi, "\\\"");
      curLine = curLine.replace(/\t/gi, "    ");
      // remove any char which is not ASCII
      let newLine = "";
      for (let i = 0; i < curLine.length; i++) {
        if (curLine.charCodeAt(i) < 0 || curLine.charCodeAt(i) > 128) {
          newLine += "?";
        } else {
          newLine += curLine[i];
        }
      }
      // add quote and \n new line after each line
      newLine = "\"" + newLine + "\\n\"";
      allLines[i] = newLine;
    }
    return allLines.join(" + \r\n");
  }
})();