// Assignment code here
var password = ""

function generatePassword() {
  password = ""
  var passwordArray = [""]
  if (passwordLength = prompt("How many characters would you like your new password to have?  Enter a number from 8 to 128.", "8 - 128")) {
    if (passwordLength >= 8 && passwordLength <= 128) {
      alert("Your password will be " + passwordLength + " characters in length.")
    } else {
      alert("Please enter a number from 8 to 128.")
    }
    if (confirm("Would you like your password to include lowercase letters?")) {
      passwordArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
      alert("Your password will include lowercase letters.")
    } else {
      alert("Your password will not include lowercase letters.")
    }
    if (confirm("Would you like your password to include uppercase letters?")) {
      passwordArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
      alert("Your password will include uppercase letters.")
    } else {
      alert("Your password will not include uppercase letters.")
    }
    if (confirm("Would you like your password to include numbers?")) {
      passwordArray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
      alert("Your password will include numbers.")
    } else {
      alert("Your password will not include numbers.")
    }
    if (confirm("Would you like your password to include special characters?")) {
      passwordArray.push("!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~", String.fromCharCode(34), String.fromCharCode(92))
      alert("Your password will include special characters.")
    } else {
      alert("Your password will not include special characters.")
    }
    for (var i=0; i < passwordLength; i++) {
    passwordRandom = passwordArray[Math.floor(Math.random()*passwordArray.length)]
    password = passwordRandom + password
    }
  } else {
    alert("Please enter a length for your password.  Click the Generate Password button to try again!")
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword() {
  generatePassword()
  var passwordText = document.querySelector("#password")

  passwordText.value = password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
