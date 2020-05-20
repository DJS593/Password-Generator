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
var specialChar = ['!','@','#','$','%']

var password = [];
var passwordCharacters = [];

// Assignment code here

// Get references to the #generate element
function generatePassword(event) {
  
  var promptPasswordLength = prompt('How many characters do you want in your password?', 'Please enter a number between 8 and 128.');
  console.log(promptPasswordLength);
  
  var promptLowercase = prompt("Would you like to use lowercase letters in the password? Enter 'yes' or 'no' to choose.");
    if (promptLowercase === 'yes' || promptLowercase === 'YES') {
      // giving a value of 1 if lowercase characters are utilized
      var useLowercase = 1
      // pushing lowercase characters into the passwordCharacters array to be used to create the final password
      passwordCharacters.push(lowercase);
      // creating a random index, so one lowercase character can be randomly put into the password; this is included to ensure that the password has at least one lowercase character 
      var randomIndexLowercase = Math.floor(Math.random() * number.length);
      // pushing one random lowercase character into the password array
      password.push(lowercase[randomIndexLowercase]);
    
    } else useLowercase = 0;
      // if the user does not want lowercase characters, then 'useLowercase' is given a value of 0; this will be used when adding the remaining password characters


  var promptUppercase = prompt("Would you like to use UPPERCASE letters in the password? Enter 'yes' or 'no' to choose.");
    if (promptUppercase === 'yes' || promptUppercase === 'YES') {
      // giving a value of 1 if uppercase characters are utilized
      var useUppercase = 1
      // pushing uppercase characters into the passwordCharacters array to be used to create the final password
      passwordCharacters.push(uppercase);
      // creating a random index, so one uppercase character can be randomly put into the password; this is included to ensure that the password has at least one uppercase character 
      var randomIndexUppercase = Math.floor(Math.random() * number.length);
      // pushing one random uppercase character into the password array
      password.push(uppercase[randomIndexUppercase]);
    
    } else useUppercase = 0;
      // if the user does not want uppercase characters, then 'useUppercase' is given a value of 0; this will be used when adding the remaining password characters

  var promptNumber = prompt("Would you like to use numbers in the password? Enter 'yes' or 'no' to choose.");
    if (promptNumber === 'yes' || promptNumber === 'YES') {
      // giving a numeric value of 1 if number characters are utilized
      var useNumber = 1
      // pushing number characters into the passwordCharacters array to be used to create the final password
      passwordCharacters.push(number);
      // creating a random index, so one number character can be randomly put into the password; this is included to ensure that the password has at least one number character 
      var randomIndexNumber = Math.floor(Math.random() * number.length);
      // pushing one random number character into the password array
      password.push(number[randomIndexNumber]);
    
    } else useNumber = 0;
      // if the user does not want number characters, then 'useNumber' is given a value of 0; this will be used when adding the remaining password characters


  var promptSpecialChar = prompt("Would you like to use special characters in the password? Enter 'yes' or 'no' to choose.");
    if (promptSpecialChar === 'yes' || promptSpecialChar === 'YES') {
      // giving a numeric value of 1 if special characters are utilized
      var useSpecialChar = 1
      // pushing special characters into the passwordCharacters array to be used to create the final password
      passwordCharacters.push(specialChar);
      // creating a random index, so one special character can be randomly put into the password; this is included to ensure that the password has at least one special character 
      var randomIndexSpecialChar = Math.floor(Math.random() * specialChar.length);
      // pushing one random special character into the password array
      password.push(specialChar[randomIndexSpecialChar]);
       
    } else useSpecialChar = 0;
      // if the user does not want special characters, then 'useSpecialChar' is given a value of 0; this will be used when adding the remaining password characters

    
    
      console.log('password', password);
      console.log('password pool', passwordCharacters);

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

 

    