// Assignment code here
// character codes for lowercase letters
var UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// character codes for uppercase letters
var LOWERCSE = 'abcdefghijklmnopqrstuvwxyz';
// character codes for numbers
var NUMBERS = '0123456789';
// character codes for symbols
var SYMBOLS = '*;<>()[]{}#$?!^|';

// Make sure the characterAmount is a number
function passLen() {
  characterAmount = window.prompt('How many characters would you like? (8-128)');

  if (characterAmount >= 8 && characterAmount <= 128) {
  } else {
    window.alert('Not a valid input!', '8-128');
    passLen();
  }
}

function generatePassword() {
  var pass = ""

  passLen();
  includeUppercase = window.confirm('Do you want to include uppercase letters?');
  includeNumbers = window.confirm('Do you want to include numbers?')
  includeSymbols = window.confirm('Do you want to include symbols?')

  // Default pass is all lowercase
  var characters = LOWERCSE
  // If user wants uppcase add uppercase
  if (includeUppercase) characters = characters.concat(UPPERCASE)
  // if user wants numbers add numbers
  if (includeNumbers) characters = characters.concat(NUMBERS)
  // if user wants symbols add symbols
  if (includeSymbols) characters = characters.concat(SYMBOLS)

  for (i = 1; i < characterAmount; i++) {
    var char = Math.floor(Math.random() * characters.length + 1);

    pass += characters.charAt(char)
  }
  return pass
}



// function lowToHigh (low, high) {
//   var array = []
//   for (let i = low; i <= high; i++) {
//     array.push(i)
//   }
//   return array
// }
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var save = localStorage.setItem("Password", password);

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
