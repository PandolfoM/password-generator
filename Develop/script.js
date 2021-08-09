// Assignment code here
// character codes for lowercase letters
var UPPERCASE_CODES = lowToHigh(65, 90)
// character codes for uppercase letters
var LOWERCSE_CODES = lowToHigh(97, 122)
// character codes for numbers
var NUMBER_CODES = lowToHigh(48, 57)
// character codes for symbols
var SYMBOL_CODES = lowToHigh(33, 47).concat(
  lowToHigh(58, 64)
).concat(
  lowToHigh(91, 96)
).concat(
  lowToHigh(123, 126)
)

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
  passLen();
  includeUppercase = window.confirm('Do you want to include uppercase letters?');
  includeNumbers = window.confirm('Do you want to include numbers?')
  includeSymbols = window.confirm('Do you want to include symbols?')

  // Default pass is all lowercase
  let charCodes = LOWERCSE_CODES
  // If user wants uppcase add uppercase
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES)
  // if user wants numbers add numbers
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES)
  // if user wants symbols add symbols
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES)
  
  var passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function lowToHigh (low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}
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
