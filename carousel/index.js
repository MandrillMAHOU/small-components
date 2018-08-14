(function(){
	var showIndex = 0;
	var totalImg = 0;
	var stopFlag = false; // stop the auto slideshow

	window.onload = ()=>{
		totalImg = document.getElementsByClassName("carousel-img").length;
		document.querySelector(".next").addEventListener("click",()=>{updateIndex(showIndex + 1)});
		document.querySelector(".prev").addEventListener("click",()=>{updateIndex(showIndex - 1)});
		let allDots = document.getElementsByClassName("dot");
		for (let i = 0; i < totalImg; i++) {
			allDots[i].addEventListener("mouseover",()=>{updateIndex(i)});
		}
		// when mouse moves into banner, auto-show stops
		document.querySelector(".carousel-container").addEventListener("mouseover", ()=>{stopFlag = true});
		document.querySelector(".carousel-container").addEventListener("mouseout", ()=>{stopFlag = false});
		showImg();
		setInterval(
			()=>{
				if (!stopFlag) {
					updateIndex(showIndex + 1);
				}
			},
			3000);
	}

	const updateIndex = function(n) {
		showIndex = n;
		if (showIndex > totalImg - 1) {
			showIndex = 0;
		} else if (showIndex < 0) {
			showIndex = totalImg - 1;
		}
		showImg();
	}

	const showImg = function() {
		let allBanner = document.getElementsByClassName("carousel-img");
		let allDots = document.getElementsByClassName("dot");
		for (let i = 0; i < allBanner.length; i++) {
			if (i == showIndex) {
				allBanner[i].classList.remove("hidden");
				allDots[i].classList.add("active");
			} else {
				allBanner[i].classList.add("hidden");
				allDots[i].classList.remove("active");
			}
		}
	}

})();