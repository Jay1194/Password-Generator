
// global variables (turn into array)
var  confirmP = {
confirmLowerC: true || false, 
confirmNumEric: true || false,
confirmUpperC: true || false,
confirmSpecial: true || false
}


var passwordCriteria = {
  lowerC: "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z",
  numEric: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9",
  upperC: "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P",
  special: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
}


// To begin
var promptMe = function() {
  var startBtn = confirm("would you like to generate a password?");
  console.log(startBtn);

  if (startBtn == false) {
    return promptMe();
  }
};


  // function chose pasword character's length
var passwordLength = function()  {
  var characterLength = prompt("choose a length of at least 8 characters and no more than 128 characters.");
  console.log(characterLength);

  if (characterLength < 8 || characterLength > 128) {
    window.alert("You must choose a pasword length of at least 8 characters and no more than 128 characters! Please try again.");
    return passwordLength();
  }
};


// function for password criteria
  var passwordQuestions = function() {
  

  // Password criteria prompt
       alert("Please choose at least one of the following passwword criteria options!")

       confirmP.confirmLowerC = confirm("Would you like to include lowercase characters in your password?");
       console.log(confirmP.confirmLowerC);
    
       confirmP.confirmNumEric = confirm("Would you like to include numbers in your password?");
       console.log(confirmP.confirmNumEric)
   
       confirmP.confirmUpperC = confirm("Would you like to include uppercase characters in your password?");
       console.log(confirmP.confirmUpperC);

       confirmP.confirmSpecial = confirm("Would you like to include special characters in your password?");
       console.log(confirmP.confirmSpecial);


    //If everything false return to top passwordQuestions() function and start again
    if (Object.values(confirmP).every(item => item === false)) {
      alert("Choose at least one of the password options!")
      return passwordQuestions();
    }
};




promptMe();
passwordLength();
passwordQuestions();


  // randomize password baised off criteria selected



  // display password in box





//password criteria object, If question true randomize the answer from this object basied of user put criteria 
// Make array?
// make for loop to loop through array basied on conditions








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