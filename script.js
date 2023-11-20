// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

// Function to prompt user for password options
function getPasswordOptions() {
  //Prompt for the length of password
  var passwordLength = parseInt(
    prompt("Enter the length of the password (between 8 and 128 characters):")
  );

  //validation for the length of password
  //isNaN returns true if passwordLength is Not-a-Number
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert(
      "The length of password must be a number between 8 and 128 characters."
    );
    return;
  }

  //Prompt for the character types
  var lowerCase = confirm("Include lowercase characters in password?");
  var upperCase = confirm("Include uppercase characters in password?");
  var numeric = confirm("include nemeric characters in password?");
  var special = confirm("Include special characters in password?");

  //Validate that at least one character type is selected
  if (!lowerCase && !upperCase && !numeric && !special) {
    alert("At least one character type must be selected.");
    return;
  }

  //Declare an object to store the user choices
  var userPasswordOptions = {
    passwordLength: passwordLength,
    lowerCase: lowerCase,
    upperCase: upperCase,
    numeric: numeric,
    special: special,
  };

  return userPasswordOptions;
}

//Testing if the above function works
//getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

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
