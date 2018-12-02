// ==UserScript==
// @name            Steam Age Check Confirm
// @namespace       https://github.com/jkbsz/webscripts
// @description     Advances discovery queue.
// @include         http://store.steampowered.com/agecheck/*
// @include         https://store.steampowered.com/agecheck/*
// @run-at          document-end
// @grant           none
// ==/UserScript==


(function () {window.addEventListener("load", function (e) {confirmAge()}, false);})();

function confirmAge() {
	console.log("confirmAge start");
	document.getElementById("ageDay").options[1].selected = true;
	document.getElementById("ageMonth").options[1].selected = true;
	document.getElementById("ageYear").options[1].selected = true;
	var spanElements = document.getElementsByTagName("span");
	for (var i = 0; i < spanElements.length; i++) {
	  if (spanElements[i].textContent == "View Page") {
		console.log("confirmAge click button");
		spanElements[i].parentNode.click();
		break;
	  }
	}
	console.log("confirmAge end");
}
