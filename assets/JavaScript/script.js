// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let userResponse = prompt('Please define number of characters in your password - it must be between 8 and 128');
  userResponse = parseInt(userResponse);
  console.log(userResponse)
  if(!userResponse) {
    console.log('It was not a number')
    alert('It was not a number')
  }
    else if(userResponse >= 8 && userResponse <= 128) {
      console.log('Success! Thank you!')
      alert('Success! Thank you!')
  }
  else {
    console.log('Number not withing range, please choose number between 8 and 128')
    alert('Number not withing range, please choose number between 8 and 128')
  }

  const getSpecialCharacters = confirm ('Click OK if you want to use special charakters')
  const getNumericCharacters = confirm ('Click OK if you want to use numbers')
  const getLowercaseCharacters = confirm ('Click OK if you want to use lowercase characters')
  const getUppercaseCharacters = confirm ('Click OK if you want to use uppercase characters')
  console.log(getLowercaseCharacters);
  console.log(getNumericCharacters);
  console.log(getUppercaseCharacters);
  console.log(getSpecialCharacters);

  if (getSpecialCharacters === false && getNumericCharacters === false &&
     getLowercaseCharacters === false && getUppercaseCharacters=== false) {
      alert('Must choose at least one kind of type of characters');
  } else {
    alert('Success! Thank you!')
  }
}
getPasswordOptions()

// Function for getting a random element from an array
function getRandom(arr) {
    return arr [Math.floor(Math.random() * arr.lengh)]
}

let randomSpecialCharacters = getRandom(specialCharacters);
let randomNumericCharacters = getRandom(numericCharacters);
let randomLowercaseCharacters = getRandom(lowerCasedCharacters);
let randomUppercaseCharacters = getRandom(upperCasedCharacters);
console.log(randomSpecialCharacters);
console.log(randomNumericCharacters);
console.log(randomLowercaseCharacters);
console.log(randomUppercaseCharacters);

                                              
// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);