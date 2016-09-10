import {Captcha} from "./captcha"

document
  .querySelector("form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    let left: any = document.querySelector("input[name=left]");
    let right: any = document.querySelector("input[name=right]");

    let result = new Captcha().generate(1, parseInt(left.value), parseInt(right.value), 1);
    document.getElementById('result').innerHTML = result;
  });
