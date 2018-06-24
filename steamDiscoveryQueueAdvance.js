// ==UserScript==
// @name            Steam Discovery Queue Auto Advance
// @namespace       https://github.com/jkbsz/webscripts
// @description     Advances discovery queue.
// @include         http://store.steampowered.com/app/*
// @include         http://store.steampowered.com/agecheck/app/*
// @include         https://store.steampowered.com/app/*
// @include         https://store.steampowered.com/agecheck/app/*
// @run-at          document-end
// @grant           none
// ==/UserScript==
 
 
(function () {window.addEventListener("load", function (e) {clickNext()}, false);})();

function clickNext() {
	var a = document.getElementsByClassName("btnv6_blue_hoverfade btn_small btn_next_in_queue_trigger");
  console.log(a.length);
	if (a.length > 0) {
		console.log("Age check");
		a[0].click();
	} else {
		var b = document.getElementsByClassName("btn_next_in_queue btn_next_in_queue_trigger");
		if (b.length > 0 ) {
			console.log("Normal next");
			b[0].click();
		}
	}
}