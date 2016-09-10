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
