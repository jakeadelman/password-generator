// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt(
    "choose a length for your password (between 9 and 128 characters)"
  );
  var lowercase = confirm(
    "would you like lowercase characters in your password?"
  );
  var uppercase = confirm(
    "would you like uppercase characters in your password?"
  );
  var numeric = confirm("would you like numeric characters in your password?");
  var special = confirm("would you like special characters in your password?");

  if (!lowercase && !uppercase && !numeric && !special) {
    alert("You must have at lease one character type in your password.");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
