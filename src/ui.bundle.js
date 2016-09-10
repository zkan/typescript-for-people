/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var captcha_1 = __webpack_require__(1);
	document
	    .querySelector("form")
	    .addEventListener("submit", function (e) {
	    e.preventDefault();
	    var left = document.querySelector("input[name=left]");
	    var right = document.querySelector("input[name=right]");
	    var result = new captcha_1.Captcha().generate(1, parseInt(left.value), parseInt(right.value), 1);
	    document.getElementById('result').innerHTML = result;
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var Captcha = (function () {
	    function Captcha() {
	    }
	    Captcha.prototype.convert_number_to_number_text = function (num) {
	        var number_text = {
	            1: "One",
	            2: "Two",
	            3: "Three",
	            4: "Four",
	            5: "Five",
	            6: "Six",
	            7: "Seven",
	            8: "Eight",
	            9: "Nine",
	        };
	        return number_text[num];
	    };
	    Captcha.prototype.convert_operator_to_operator_text = function (num) {
	        var operator_text = {
	            1: "+",
	            2: "-",
	            3: "*",
	        };
	        return operator_text[num];
	    };
	    Captcha.prototype.generate = function (pattern, left, right, operator) {
	        var convertedOperator = this.convert_operator_to_operator_text(operator);
	        var leftOperand;
	        var rightOperand;
	        if (pattern === 1) {
	            leftOperand = left;
	            rightOperand = this.convert_number_to_number_text(right);
	        }
	        else if (pattern === 2) {
	            leftOperand = this.convert_number_to_number_text(left);
	            ;
	            rightOperand = right;
	        }
	        return leftOperand + " " + convertedOperator + " " + rightOperand;
	    };
	    ;
	    return Captcha;
	}());
	exports.Captcha = Captcha;
	;


/***/ }
/******/ ]);