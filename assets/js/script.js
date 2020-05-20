// Criteria

// GIVEN I need a new, secure password
// click the button to generate a password
// series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// prompted for the length
// length of at least 8 characters and no more than 128 characters
// prompted for character types to include in the password (I have a prompt)
// lowercase, uppercase, numeric, and/or special characters (I have a prompt)
// WHEN I answer each prompt
// input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// global variables

var generateBtn = document.querySelector("#generate");

var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = ['0','1','2','3','4','5','6','7','8','9'];
var char = ['!','@','#','$','%']

var password = [];

// Assignment code here

// Get references to the #generate element
function generatePassword(event) {
  
  var promptPasswordLength = prompt('How many characters do you want in your password?', 'Please enter a number between 8 and 128.');
  console.log(promptPasswordLength);
  
  var promptLowercase = prompt("Would you like to use lowercase letters in the password? Enter 'yes' or 'no' to choose.");
    if (promptLowercase === 'yes' || promptLowercase === 'YES') {
      var useLowercase = 1;
    } else useLowercase = 0;
    console.log(useLowercase);

  var promptUppercase = prompt("Would you like to use UPPERCASE letters in the password? Enter 'yes' or 'no' to choose.");
    if (promptUppercase === 'yes' || promptUppercase === 'YES') {
      var useUppercase = 1;
    } else useUppercase = 0;
    console.log(useUppercase);

  var promptNumber = prompt("Would you like to use numbers in the password? Enter 'yes' or 'no' to choose.");
    if (promptNumber === 'yes' || promptNumber === 'YES') {
      var useNumber = 1;
    } else useNumber = 0;
    console.log(useNumber);

  var promptChar = confirm("Would you like to use special characters in the password? Enter 'yes' or 'no' to choose.");
    if (promptChar === 'yes' || promptChar === 'YES') {
      var useChar = 1;
    } else useChar = 0;
    console.log(useChar);

// add logic that if no criteria is picked then an alert is displayed stating, "At least one character type must be selected to generate password."


};

// var password = generatePassword(event); {
//   window.alert('Please provide answers that will be used to generate a password.');
//   var passwordLength = window.prompt('How many characters long do you want your password? Please pick between 8 and 128 characters.');



//}


// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", generatePassword);

//****************************************************************************//
// original code, but uses multiple divs on the html.....consolidating the code //

 

    