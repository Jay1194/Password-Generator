
  //Password contents
  let lowerC ="abcdefghijklmnopqrstuvwxyz";
  let numEric = "0123456789";
  let upperC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let special ="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  let starT = '';
  let charLength = 0;

//Empty string assigned for createdPassword so that characters can be inserted based on selectors chosen through confirm boxes
let createPassword = "";

// password criteria confirm
let confirmLowerC = '';
let confirmNumEric = '';
let confirmUpperC = '';
let confirmSpecial = '';

let  generatePassword = function(){

  let start = function() {
    var startBtn = confirm("would you like to generate a password?");
    console.log(startBtn);
  
    if (startBtn == false) {
      return start();
    }
  }
 start();
  

  var passwordLength = function()  {
     charLength = prompt("choose a length of at least 8 characters and no more than 128 characters.");
    console.log(charLength);
  
    if (charLength < 8 || charLength > 128) {
      window.alert("You must choose a pasword length of at least 8 characters and no more than 128 characters! Please try again.");
      return passwordLength();
    }
  };
  passwordLength();
  


    
  
    // Password criteria prompt
  let criTeria = function () {
         alert("Please choose at least one of the following passwword criteria options!")
  

         confirmLowerC = confirm("Would you like to include lowercase characters in your password?");
         if (confirmLowerC) {
          createPassword += lowerC}
         };
      
         confirmNumEric = confirm("Would you like to include numbers in your password?");
         if (confirmNumEric) {
          createPassword += numEric
         };
         
     
         confirmUpperC = confirm("Would you like to include uppercase characters in your password?");
         if (confirmUpperC) {
          createPassword += upperC
         };
         
  
         confirmSpecial = confirm("Would you like to include special characters in your password?");
         if (confirmSpecial) {
          createPassword += special
         };
         
  
  
         //If everything false return to top passwordQuestions() function and start again
         if (!confirmLowerC && !confirmNumEric && !confirmUpperC && !confirmSpecial) {
           alert("Choose at least one of the password options!");
           return criTeria();
         }
        
        
       

  //For every character less than the desired password length, add another character from the available createdPassword string
  let passwordFinal = "";
  for (let i = 0; i < parseInt(charLength); i++) {
    passwordFinal += createPassword[Math.floor(Math.random() * parseInt(charLength.length))]
  }
console.log(charLength) 
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
  writePassword();
   //Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
   