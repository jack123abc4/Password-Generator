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
  const code = 'a'.charCodeAt(0);
  return String.fromCharCode(code + int);
}

console.log(intToChar(0));
console.log(intToChar(15));
console.log(intToChar(30));