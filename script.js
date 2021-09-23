//https://jshint.com/

//definining global variables
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbols = '!@#$^&%*()+=-[]{}|:<>?,.';
var numbers = '1234567890';
//setting password variable to empty so I can fill it based on user input
var password;
//setting booleans to false so I can make them true via user input
var lowersSelection;
var uppersSelection;
var symbolsSelection;
var numbersSelection;
var promptLength;
//So i can call button to prompt 
var generateBtn = document.getElementById("generate");

//create function that generates random password
generateBtn.addEventListener("click", function() { // anonymous function (no declared name)
  prompts();
  passGenerate();

})
function prompts() {
  promptLength = prompt("How many characters would you like your password to be");
  if (!promptLength || promptLength < 8 || promptLength > 128) {
    prompts() // recursive funtion (a callback inside itself)
  }
  lowersSelection = confirm("Would you like lowercase characters in your password");
  uppersSelection = confirm ("Would you like uppercase characters in your password");
  symbolsSelection = confirm ("Would you like special characters in your password");
  numbersSelection = confirm ("Would you like numbers in your password");
  
  console.log(promptLength, lowersSelection, uppersSelection, symbolsSelection, numbersSelection);


}
//create for loop that spits out password into text area. Something like for (var i = 0; i< 1; i++). Use Math.floor/Math.random? Return?
function passGenerate() {
  var charSelection = "";
  if (lowersSelection) {
      charSelection += lowercase;
  }
  if (uppersSelection) {
      charSelection += uppercase;
  }
  if (symbolsSelection){
      charSelection += symbols;
  }
  if (numbersSelection){
      charSelection += numbers;
  }
  console.log(charSelection);
  
  givePassword(charSelection)
}

function givePassword(selectedChars) {
  var temporaryPassword;
  // .split() array
  // .charAt() string
  selectedChars;
  
  
  password = temporaryPassword;
}






//code given in assignment, im assuming this function writes the password in the text area from the function above?
function writePassword() {
  // var password = passGenerate();
 var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return password;
 }




















