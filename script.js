var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColor = document.querySelector("h4");

function setGradient() {
	body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value, + ");";
	css.textContent = body.style.background + ";";
}

function getColorCode() {
	var makeColorCode = '0123456789ABCDEF';
	var code = '#';
	for (var count = 0; count < 6; count++) {
		code =code+ makeColorCode[Math.floor(Math.random() * 16)];
	}
return code;
}

function setRandomColor() {
	body.style.background = "linear-gradient(to right," + getColorCode() + ", " + getColorCode(), + ");";
	css.textContent = body.style.background + ";";
	
}

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomColor.addEventListener("click", setRandomColor);


