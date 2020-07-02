
// global variables

const generateBtn = document.querySelector("#generate");

const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const number = ['0','1','2','3','4','5','6','7','8','9'];
const specialChar = ['!','@','#','$','%','&','*'];

//let charCount = '';
let startPassword = '';
let charUsed = '';  
let charTypeCount = 0; 
let password = [];


// Assignment code here

function beginPassword(event) {
  
  // prompt for length of password
  var promptPasswordLength = prompt('How many characters do you want in your password?', 'Please enter a number between 8 and 128.');
  
  // if the pasword length is acceptable, then prompt for characters to be used
  if (promptPasswordLength >= 8 && promptPasswordLength <= 128) {
  
    // prompt to use lowercase characters
    var promptLowercase = prompt("Would you like to include lowercase letters in the password? Enter 'yes' or 'no' to choose.");
      
    // if the user selected lowercase, then add lowercase to the char list (charUsed)
    if(promptLowercase === 'yes') {
        charUsed += lowercase;
        charTypeCount += 1;
       
        for(var i=0; i < 1; i++ )
        {  
          // pick a lowercase character by random index
          startPassword = startPassword + lowercase[(Math.floor(Math.random() * lowercase.length))];
        }
      }
      
    // prompt to use uppercase characters  
    var promptUppercase = prompt("Would you like to use UPPERCASE letters in the password? Enter 'yes' or 'no' to choose.");
      
      
      if(promptUppercase === 'yes') {
        charUsed += uppercase;
        charTypeCount += 1;

        for(var i=0; i < 1; i++ )
        {  
          // pick an uppercase character by random index
          startPassword = startPassword + uppercase[(Math.floor(Math.random() * uppercase.length))];
        }
      }
   
    // prompt to use number characters
    var promptNumber = prompt("Would you like to use numbers in the password? Enter 'yes' or 'no' to choose.");
      if(promptNumber === 'yes') {
        charUsed += number;
        charTypeCount += 1;

        for(var i=0; i < 1; i++ )
        {  
          // pick a number character by random index
          startPassword = startPassword + number[(Math.floor(Math.random() * number.length))];
        }
      }
      
    
    // prompt to use special characters
    var promptSpecialChar = prompt("Would you like to use special characters in the password? Enter 'yes' or 'no' to choose.");
      if(promptSpecialChar === 'yes') {
        charUsed += specialChar;
        charTypeCount += 1;

        for(var i=0; i < 1; i++ )
        {  
          // pick a special character by random index
          startPassword = startPassword + specialChar[(Math.floor(Math.random() * specialChar.length))];
        }
      } 
  } else {
    window.alert('Total characters must be between 8 and 128. Please try again!');
    return;
  }
   
  if (promptUppercase !== 'yes' && promptLowercase !== 'yes' && promptNumber !== 'yes' && promptSpecialChar !== 'yes') {
    window.alert('At least one character type must be chosen.  Please try again!');
    
    // if the user has not picked at least on character type, the process will stop
    return;
    //beginPassword();
  } else {
    
    // inititate generatePassword() and pass the needed information
    generatePassword(promptPasswordLength, startPassword, charUsed, charTypeCount, password);
  }
 
};  

// generatePassword() picks the remaining characters randomly and append to the html page
function generatePassword(promptPasswordLength, startPassword, charUsed, charTypeCount, password) {
  let remainingPassword = '';
  let finalPassword = '';
  
  let adjCharUsed = charUsed.split(',');
  
  // loop through the char list to pick the remaining characters randomly
  for (var i = 0; i < promptPasswordLength - charTypeCount; i++) {
    remainingPassword += adjCharUsed[Math.floor(Math.random() * adjCharUsed.length)];
  }
  
  // combine the password components

  finalPassword = startPassword + remainingPassword;
  
  // append the password to the textarea
  document.getElementById('password').append(finalPassword);
  

};  
  

// button click initiates the beginPassword();
generateBtn.addEventListener("click", beginPassword);


