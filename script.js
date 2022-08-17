// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generate alphabetic chars
var lowerChars = [];
var upperChars = [];
for (var i = 'a'.charCodeAt(0); i < 'a'.charCodeAt(0) + 26; i++) {
  lowerChars.push(String.fromCharCode(i)); // converts unicode to lowercase alpha char
  upperChars.push(String.fromCharCode(i).toUpperCase()); // converts unicode to lowercase alpha char, makes it uppercase
}

// generate numeric chars
var numChars = [];
for (var i = 0; i < 10; i++) {
  numChars.push(i); // adds chars 0-9
}

// generate special chars
var specialString = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~' // string containing all special chars, using \ to escape single quote and backslash
var specialChars = [];
for (var i = 0; i < specialString.length; i++) {
  specialChars.push(specialString.charAt(i)); // adds each char of special string to array
}

// console.log(lowerChars);
// console.log(upperChars);
// console.log(numChars);
// console.log(specialChars);

function generatePassword() { // called when button is clicked
  var passLen = prompt("Length of password?"); // get pass length
  var includeSpecial = confirm("Use special characters?"); // y/n special chars
  var includeNum = confirm("Use numeric characters?"); // y/n num chars
  var includeUpper = confirm("Use uppercase characters?"); // y/n upper chars
  var includeLower = confirm("Use lowercase characters?"); // y/n lower chars

  var validChars = []; // array of valid chars
  if (includeSpecial) { 
    for (var i = 0; i < specialChars.length; i++) {
      validChars.push(specialChars[i]); // if special selected, adds special chars
    }
  }
  if (includeNum) {
    for (var i = 0; i < numChars.length; i++) {
      validChars.push(numChars[i]); // if num selected, adds num chars
    }
  }
  if (includeUpper) {
    for (var i = 0; i < upperChars.length; i++) {
      validChars.push(upperChars[i]); // if upper selected, adds upper chars
    }
  }
  if (includeLower) {
    for (var i = 0; i < lowerChars.length; i++) {
      validChars.push(lowerChars[i]); // if lower selected, adds lower chars
    }
  }

  var password = ""
  for (var i = 0; i < passLen; i++) {
    var charIndex = Math.floor(Math.random()*validChars.length);
    password = password + validChars[charIndex];
  }
  // console.log(passLen,includeSpecial,includeNum,includeUpper,includeLower);
  // console.log(validChars);
  console.log(password);
}
