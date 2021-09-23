//https://jshint.com/

var generateBtn = document.getElementById("generate");
//I feel like this doesnt have to be a function*******
//make button prompt the screen where you can select number of characters
generateBtn.addEventListener("click", function prompted(){
    var characters = prompt("How many characters would you like your password to be");
    
  while (characters < 8 || characters > 128){
   characters = prompt("Length must be 8-128 characters");
  }

  //when a number of characters is selected, go to next screen prompting lowercase etc..
  var uppercase = confirm("Do you want uppercase letters in your password?");
  var lowercase = confirm("Do you want lowercase letters in your password?");
  var numbers = confirm("Do you want numbers in your password");
  var symbols = confirm("Do you want to use special characters?");
  
  //while loop that executes if the below condition is true, which is where none of these are selected
  while (!uppercase || !lowercase || !numbers || !symbols){
      alert("Please select atleast one character type");
       uppercase = confirm("Do you want uppercase letters in your password?");
       lowercase = confirm("Do you want lowercase letters in your password?");
       numbers = confirm("Do you want numbers in your password");
       symbols = confirm("Do you want to use special characters?");
  
      //return characters, uppercase, lowercase, numbers, symbols;
  }
}
);

//function that generates random password using my random number functions
function passGenerate(){
  var password = "";
 
  //these if statement are adding value to the variable pass
  if (uppercase) password += rando(allowed.uppercase = "QWERTYYUIOPASDFGHJKLZXCVBNM");
  if (lowercase) password += rando(allowed.lowercase = "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) password += rando(allowed.numbers = "1234567890");
  if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

  // for loop that sets the variable to whatever was selected in characters variable
  for (var i = password.characters; i < characters; i++) password += rando(rando(allowed).value);

  //concatenating all of the elements in this object and putting them together based on my if statements
  document.getElementById("password").value = randoSequence(password).join("");
}

//code given in assignment, im assuming this function writes the password in the text area from the function above?
function writePassword() {
  var password = passGenerate();
 var passwordText = document.querySelector("#password");
 passwordText.randoSequence = password;
}

for (i=0; i<1000; i++)
{
  writePassword();

}



















//functions that generate random letters/numbers/symbols

//function lower() {
 // return rando("qwertyuiopasdfghjklzxcvbnm")
//}
//function upper() {
//  return rando("QWERTYUIOPASDFGHJKLZXCVBNM");
//}
//function number() {
 // return rando(9);
//}
//function symbol() {
//  return rando('!@#$%^&*(){}[]=<>/,.');
//}




