// https://github.com/davidtheclark/no-scroll/blob/master/index.js

var isOn = false;
var scrollbarSize;
var scrollTop;

function getScrollbarSize() {
	if (typeof scrollbarSize !== "undefined") return scrollbarSize;

	var doc = document.documentElement;
	var dummyScroller = document.createElement("div");

	dummyScroller.setAttribute(
		"style",
		"width:99px;height:99px;" + "position:absolute;top:-9999px;overflow:scroll;"
	);

	doc.appendChild(dummyScroller);
	scrollbarSize = dummyScroller.offsetWidth - dummyScroller.clientWidth;
	doc.removeChild(dummyScroller);

	return scrollbarSize;
}

function hasScrollbar() {
	return document.documentElement.scrollHeight > window.innerHeight;
}

export function on() {
	if (typeof document === "undefined" || isOn) return;

	var doc = document.documentElement;
	scrollTop = window.pageYOffset;

	if (hasScrollbar()) {
		doc.style.width = "calc(100% - " + getScrollbarSize() + "px)";
	} else {
		doc.style.width = "100%";
	}

	doc.style.position = "fixed";
	doc.style.top = -scrollTop + "px";
	doc.style.overflow = "hidden";

	isOn = true;
}

export function off() {
	if (typeof document === "undefined" || !isOn) return;

	var doc = document.documentElement;
	doc.style.width = "";
	doc.style.position = "";
	doc.style.top = "";
	doc.style.overflow = "";

	if (typeof scrollTop === "number") {
		window.scroll(0, scrollTop);
	}

	isOn = false;
}

export function toggle() {
	if (isOn) {
		off();
		return;
	}

	on();
}
