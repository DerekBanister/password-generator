

//make button prompt the screen where you can select number of characters
function prompted(){
  var characters = prompt("How many characters would you like your password to be");
while (characters < 8 || characters > 128){
 characters = prompt("Length must be 8-128 characters");
}
  //when a number of characters is selected, go to next screen prompting lowercase etc..
var uppercase = confirm("Do you want uppercase letters?");
var lowercase = confirm("Do you want lowercase letters?");
var numbers = confirm("Do you want numbers");
var symbols = confirm("Do you want special characters?");
}
































//functions that generate random letters/numbers/symbols
function lower() {
  return random("qwertyuiopasdfghjklzxcvbnm")
}
function upper() {
  return random("QWERTYUIOPASDFGHJKLZXCVBNM");
}
function number() {
  return random(9);
}
function symbol() {
  return random('!@#$%^&*(){}[]=<>/,.');
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);