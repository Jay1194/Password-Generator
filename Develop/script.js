
// To begin
function promptMe() {
  var startBtn = confirm("would you like to generate a password?");
  console.log(startBtn);

  if (startBtn) {
  var charL = prompt("choose a length of at least 8 characters and no more than 128 characters.");
  console.log(charL);
  }

  else {
    promptMe();
  }

  if (charL) {
    var lowerC = confirm("Would you like to include lowercase characters in your password?");
    console.log(lowerC);
  }

  if (charL) {
    var numEric = confirm("Would you like to include numbers in your password?");
    console.log(numEric);
  }

  if (lowerC) {
    var upperC = confirm("Would you like to include uppercase characters in your password?");
    console.log(upperC);
  }

  if (upperC) {
    var special = confirm("Would you like to include special characters in your password?");
    console.log(special);
  }

   
}











/*
// Assignment Code Targets 
var generateBtn = document.querySelector("#generate");




// Write password to the #password input 
function writePassword() {
  var password = generatePassword();

  // targets password box
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prints password
document.getElementById("password").innerHTML = writePassword;
*/