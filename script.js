const Icon = document.querySelector('#Icon')
const output = document.getElementById("demo");
const slider = document.getElementById("myRange");
const copyBtn = document.getElementById("copy");
const passwordTxt = document.getElementById("password");
const length = document.getElementById("myRange");
const incNumbers = document.getElementById("numbers");
const incBig = document.getElementById("Big");
const incSmall = document.getElementById("Small");
const incSymbols = document.getElementById("symbols");

const alpha = "abcdefghijklmnopqrstuvwxyz";
const alphaBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

Icon.addEventListener('click', () => {
  Icon.classList.remove('active')
  setTimeout(() => {
    Icon.classList.add('active')
  }, 0);

  let characters = '';
  incBig.checked ? (characters += alphaBig) : "";
  incSmall.checked ? (characters += alpha) : "";
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
})

const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

copyBtn.addEventListener("click", () => {
  passwordTxt.select();
  document.execCommand("copy");
});

document.addEventListener('keydown', function(event) {
  var code = event.code;
  if (code == 'Enter') {
    Icon.classList.remove('active')
    setTimeout(() => {
      Icon.classList.add('active')
    }, 10);
    let charactersS = '';
    incBig.checked ? (charactersS += alphaBig) : "";
    incSmall.checked ? (charactersS += alpha) : "";
    incNumbers.checked ? (charactersS += numbers) : "";
    incSymbols.checked ? (charactersS += symbols) : "";
    passwordTxt.value = generatePassword(length.value, charactersS);
  }
});
