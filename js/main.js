/* -------------Events 2------------- */
var mouse = document.querySelector("#mouse");
console.log(mouse.innerHTML);


mouse.onmouseover = function(e){
	mouse.style.backgroundImage = "url(img/mouse.png)";
	mouse.style.backgroundSize = "100px 100px";
	mouse.style.backgroundRepeat = "no-repeat";
	mouse.style.height = "200px";
	mouse.style.width = "200px";
}
mouse.onmouseleave = function(e){
	mouse.style.backgroundImage = "";
}
bubble.onclick = function(e){
	bubble.style.backgroundImage = "url(img/bubble.png)";
	bubble.style.backgroundSize = "100px 100px";
	bubble.style.backgroundRepeat = "no-repeat";
	bubble.style.height = "200px";
	bubble.style.width = "200px";
}



/* -------------Function 2------------- */

/* -------------If -Else 3------------- */
var clickCount = 0;
console.log(e)
