/// <reference path="../typings/jest/jest.d.ts" />

import {Captcha} from "../src/captcha";

describe("Captcha", function() {
  var captcha;

  beforeEach(function() {
    captcha = new Captcha();
  });

  describe("convert operator to text", function() {
    it("should return text according to the input", function() {
      let operator_text = {
        1: "+",
        2: "-",
        3: "*",
      }
      for (let input = 1; input <= 3; input++) {
        expect(captcha.convert_operator_to_operator_text(input)).toEqual(operator_text[input]);
      }
    });
  });

  describe("convert number to text", function() {
    it("should return text according to the input", function() {
      let number_text = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
      }
      for (let input = 1; input <= 9; input++) {
        expect(captcha.convert_number_to_number_text(input)).toEqual(number_text[input]);
      }
    });
  });

  describe("first pattern", function() {
    it("should return 1 + Two when left is 1, right is 2, and operator is 1", function() {
      expect(captcha.generate(1, 1, 2, 1)).toEqual("1 + Two");
    });

    it("should return 1 + Three when left is 1, right is 3, and operator is 1", function() {
      expect(captcha.generate(1, 1, 3, 1)).toEqual("1 + Three");
    });

    it("should return 5 + Three when left is 5, right is 3, and operator is 1", function() {
      expect(captcha.generate(1, 5, 3, 1)).toEqual("5 + Three");
    });

    it("should return 5 - Three when left is 5, right is 3, and operator is 2", function() {
      expect(captcha.generate(1, 5, 3, 2)).toEqual("5 - Three");
    });

    it("should return 5 * Three when left is 5, right is 3, and operator is 3", function() {
      expect(captcha.generate(1, 5, 3, 3)).toEqual("5 * Three");
    });
  });

  describe("second pattern", function() {
    it("should return Five * 3 when left is 5, right is 3, and operator is 3", function() {
      expect(captcha.generate(2, 5, 3, 3)).toEqual("Five * 3");
    });
  });
});
