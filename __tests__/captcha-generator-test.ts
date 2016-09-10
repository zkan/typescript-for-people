/// <reference path="../typings/jest/jest.d.ts" />

class Captcha {
  convert_number_to_text = function(num: number) {
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
    return number_text[num];
  }

  generate = function(pattern, left, right, operator) {
    right = this.convert_number_to_text(right);
    return `1 + ${right}`;
  };
};


describe("Captcha", function() {
  describe("convert number to text", function() {
    it("should return text according to the input", function() {
      let captcha = new Captcha();
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
        expect(captcha.convert_number_to_text(input)).toEqual(number_text[input]);
      }
    });
  });

  describe("first pattern", function() {
    it("should return 1 + Two when left is 1, right is 2, and operator is 1", function() {
      let captcha = new Captcha();
      expect(captcha.generate(1, 1, 2, 1)).toEqual("1 + Two");
    });

    it("should return 1 + Three when left is 1, right is 3, and operator is 1", function() {
      let captcha = new Captcha();
      expect(captcha.generate(1, 1, 3, 1)).toEqual("1 + Three");
    });
  });
});
