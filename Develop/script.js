// Assignment code here
function generatePassword() {
  var passwordArray = [""];
  passwordLength = prompt("How many characters would you like your new password to have?  Enter a number between 8 and 128", "8 - 128");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number from 8 to 128");
  } else {
    alert("Your password will be " + passwordLength + " characters in length");
  }
  if (confirm("Would you like your password to include lowercase letters?")) {
    passwordArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  }
  if (confirm("Would you like your password to include uppercase letters?")) {
    passwordArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  }
  if (confirm("Would you like your password to include numbers?")) {
    passwordArray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  }
  for (var i=0; i < passwordLength; i++) {
  passwordRandom = passwordArray[Math.floor(Math.random()*passwordArray.length)]
  password = passwordRandom + password
  }
  console.log(password)
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
