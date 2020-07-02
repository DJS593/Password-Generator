
// global variables

const generateBtn = document.querySelector("#generate");

const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const number = ['0','1','2','3','4','5','6','7','8','9'];
const specialChar = ['!','@','#','$','%'];

let charCount = '';
let startPassword = '';
let charUsed = '';  
let charTypeCount = 0; 


// Assignment code here

function beginPassword(event) {
  
  // prompt for length of password
  var promptPasswordLength = prompt('How many characters do you want in your password?', 'Please enter a number between 8 and 128.');
  console.log(promptPasswordLength);

  // if the pasword length is acceptable, then prompt for characters to be used
  if (promptPasswordLength >= 8 && promptPasswordLength <= 128) {
  
    // prompt to use lowercase characters
    var promptLowercase = prompt("Would you like to include lowercase letters in the password? Enter 'yes' or 'no' to choose.");
      if(promptLowercase === 'yes') {
        charUsed += lowercase;
        console.log(charUsed);
        charTypeCount += 1;
       
        for(var i=0; i < 1; i++ )
        {  
          startPassword = startPassword + lowercase[(Math.floor(Math.random() * lowercase.length))];
        }
        console.log('lowercase', startPassword);
      }
      
    // prompt to use uppercase characters  
    var promptUppercase = prompt("Would you like to use UPPERCASE letters in the password? Enter 'yes' or 'no' to choose.");
      if(promptUppercase === 'yes') {
        charUsed += uppercase;
        console.log(charUsed);
        charTypeCount += 1;

        for(var i=0; i < 1; i++ )
        {  
          startPassword = startPassword + uppercase[(Math.floor(Math.random() * lowercase.length))];
        }
        console.log('uppercase', startPassword);
      }
   
    // prompt to use number characters
    var promptNumber = prompt("Would you like to use numbers in the password? Enter 'yes' or 'no' to choose.");
      if(promptNumber === 'yes') {
        charUsed += number;
        console.log(charUsed);
        charTypeCount += 1;

        for(var i=0; i < 1; i++ )
        {  
          startPassword = startPassword + number[(Math.floor(Math.random() * number.length))];
        }
        console.log('number', startPassword);
      }
      
    
    // prompt to use special characters
    var promptSpecialChar = prompt("Would you like to use special characters in the password? Enter 'yes' or 'no' to choose.");
      if(promptSpecialChar === 'yes') {
        charUsed += specialChar;
        console.log('final list', charUsed);
        console.log(charUsed);
        charTypeCount += 1;
        console.log('final question', charTypeCount);

        for(var i=0; i < 1; i++ )
        {  
          startPassword = startPassword + specialChar[(Math.floor(Math.random() * specialChar.length))];
        }
        console.log('specialChar', startPassword);
      }
    
  }
  else {
    window.alert('Total characters must be between 8 and 128. Please try again!');
  }
   
  if (promptUppercase !== 'yes' && promptLowercase !== 'yes' && promptNumber !== 'yes' && promptSpecialChar !== 'yes') {
    window.alert('At least one character type must be chosen.  Please try again!');
    beginPassword();
  } else {
    
    generatePassword(promptPasswordLength, startPassword, charUsed, charTypeCount);
  }
 
};  



function generatePassword(promptPasswordLength, startPassword, charUsed, charTypeCount) {
  var remainingPassword = '';
  var finalPassword = '';
  console.log('check that data was passed')
  console.log(charUsed);
  console.log(promptPasswordLength);
  console.log(startPassword);
  console.log(charTypeCount);
  // need to change absolute number with variable
  var adjCharUsed = charUsed.split(',');
  console.log('character list less comma', adjCharUsed);
  
  for (var i = 0; i < promptPasswordLength - charTypeCount; i++) {
    remainingPassword += adjCharUsed[Math.floor(Math.random() * adjCharUsed.length)];
  }
  console.log(remainingPassword);
  finalPassword = startPassword + remainingPassword;
  //randomFinalPassword = finalPassword.sort();

  console.log('finalPassword', finalPassword);
  //console.log('randomFinalPassword', randomFinalPassword);

  printPassword(finalPassword);

};  
  

function printPassword(finalPassword) {

  document.getElementById('password').append(finalPassword);
}



generateBtn.addEventListener("click", beginPassword);


