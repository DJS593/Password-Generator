
// global variables

var generateBtn = document.querySelector("#generate");
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = ['0','1','2','3','4','5','6','7','8','9'];
var specialChar = ['!','@','#','$','%'];

var charCount = '';
var startPassword = '';
var charUsed = '';

// Assignment code here

function beginPassword(event) {
  
  // prompt for length of password
  var promptPasswordLength = prompt('How many characters do you want in your password?', 'Please enter a number between 8 and 128.');
  console.log(promptPasswordLength);

  // if the pasword length is acceptable, then prompt for characters to be used
  if (promptPasswordLength >= 8 && promptPasswordLength <= 128) {
  
    // prompt to use lowercase characters
    var promptLowercase = prompt("Would you like to include lowercase letters in the password? Enter 'yes' or 'no to choose.");
      if(promptLowercase === 'yes') {
        charUsed += lowercase;
        console.log(charUsed);
       
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
        console.log(charUsed);

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
    generatePassword(promptLowercase, promptUppercase, promptNumber, promptSpecialChar, promptPasswordLength, startPassword, charUsed);
  }
  
};  
 // need to remove the  

function generatePassword(promptLowercase, promptUppercase, promptNumber, promptSpecialChar, promptPasswordLength, startPassword, charUsed) {
  var remainingPassword = '';
  var finalPassword = '';
  

  // need to change absolute number with variable
  for (var i = 0; i < promptPasswordLength - 4; i++) {
    remainingPassword += charUsed[Math.floor(Math.random() * charUsed.length)];
  }
  console.log(remainingPassword);
  finalPassword = startPassword + remainingPassword;
  console.log(finalPassword);

};  
  
function randomPassword(promptPasswordLength, finalPassword) {

  //newFinalPassword = finalPassword

  for (var i = 0; i < promptPasswordLength; i++) {
    randomPassword = finalPassword[Math.floor(Math.random() * finalPassword)];
    console.log(randomPassword);
  }


  //startPassword = startPassword + specialChar[(Math.floor(Math.random() * specialChar.length))];

  // if(promptUppercase === 'yes' && promptLowercase === 'yes' && promptNumber === 'yes' && promptSpecialChar === 'yes') {
  //   let passwordArray = lowercase.concat(uppercase).concat(number).concat(specialChar);
  //   console.log(passwordArray);

  //   for(var i = 0; i < promptPasswordLength; i++) {
  //     password = password + passwordArray[Math.floor(Math.random() * Math.floor(passwordArray.length - 1))];
  //   }
  //   console.log(password);
    
  // }
  // else if(!promptUppercase === 'yes' && promptLowercase === 'yes' && promptNumber === 'yes' && promptSpecialChar === 'yes') {
  //   let passwordArray = lowercase.concat(uppercase).concat(number).concat(specialChar);
  //   console.log(passwordArray);

  //   for(var i = 0; i < promptPasswordLength; i++) {
  //     password = password + passwordArray[Math.floor(Math.random() * Math.floor(passwordArray.length - 1))];
  //   }    
  // }

};
  
  
// function makeid(l)
// {
// var text = "";
// var char_list = "abcdefghijklmnopqrstuvwxyz";
// for(var i=0; i < l; i++ )
// {  
// text += char_list.charAt(Math.floor(Math.random() * char_list.length));
// }
// return text;
// }
// console.log(makeid(1));


generateBtn.addEventListener("click", beginPassword);


