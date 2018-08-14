(function(){
	window.onload = ()=>{
		let navBar = document.getElementById('top_nav');
		let stickLimit = navBar.offsetTop;
		window.addEventListener('scroll', ()=>{stickNav(event, stickLimit)});
	}

	const stickNav = (event, stickLimit)=>{
		// console.log(event);
		let navBar = document.getElementById('top_nav');
		if (window.pageYOffset >= stickLimit) {
			navBar.classList.add('sticky');
		} else {
			navBar.classList.remove('sticky');
		}
	}
})();