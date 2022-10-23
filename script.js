var css = document.querySelector("h3");
var color1 = document.getElementsByName("color1")[0];
var color2 = document.getElementsByName("color2")[0];
var body = document.getElementById("gradient");
var h3 = document.getElementsByTagName("h3")[0];

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

function setGradient(){
	body.style.background = "linear-gradient(to right,"+color1.value+", "+color2.value+")";
	h3.style.color="white";
	h3.innerHTML = body.style.background;
}