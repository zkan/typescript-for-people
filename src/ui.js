"use strict";
var captcha_1 = require("./captcha");
document
    .querySelector("form")
    .addEventListener("submit", function (e) {
    e.preventDefault();
    var left = document.querySelector("input[name=left]");
    var right = document.querySelector("input[name=right]");
    var result = new captcha_1.Captcha().generate(1, parseInt(left.value), parseInt(right.value), 1);
    document.getElementById('result').innerHTML = result;
});
