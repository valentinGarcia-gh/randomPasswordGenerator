// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // Chose the password length
  var getPasswordLength = prompt("Please enter number of characters you want to use in your password." +
    "\n***Note: password must be at least 8 characters long but no more than 128 characters***");
    
  //Check to see if password meets length requirements 
  if (getPasswordLength >= 8 && getPasswordLength <= 128) {
    //Confirmations for password options
    var retUpper = confirm("Click 'OK' to confirm using uppercase characters.");
    var retLower = confirm("Click 'OK' to confirm using lowercase characters.");
    var retNumeric = confirm("Click 'OK' to confirm using numeric characters.");
    var retSpecial = confirm("Click 'OK' to confirm using special characters.");  
  } else {
    alert("Your password does not meet the length specifics!");
    return;
  }

  // Check to see if at least one password requirement is met
  if (retUpper || retLower || retNumeric || retSpecial) {
  } else {
    alert("Password DOES NOT meet minimum requirements. Must chose at least 1 special condition.");
    return;
  }

  // Loop to get length of password
  var randomPassword = [];
  var counter = 1;

  for (let index = 1; index <= getPasswordLength; index = counter) {
    if (retUpper == true && counter <= getPasswordLength) {
      getRandomUppercase();
      counter++;
    } if (retLower == true && counter <= getPasswordLength) {
      getRandomLowercase();
      counter++;
    } if (retNumeric == true && counter <= getPasswordLength) {
      getRandomNumber();
      counter++;
    } if (retSpecial == true && counter <= getPasswordLength) {
      getRandomSymbol();
      counter++;
    }
  }

  // Random Uppercase
  function getRandomUppercase() {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var holdUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
    randomPassword.push(holdUppercase);
  }

  // Random Lowercase
  function getRandomLowercase() {
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var holdLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
    randomPassword.push(holdLowercase);
  }

  // Random Number
  function getRandomNumber() {
    var number = "0123456789";
    var holdNumber = number[Math.floor(Math.random() * number.length)];
    randomPassword.push(holdNumber);
  }

  // Random Symbol
  function getRandomSymbol() {
    var symbol = "!@#$%^&*?";
    var holdSymbol = symbol[Math.floor(Math.random() * symbol.length)];
    randomPassword.push(holdSymbol);
  }

  // Scrambles password
  randomPassword.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  return randomPassword.join("");
}