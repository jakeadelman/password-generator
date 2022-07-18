// Assignment Code
var generateBtn = document.querySelector("#generate");

function createPassword(lowercase, uppercase, numeric, special, length) {
  var lowercaseLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var uppercaseLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var numericSymbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialCharacters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
  ];

  // LOWERCASE, UPPERCASE, NUMERIC, SPECIAL
  if (lowercase && uppercase && numeric && special) {
    var numberOfEach = Math.floor(length / 4);
    var remainder = length % 4;

    console.log(numberOfEach, remainder);

    var finishArr = [];

    for (let i = 0; i < numberOfEach; i++) {
      var random = Math.floor(Math.random() * lowercaseLetters.length);
      var result = lowercaseLetters[random];
      var random2 = Math.floor(Math.random() * uppercaseLetters.length);
      var result2 = uppercaseLetters[random2];
      var random3 = Math.floor(Math.random() * numericSymbols.length);
      var result3 = numericSymbols[random3];
      var random4 = Math.floor(Math.random() * specialCharacters.length);
      var result4 = specialCharacters[random4];
      finishArr.push(result);
      finishArr.push(result2);
      finishArr.push(result3);
      finishArr.push(result4);
    }

    for (let c = 0; c < remainder; c++) {
      if (c == 0) {
        var random = Math.floor(Math.random() * lowercaseLetters.length);
        var result = lowercaseLetters[random];
        finishArr.push(result);
      } else if (c == 1) {
        var random2 = Math.floor(Math.random() * uppercaseLetters.length);
        var result2 = uppercaseLetters[random2];
        finishArr.push(result2);
      } else if (c == 2) {
        var random3 = Math.floor(Math.random() * numericSymbols.length);
        var result3 = numericSymbols[random3];
        finishArr.push(result3);
      }
    }

    var finishText = "";
    for (let b = 0; b < finishArr.length; b++) {
      finishText += finishArr[b];
    }

    return finishText;
  }

  // NO LOWERCASE
  if (!lowercase && uppercase && numeric && special) {
    var numberOfEach = Math.floor(length / 3);
    var remainder = length % 3;

    console.log(numberOfEach, remainder);

    var finishArr = [];

    for (let i = 0; i < numberOfEach; i++) {
      var random2 = Math.floor(Math.random() * uppercaseLetters.length);
      var result2 = uppercaseLetters[random2];
      var random3 = Math.floor(Math.random() * numericSymbols.length);
      var result3 = numericSymbols[random3];
      var random4 = Math.floor(Math.random() * specialCharacters.length);
      var result4 = specialCharacters[random4];

      finishArr.push(result2);
      finishArr.push(result3);
      finishArr.push(result4);
    }

    for (let c = 0; c < remainder; c++) {
      if (c == 0) {
        var random2 = Math.floor(Math.random() * uppercaseLetters.length);
        var result2 = uppercaseLetters[random2];
        finishArr.push(result2);
      } else if (c == 1) {
        var random3 = Math.floor(Math.random() * numericSymbols.length);
        var result3 = numericSymbols[random3];
        finishArr.push(result3);
      }
    }

    var finishText = "";
    for (let b = 0; b < finishArr.length; b++) {
      finishText += finishArr[b];
    }

    return finishText;
  }

  // NO UPPERCASE
  if (lowercase && !uppercase && numeric && special) {
    var numberOfEach = Math.floor(length / 3);
    var remainder = length % 3;

    console.log(numberOfEach, remainder);

    var finishArr = [];

    for (let i = 0; i < numberOfEach; i++) {
      var random2 = Math.floor(Math.random() * lowercaseLetters.length);
      var result2 = lowercaseLetters[random2];
      var random3 = Math.floor(Math.random() * numericSymbols.length);
      var result3 = numericSymbols[random3];
      var random4 = Math.floor(Math.random() * specialCharacters.length);
      var result4 = specialCharacters[random4];

      finishArr.push(result2);
      finishArr.push(result3);
      finishArr.push(result4);
    }

    for (let c = 0; c < remainder; c++) {
      if (c == 0) {
        var random2 = Math.floor(Math.random() * uppercaseLetters.length);
        var result2 = lowercaseLetters[random2];
        finishArr.push(result2);
      } else if (c == 1) {
        var random3 = Math.floor(Math.random() * numericSymbols.length);
        var result3 = numericSymbols[random3];
        finishArr.push(result3);
      }
    }

    var finishText = "";
    for (let b = 0; b < finishArr.length; b++) {
      finishText += finishArr[b];
    }

    return finishText;
  }

  // NO NUMERIC
  if (lowercase && uppercase && !numeric && special) {
    var numberOfEach = Math.floor(length / 3);
    var remainder = length % 3;

    var finishArr = [];

    for (let i = 0; i < numberOfEach; i++) {
      var random2 = Math.floor(Math.random() * lowercaseLetters.length);
      var result2 = lowercaseLetters[random2];
      var random3 = Math.floor(Math.random() * uppercaseLetters.length);
      var result3 = uppercaseLetters[random3];
      var random4 = Math.floor(Math.random() * specialCharacters.length);
      var result4 = specialCharacters[random4];

      finishArr.push(result2);
      finishArr.push(result3);
      finishArr.push(result4);
    }

    for (let c = 0; c < remainder; c++) {
      if (c == 0) {
        var random2 = Math.floor(Math.random() * uppercaseLetters.length);
        var result2 = lowercaseLetters[random2];
        finishArr.push(result2);
      } else if (c == 1) {
        var random3 = Math.floor(Math.random() * uppercaseLetters.length);
        var result3 = uppercaseLetters[random3];
        finishArr.push(result3);
      }
    }

    var finishText = "";
    for (let b = 0; b < finishArr.length; b++) {
      finishText += finishArr[b];
    }

    return finishText;
  }

  // NO SPECIAL CHARACTERS
  if (lowercase && uppercase && numeric && !special) {
    var numberOfEach = Math.floor(length / 3);
    var remainder = length % 3;

    var finishArr = [];

    for (let i = 0; i < numberOfEach; i++) {
      var random2 = Math.floor(Math.random() * lowercaseLetters.length);
      var result2 = lowercaseLetters[random2];
      var random3 = Math.floor(Math.random() * uppercaseLetters.length);
      var result3 = uppercaseLetters[random3];
      var random4 = Math.floor(Math.random() * numericSymbols.length);
      var result4 = numericSymbols[random4];

      finishArr.push(result2);
      finishArr.push(result3);
      finishArr.push(result4);
    }

    for (let c = 0; c < remainder; c++) {
      if (c == 0) {
        var random2 = Math.floor(Math.random() * uppercaseLetters.length);
        var result2 = lowercaseLetters[random2];
        finishArr.push(result2);
      } else if (c == 1) {
        var random3 = Math.floor(Math.random() * uppercaseLetters.length);
        var result3 = uppercaseLetters[random3];
        finishArr.push(result3);
      }
    }

    var finishText = "";
    for (let b = 0; b < finishArr.length; b++) {
      finishText += finishArr[b];
    }

    return finishText;
  }

  // NO UPPERCASE NO LOWERCASE
  if (!lowercase && !uppercase && numeric && special) {
    var numberOfEach = Math.floor(length / 2);
    var remainder = length % 2;

    var finishArr = [];

    for (let i = 0; i < numberOfEach; i++) {
      var random3 = Math.floor(Math.random() * specialCharacters.length);
      var result3 = specialCharacters[random3];
      var random4 = Math.floor(Math.random() * numericSymbols.length);
      var result4 = numericSymbols[random4];

      finishArr.push(result3);
      finishArr.push(result4);
    }

    for (let c = 0; c < remainder; c++) {
      if (c == 0) {
        var random2 = Math.floor(Math.random() * specialCharacters.length);
        var result2 = specialCharacters[random2];
        finishArr.push(result2);
      }
    }

    var finishText = "";
    for (let b = 0; b < finishArr.length; b++) {
      finishText += finishArr[b];
    }

    return finishText;
  }

  // NO UPPERCASE NO NUMERIC
  if (!lowercase && uppercase && !numeric && special) {
    var numberOfEach = Math.floor(length / 2);
    var remainder = length % 2;

    var finishArr = [];

    for (let i = 0; i < numberOfEach; i++) {
      var random3 = Math.floor(Math.random() * specialCharacters.length);
      var result3 = specialCharacters[random3];
      var random4 = Math.floor(Math.random() * uppercaseLetters.length);
      var result4 = uppercaseLetters[random4];

      finishArr.push(result3);
      finishArr.push(result4);
    }

    for (let c = 0; c < remainder; c++) {
      if (c == 0) {
        var random2 = Math.floor(Math.random() * specialCharacters.length);
        var result2 = specialCharacters[random2];
        finishArr.push(result2);
      }
    }

    var finishText = "";
    for (let b = 0; b < finishArr.length; b++) {
      finishText += finishArr[b];
    }

    return finishText;
  }

  // NO UPPERCASE NO SPECIAL CHARACTERS
  if (!lowercase && uppercase && numeric && !special) {
    var numberOfEach = Math.floor(length / 2);
    var remainder = length % 2;

    var finishArr = [];

    for (let i = 0; i < numberOfEach; i++) {
      var random3 = Math.floor(Math.random() * numericSymbols.length);
      var result3 = numericSymbols[random3];
      var random4 = Math.floor(Math.random() * uppercaseLetters.length);
      var result4 = uppercaseLetters[random4];

      finishArr.push(result3);
      finishArr.push(result4);
    }

    for (let c = 0; c < remainder; c++) {
      if (c == 0) {
        var random2 = Math.floor(Math.random() * numericSymbols.length);
        var result2 = numericSymbols[random2];
        finishArr.push(result2);
      }
    }

    var finishText = "";
    for (let b = 0; b < finishArr.length; b++) {
      finishText += finishArr[b];
    }

    return finishText;
  }

  // NO UPPERCASE NO NUMERIC
  if (lowercase && !uppercase && !numeric && special) {
    var numberOfEach = Math.floor(length / 2);
    var remainder = length % 2;

    var finishArr = [];

    for (let i = 0; i < numberOfEach; i++) {
      var random3 = Math.floor(Math.random() * lowercaseLetters.length);
      var result3 = lowercaseLetters[random3];
      var random4 = Math.floor(Math.random() * specialCharacters.length);
      var result4 = specialCharacters[random4];

      finishArr.push(result3);
      finishArr.push(result4);
    }

    for (let c = 0; c < remainder; c++) {
      if (c == 0) {
        var random2 = Math.floor(Math.random() * specialCharacters.length);
        var result2 = specialCharacters[random2];
        finishArr.push(result2);
      }
    }

    var finishText = "";
    for (let b = 0; b < finishArr.length; b++) {
      finishText += finishArr[b];
    }

    return finishText;
  }

  // NO UPPERCASE NO SPECIAL CHARACTERS
  if (lowercase && !uppercase && numeric && !special) {
    var numberOfEach = Math.floor(length / 2);
    var remainder = length % 2;

    var finishArr = [];

    for (let i = 0; i < numberOfEach; i++) {
      var random3 = Math.floor(Math.random() * lowercaseLetters.length);
      var result3 = lowercaseLetters[random3];
      var random4 = Math.floor(Math.random() * numericSymbols.length);
      var result4 = numericSymbols[random4];

      finishArr.push(result3);
      finishArr.push(result4);
    }

    for (let c = 0; c < remainder; c++) {
      if (c == 0) {
        var random2 = Math.floor(Math.random() * lowercaseLetters.length);
        var result2 = lowercaseLetters[random2];
        finishArr.push(result2);
      }
    }

    var finishText = "";
    for (let b = 0; b < finishArr.length; b++) {
      finishText += finishArr[b];
    }

    return finishText;
  }

  // NO NUMERIC NO SPECIAL CHARACTERS
  if (lowercase && uppercase && !numeric && !special) {
    var numberOfEach = Math.floor(length / 2);
    var remainder = length % 2;

    var finishArr = [];

    for (let i = 0; i < numberOfEach; i++) {
      var random3 = Math.floor(Math.random() * lowercaseLetters.length);
      var result3 = lowercaseLetters[random3];
      var random4 = Math.floor(Math.random() * uppercaseLetters.length);
      var result4 = uppercaseLetters[random4];

      finishArr.push(result3);
      finishArr.push(result4);
    }

    for (let c = 0; c < remainder; c++) {
      if (c == 0) {
        var random2 = Math.floor(Math.random() * uppercaseLetters.length);
        var result2 = uppercaseLetters[random2];
        finishArr.push(result2);
      }
    }

    var finishText = "";
    for (let b = 0; b < finishArr.length; b++) {
      finishText += finishArr[b];
    }

    return finishText;
  }

  // ONLY LOWERCASE
  if (lowercase && !uppercase && !numeric && !special) {
    var finishArr = [];

    for (let i = 0; i < length; i++) {
      var random3 = Math.floor(Math.random() * lowercaseLetters.length);
      var result3 = lowercaseLetters[random3];
      finishArr.push(result3);
    }

    var finishText = "";
    for (let b = 0; b < finishArr.length; b++) {
      finishText += finishArr[b];
    }

    return finishText;
  }

  // ONLY UPPERCASE
  if (!lowercase && uppercase && !numeric && !special) {
    var finishArr = [];

    for (let i = 0; i < length; i++) {
      var random3 = Math.floor(Math.random() * uppercaseLetters.length);
      var result3 = uppercaseLetters[random3];
      finishArr.push(result3);
    }

    var finishText = "";
    for (let b = 0; b < finishArr.length; b++) {
      finishText += finishArr[b];
    }

    return finishText;
  }

  // ONLY NUMERIC
  if (!lowercase && !uppercase && numeric && !special) {
    var finishArr = [];

    for (let i = 0; i < length; i++) {
      var random3 = Math.floor(Math.random() * numericSymbols.length);
      var result3 = numericSymbols[random3];
      finishArr.push(result3);
    }

    var finishText = "";
    for (let b = 0; b < finishArr.length; b++) {
      finishText += finishArr[b];
    }

    return finishText;
  }

  // ONLY SPECIAL CHARACTERS
  if (!lowercase && !uppercase && !numeric && special) {
    var finishArr = [];

    for (let i = 0; i < length; i++) {
      var random3 = Math.floor(Math.random() * specialCharacters.length);
      var result3 = specialCharacters[random3];
      finishArr.push(result3);
    }

    var finishText = "";
    for (let b = 0; b < finishArr.length; b++) {
      finishText += finishArr[b];
    }

    return finishText;
  }
}

function generatePassword() {
  var length = prompt(
    "choose a length for your password (between 8 and 128 characters)"
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
  } else {
    return createPassword(lowercase, uppercase, numeric, special, length);
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
