const passBox = document.getElementById("password");
const passLength = 10;
const btn = document.querySelector("button");
const img = document.getElementById("copyImg");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const spChar = "!@#$%^&*(){}[]";

const allChar = upperCase + lowerCase + numbers + spChar;

function createPass() {
  let pass = "";

  pass += upperCase[Math.floor(Math.random() * upperCase.length)];
  pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  pass += numbers[Math.floor(Math.random() * numbers.length)];
  pass += spChar[Math.floor(Math.random() * spChar.length)];

  while (passLength > pass.length) {
    pass += allChar[Math.floor(Math.random() * allChar.length)];
  }

  passBox.value = pass;
}

function copyPass() {
  passBox.select();
  document.execCommand("copy");
}

btn.addEventListener("click", (evt) => {
  createPass();
});

img.addEventListener("click", (evt) => {
  copyPass();
});
