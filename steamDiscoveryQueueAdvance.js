// ==UserScript==
// @name            Steam Discovery Queue Auto Advance
// @namespace       https://github.com/jkbsz/webscripts
// @description     Advances discovery queue.
// @include         http://store.steampowered.com/app/*
// @include         https://store.steampowered.com/app/*
// @run-at          document-end
// @grant           none
// ==/UserScript==


(function () {window.addEventListener("load", function (e) {clickNext()}, false);})();

function clickNext() {
	console.log("clickNext begin");
	var b = document.getElementsByClassName("btn_next_in_queue btn_next_in_queue_trigger");
	if (b.length > 0 ) {
		console.log("clickNext click button");
		b[0].click();
	}
	console.log("clickNext end");
}
