/* -------------Events ------------ */
var mouse = document.querySelector("#mouse");
console.log(mouse.innerHTML);

mouse.onmouseover = function(e){
	mouse.style.backgroundImage = "url(img/mouse.png)";
	mouse.style.backgroundSize = "100px 100px";
	mouse.style.backgroundRepeat = "no-repeat";
	mouse.style.height = "100px";
	mouse.style.width = "100px";
}
mouse.onmouseleave = function(e){
	mouse.style.backgroundImage = "";
}
var bubbleImage = '';

bubble.onclick = function(e){
	if (bubbleImage === "tist")
	{
		bubble.style.backgroundImage = "url(img/egvilost.png)";
		bubbleImage = 'egvilost';
	}
	else
	{
		bubble.style.backgroundImage = "url(img/tist.png)";
		bubbleImage = 'tist';
	}
	bubble.style.backgroundSize = "100px 100px";
	bubble.style.backgroundRepeat = "no-repeat";
	bubble.style.height = "100px";
	bubble.style.width = "100px";
}

/* -------------ostur------------- */
var ostur = document.querySelector("#ostur");
	ostur.style.backgroundImage = "url(img/ostur.png)";
	ostur.style.backgroundSize = "100px 100px";
	ostur.style.backgroundRepeat = "no-repeat";
	ostur.style.height = "100px";
	ostur.style.width = "100px";

/* -------------If -Else ------------- */

var wrapper = document.querySelector("#wrapper");
wrapper.ondblclick = function(e){
	var clickCount = e.detail;
	console.log (e.detail);//key er event property
	if (wrapper.style.backgroundColor === 'moccasin')
	{
		wrapper.style.backgroundColor = 'white';
	}
	else
	{
		wrapper.style.backgroundColor = 'moccasin';
	}
	
}

var secondLeft = 0;
var goLeft = function(e){
	console.log(e.key);//til að sjá hvað það er
	if(e.key==="ArrowRight"){ //key er event property
	
	var code = e.code;
	console.log(e.code);//key er event property

		if(e.ctrlKey) {//key er event property
		secondLeft = secondLeft + 100;
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
	if(parseInt(ostur.style.marginLeft) > 600){
		alert("MARK !");
		ostur.style.display = "none";	
	}

}
document.onkeydown = goLeft;

/* -------------Function 1------------- */
var hallo = function(nafn, aldur){
	return "Hæ ég heiti " + nafn + " og ég er " + aldur + " ára";
}
var mus = hallo("Max", 10);
console.log(mus);

var ahugamal = function(matur, aftreying){
	return " uppáhaldsmaturinn minn er " + matur + " og mér finnst gaman að " + aftreying;
}
var skemmtilegt = ahugamal("ostur", "naga spýtur");
console.log(skemmtilegt)

var button = document.querySelector("#button");
button.onclick = function(e){
	alert(mus + skemmtilegt);
	console.log (e.pageX);//key er event property
}





