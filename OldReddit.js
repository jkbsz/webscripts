// ==UserScript==
// @name         old.reddit
// @namespace    https://github.com/jkbsz/webscripts
// @version      1.0
// @match        https://www.reddit.com/*
// @match        https://reddit.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    top.location.hostname = "old.reddit.com";
})();
