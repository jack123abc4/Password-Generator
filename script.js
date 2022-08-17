// Assignment Code
var generateBtn = document.querySelector("#generate");

// function generatePassword() {
//   return "12345";
// }

// Write password to the #password input
function writePassword() {
  console.log("Click!");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function intToChar(int) {
  const code = 'A'.charCodeAt(0);
  return String.fromCharCode(code + int);
}


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

console.log(lowerChars);
console.log(upperChars);
console.log(numChars);
console.log(specialChars);
