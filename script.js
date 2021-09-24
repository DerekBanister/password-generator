//https://jshint.com/

//definining global variables
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbols = '!@#$^&%*()+=-[]{}|:<>?,.';
var numbers = '1234567890';
//setting password variable to empty so I can fill it based on user input
var password = "";

var lowersSelection = false;
var uppersSelection = false;
var symbolsSelection = false;
var numbersSelection = false;
var promptLength;
var charSelection;
//So i can call button to prompt 
var generateBtn = document.getElementById("generate");
//create function that generates random password
generateBtn.addEventListener("click", function() { // anonymous function (no declared name)
  prompts();
  passGenerate();
  passwordCreate();
  writePassword();
})
function prompts() {
  promptLength = prompt("How many characters would you like your password to be");
  while (!promptLength || promptLength < 8 || promptLength > 128) {
 
}
  
  if (promptLength) {
    if (confirm("Would you like lowercase characters in your password") == true){
      lowersSelection = true;
    }
      if (confirm("Would you like uppercase characters in your password") == true){
      uppersSelection = true;
      }
      if (confirm("Would you like special characters in your password") == true){
      symbolsSelection = true;
      }
      if (confirm("Would you like numbers in your password") == true){
      numbersSelection = true;
      }
      if (lowersSelection === false && uppersSelection === false && symbolsSelection === false && numbersSelection === false){
        alert("You must select atleast one character type")
      }
    }
 
  
  console.log(promptLength, lowersSelection, uppersSelection, symbolsSelection, numbersSelection);

}
//taking user input from function prompts and adding them to the empty string of charselection
function passGenerate() {
  charSelection = "";
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
}
  //takes both my global variables (charSelection and promptLength) and used math.floor and math random to generate password based on user inputs
function passwordCreate(){
  password = "";
  for (var i = 0; i < promptLength; i++) {
      password += charSelection.charAt(Math.floor(Math.random() * charSelection.length));
  };
  console.log(password);

return password;

}
// code given in assignment
function writePassword() {
var password = passwordCreate();
 var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return password;
  
 }




















