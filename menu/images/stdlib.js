//<!-- stdlib.js | JavaScript-библиотека стандартных констант и функций


//*********************************************
//*  переменные и функции "среды окружения"   *
//*********************************************

dom = (document.getElementById) ? true : false;
nn4 = (document.layers) ? true : false;
ie = (document.all) ? true : false;
ie4 = ie && !dom;
Mac = (navigator.appVersion.indexOf("Mac") != -1);
ie4mac = ie4 && Mac;
opera = (navigator.userAgent.indexOf("Opera")!=-1);
Konqueror = (navigator.userAgent.indexOf("Konqueror")!=-1);
function empty(){}

var stdMouseX = -1, stdMouseY = -1;
var MouseMoved = 0;
var stdHint="";
var MouseMove = empty;
var Init = empty;

if(nn4) document.captureEvents(Event.MOUSEMOVE); 
document.onmousemove = stdMouseMove; 

function stdMouseMove(e)
{
	stdMouseX = (nn4) ? (e.pageX):(event.x + document.body.scrollLeft);
	stdMouseY = (nn4) ? (e.pageY):(event.y + document.body.scrollTop);
	MouseMoved++;
	MouseMove(e);
	HintMouseMove();
}

function HintMouseMove()
{
	if(stdHint)moveElem(stdHint, stdMouseX+10, stdMouseY+10);
}

function stdInit()
{
  Init();
}

//*********************************************
//* элементарные функции для работы со слоями *
//*********************************************

function showElem(elemId) {
if (dom) document.getElementById(elemId).style.visibility = "visible";
	else if (ie4) document.all[elemId].style.visibility = "visible";
		else if (nn4) document.layers[elemId].visibility = "show";
}

function hideElem(elemId) {
if (dom) document.getElementById(elemId).style.visibility = "hidden";
	else if (ie4) document.all[elemId].style.visibility = "hidden";
		else if (nn4) document.layers[elemId].visibility = "hide";
}

function putElem(elemId) {
if (dom) document.getElementById(elemId).style.display = "block";
	else if (ie4) document.all[elemId].style.display = "block";
}

function removeElem(elemId) {
if (dom) document.getElementById(elemId).style.display = "none";
	else if (ie4) document.all[elemId].style.display = "none";
}

function moveElem(idname,x,y)
{
if (dom)
	with(eval(idname)){
		style.left = x;
		style.top = y;
	}
else if(nn4){
		document.layers[idname].left=x;
		document.layers[idname].top=y;
	}
}

function changeElem(elemId)
{
if(dom) 
	if(document.getElementById(elemId).style.display == "block")
		document.getElementById(elemId).style.display = "none"
	else
		document.getElementById(elemId).style.display = "block"

else if (ie4) 
	if(document.all[elemId].style.display == "block")
		document.all[elemId].style.display = "none";
	else
		document.all[elemId].style.display = "block";
}

function exchangeElem(elemId)
{
if(dom) 
	if(document.getElementById(elemId).style.visibility == "hidden")
		document.getElementById(elemId).style.visibility= "visible"
	else
		document.getElementById(elemId).style.visibility= "hidden"

else if (ie4) 
	if(document.all[elemId].style.visibility== "hidden")
		document.all[elemId].style.visibility= "visible";
	else
		document.all[elemId].style.visibility= "hidden";
else if (nn4) 
	if(document.layers[elemId].visibility=="hide")
		document.layers[elemId].visibility="show";
	else
		document.layers[elemId].visibility="hide";
}


function relPosX(which) {
if (nn4) {
return document.layers[which].pageX;
} else {
var elem = (dom)? document.getElementById(which) : document.all[which];
var pos = elem.offsetLeft;
while (elem.offsetParent != null) {
elem = elem.offsetParent;
pos += elem.offsetLeft;
if (elem.tagName == 'BODY') break;
} return pos;
}
}

function relPosY(which) {
if (nn4) {
return document.layers[which].pageY;
} else {
var elem = (dom)? document.getElementById(which) : document.all[which];
var pos = elem.offsetTop;
while (elem.offsetParent != null) {
elem = elem.offsetParent;
pos += elem.offsetTop;
if (elem.tagName == 'BODY') break;
} return pos;
}
}

//*********************************************
//*           стандартные функции             *
//*********************************************

function iLayer(nameid,width,text)
{
if(!width)width=1;
if(!text)text='';
if(nn4)
document.write("<ilayer name='"+nameid+"'width='"+width+"'>"+text+"</ilayer>")
else
document.write("<span id='"+nameid+"' style='position: relative; width: "+width+"px;'>"+text+"</span>")
}

function checkmail(email)
{if (email == "") return(false);
 if (email.indexOf(".") == -1) return(false);
 dog = email.indexOf("@");
 if (dog == -1) return(false);
 if ( (dog < 1) || (dog > email.length - 5))return(false);
 if ((email.charAt(dog - 1) == '.') || (email.charAt(dog + 1) == '.')) return(false);
 if (email.charAt(email.length - 1) == '.') return(false);
 return true;
}


function startHint(nameid)
{
	if(stdHint)hideElem(stdHint);
	stdHint=nameid;
	moveElem(stdHint, stdMouseX+10, stdMouseY+10);
	showElem(stdHint);
}

function stopHint()
{
	hideElem(stdHint);
	stdHint="";
}


bannerFadeObjects = new Object();
bannerFadeTimers = new Object();
function bannerFade(object, destOp, rate, delta){
if (!document.all)
return
if (object != "[object]"){
setTimeout("bannerFade("+object+","+destOp+","+rate+","+delta+")",0);
return;
}
clearTimeout(bannerFadeTimers[object.sourceIndex]);
diff = destOp-object.filters.alpha.opacity;
direction = 1;
if (object.filters.alpha.opacity > destOp){
direction = -1;
}
delta=Math.min(direction*diff,delta);
object.filters.alpha.opacity+=direction*delta;
if (object.filters.alpha.opacity != destOp){
bannerFadeObjects[object.sourceIndex]=object;
bannerFadeTimers[object.sourceIndex]=setTimeout("bannerFade(bannerFadeObjects["+object.sourceIndex+"],"+destOp+","+rate+","+delta+")",rate);
}
}
//-->
