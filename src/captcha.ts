export class Captcha {
  convert_number_to_number_text(num: number): string {
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

  convert_operator_to_operator_text(num: number): string {
    let operator_text = {
      1: "+",
      2: "-",
      3: "*",
    }
    return operator_text[num];
  }

  generate(pattern: number, left: number, right: number, operator: number): string {
    let converted_right = this.convert_number_to_number_text(right);
    let converted_operator = this.convert_operator_to_operator_text(operator);

    if (pattern === 1) {
      return `${left} ${converted_operator} ${converted_right}`;
    }
    else if (pattern === 2) {
      return `${converted_right} ${converted_operator} ${left}`;
    }
  };
};
