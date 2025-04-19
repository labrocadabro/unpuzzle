console.log("Script loaded");

const codewordForm = document.getElementById("codeword-form");
const codewordInput = document.getElementById("codeword");
const wordList = document.getElementById("word-list");

codewordForm.addEventListener("submit", findWords);

function findWords(event) {
  event.preventDefault();
  const codeword = codewordInput.value;
  console.log("Submit button clicked");
  console.log("Codeword input:", codewordInput.value);
  const regex = generateRegex(codeword);
  console.log("Generated regex:", regex);
  const words = [];

  fetch("/words.txt")
    .then((response) => response.text())
    .then((data) => {
      const lines = data.split("\n");
      lines.forEach((line) => {
        if (line.match(regex)) {
          words.push(line);
        }
      });
      displayWords(words);
    });
}


function displayWords(words) {
  wordList.innerHTML = "";
  words.forEach((word) => {
    const li = document.createElement("li");
    li.textContent = word;
    wordList.appendChild(li);
  });
}

function generateRegex(codeword) {
  const codewordArray = codeword.toLowerCase().split("");
  const regexParts = codewordArray.map((char) => {
    if (isAlphabetic(char)) {
      return char;
    } else if (isNumeric(char)) {
      return `[a-z]{${char}}`;
    }
    else return "";
  });
  return new RegExp("^" + regexParts.join("") + "$");
}

function isAlphabetic(char) {
  return char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
}

function isNumeric(char) {
  return char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57;
}
