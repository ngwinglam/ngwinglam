// 屏幕宽高
var windowWidth;
var windowHeight;

// 项目数量
var num = 3;

// 项目数组
var project = new Array(num);

// 图片数组
var picture = new Array(num);
var picWidth = new Array(num);

var package;
var content;

// 焦点
var point;
var points = new Array(num);

var index = 1;

window.onload = function() {
	for(var i = 1; i <= num; i++) {
		project[i] = document.getElementById("project" + i);
		
		picture[i] = project[i].getElementsByTagName("img")[0];
		picWidth[i] = picture[i].width;
		
		points[i] = document.getElementById("point" + i);
		points[i].addEventListener("click", changePoint);
	}
	
	package = document.getElementById("package");
	content = document.getElementById("content");
	point = document.getElementById("point");
	
	init();
	
	
	
}

// 鼠标滚动事件
document.addEventListener("mousewheel", mouseScroll);
document.addEventListener("DOMMouseScroll", mouseScroll);

window.onresize = function() {
	//windowWidth = document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth;
	//windowHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
	init();
}

function init() {
	windowWidth = document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth;
	windowHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
	
	for(var i = 1; i <= num; i++) {
		project[i].style.height = windowHeight + "px";
		
		if(picture[i].width > windowWidth / 4 || picture[i].width < picWidth[i]) {
			picture[i].width = windowWidth / 4;
		}
		picture[i].style.marginTop = (windowHeight - picture[i].height) / 2 + "px";
	}
	
	package.style.height = windowHeight + "px";
	
	content.style.height = windowHeight * num + "px";
	content.style.top = -windowHeight * (index - 1) + "px";
	
	points[index].className = "active";
}

function mouseScroll(e) {
	var upOrDown;
	if(e.type == "mousewheel") {
		upOrDown = e.wheelDelta;
	} else if(e.type == "DOMMouseScroll") {
		upOrDown = -e.detail;
	}
	
	if(upOrDown > 0) {
		index --;
		content.style.top = parseInt(content.style.top) + windowHeight + "px";
	} else if(upOrDown < 0) {
		index ++;
		content.style.top = parseInt(content.style.top) - windowHeight + "px";
	}
}

function changePoint() {
	for(var i = 1; i <= num; i++) {
		points[i].className = "";
	}
	this.className = "active";
	index = this.getAttribute("index");
	content.style.top = -windowHeight * (index - 1) + "px";
}