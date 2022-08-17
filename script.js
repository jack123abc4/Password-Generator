// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password != null) { // changes text only if return value is not null
    passwordText.value = password;
  }
  

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

function generatePassword() { // called when button is clicked
  var passLen = prompt("Length of password? (8-128 chars)"); // get pass length
  if (passLen === null) { // checks if user has cancelled, resulting in null input
    console.log("Cancelled.");
    return; // returns previous password
  }
  else {
    passLen = passLen.trim(); // trims whitespace from input
  }
  if (isNaN(passLen)) { // checks if input is numeric
    alert("Must enter a numeric value.");
    return generatePassword();
  }
  else if (passLen < 8 || passLen > 128) { // checks if input is 8-128
    alert("Password length must be between 8-128 characters.");
    return generatePassword();
  }


  var includeSpecial = confirm("Use special characters?"); // y/n special chars
  var includeNum = confirm("Use numeric characters?"); // y/n num chars
  var includeUpper = confirm("Use uppercase characters?"); // y/n upper chars

  var includeLower = true;
  if (includeSpecial || includeNum || includeUpper) { // checks if at least one other char type has been selected
    includeLower = confirm("Use lowercase characters?"); // y/n lower chars
  }
  else {
    alert("Lowercase characters selected.");
  }
  

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
    var charIndex = Math.floor(Math.random()*validChars.length); // selects random number between 0 and len of valid char array
    password = password + validChars[charIndex]; // adds random char to password
  }

  // console.log(passLen,includeSpecial,includeNum,includeUpper,includeLower);
  // console.log(validChars);
  console.log(password);
  return password;
}
