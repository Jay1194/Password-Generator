
// Password contents
let lowerC = "abcdefghijklmnopqrstuvwxyz";
let numEric = "0123456789";
let upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
let charLength = 0;

//Empty string assigned for createPassword
let createPassword = "";

// password criteria confirm
let confirmLowerC = false;
let confirmNumEric = false;
let confirmUpperC = false;
let confirmSpecial = false;

// Start code
var generatePassword = function () {
  var start = function () {
    var startBtn = confirm("Would you like to generate a password?");
    console.log(startBtn);
    if (!startBtn) {
      return start();
    }
  };
  start();

  // Password length prompt
  var passwordLength = function () {
    charLength = prompt(
      "Choose a length of at least 8 characters and no more than 128 characters."
    );
    console.log(charLength);
    if (charLength < 8 || charLength > 128) {
      window.alert(
        "You must choose a password length of at least 8 characters and no more than 128 characters! Please try again."
      );
      return passwordLength();
    }
  };
  passwordLength();

  // Password criteria prompt
  var criteria = function () {
    alert("Please choose at least one of the following password criteria options!");

    confirmLowerC = confirm("Would you like to include lowercase characters in your password?");
    if (confirmLowerC) {
      createPassword += lowerC;
    }

    confirmNumEric = confirm("Would you like to include numbers in your password?");
    if (confirmNumEric) {
      createPassword += numEric;
    }

    confirmUpperC = confirm("Would you like to include uppercase characters in your password?");
    if (confirmUpperC) {
      createPassword += upperC;
    }

    confirmSpecial = confirm("Would you like to include special characters in your password?");
    if (confirmSpecial) {
      createPassword += special;
    }

    //If everything is false, return to the top criteria() function and start again
    if (!confirmLowerC && !confirmNumEric && !confirmUpperC && !confirmSpecial) {
      alert("Choose at least one of the password options!");
      return criteria();
    }
  };
  criteria();

  //For every character less than the desired password length
  let passwordFinal = "";
  for (let i = 0; i < parseInt(charLength); i++) {
    passwordFinal += createPassword[Math.floor(Math.random() * createPassword.length)];
  }

   //Returns the generated password
  return passwordFinal;
};

// Assignment Code Targets
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
