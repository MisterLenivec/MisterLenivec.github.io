menu.onclick = function myFunction() {
	var x = document.getElementById("myTopnav");
	var main = document.getElementsByTagName("main")[0];

	if (x.className === "topnav") {
		x.className += " responsive";
		main.style.marginTop="290px";
	} else {
		x.className = "topnav";
		main.style.marginTop="";
	}

}

// main.addEventListener('click', addMarginTop);