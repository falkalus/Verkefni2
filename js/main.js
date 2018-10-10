/* -------------Events 1 ------------ */
var mouse = document.querySelector("#mouse");
console.log(mouse.innerHTML);

mouse.onmouseover = function(e){
	mouse.style.backgroundImage = "url(img/mouse.png)";
	mouse.style.backgroundSize = "100px 100px";
	mouse.style.backgroundRepeat = "no-repeat";
	mouse.style.height = "120px";
	mouse.style.width = "200px";
	mouse.style.paddingLeft = "100px";
}
mouse.onmouseleave = function(e){
	mouse.style.backgroundImage = "";
}
bubble.onclick = function(e){
	bubble.style.backgroundImage = "url(img/tist.png)";
	bubble.style.backgroundSize = "100px 100px";
	bubble.style.backgroundRepeat = "no-repeat";
	bubble.style.height = "100px";
	bubble.style.width = "200px";
	bubble.style.paddingLeft = "100px";
}

/* -------------ostur í mark------------- */
var ostur = document.querySelector("#ostur");
	ostur.style.backgroundImage = "url(img/ostur.png)";
	ostur.style.backgroundSize = "100px 100px";
	ostur.style.backgroundRepeat = "no-repeat";
	ostur.style.height = "100px";
	ostur.style.width = "200px";


/* -------------If -Else 1------------- */
var secondLeft = 0;
var goLeft = function(e){
	console.log(e.key);
	if(e.key==="ArrowRight"){ //key er event property
		if(e.ctrlKey) {//key er event property
		secondLeft = secondLeft + 70;
		ostur.style.marginLeft = secondLeft+"px";	
		}
		else{
		secondLeft = secondLeft + 10;
		ostur.style.marginLeft = secondLeft+"px";
		}

	}
	else if (e.key==="ArrowLeft"){//annars ef
		secondLeft = secondLeft - 10;
		ostur.style.marginLeft = secondLeft+"px";
	}
}
document.onkeydown = goLeft;

/* -------------Function 1------------- */
var hallo = function(nafn, aldur){
	return "Hæ ég heiti " + nafn + " og ég er " + aldur + " ára";
}
var mus = hallo("Max", 10);
console.log(mus);




