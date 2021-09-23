//https://jshint.com/

//definining global variables
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbols = '!@#$^&%*()+=-[]{}|:<>?,.';
var numbers = '1234567890';
//setting password variable to empty so I can fill it based on user input
var password = ""
//setting booleans to false so I can make them true via user input
var lowersSelection = false;
var uppersSelection = false;
var symbolsSelection = false;
var numbersSelection = false;
//So i can call button to prompt 
var generateBtn = document.getElementById("generate");

//create function that generates random password
generateBtn.addEventListener("click", function generatePass(){
  var confirmLength = "";
  //character length input
  while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128){
    confirmLength = prompt ("How many characters would you like your password to be");
    //creating if statement that allows user to exit out of prompt window
    if (confirmLength === null){
      break;
    }
  }

//user input prompts on which character types to use in password
if (confirmLength) {
  if (confirm("Would you like lowercase characters in your password") == true) {
      lowersSelection = true;
  }
if (confirm("Would you like uppercase characters in your password") == true){
  uppersSelection = true;
  }
if (confirm("Would you like special characters in your password?") == true){
  symbolsSelection = true;
  }
if (confirm("would you like to use numerical characters?") == true){
  numbersSelection = true;
  }
if (lowersSelection === false && uppersSelection === false && specialsSelection == false && numbersSelection === false){
  alert("At least one character type must be selected")
  }

    }
  }
)   
//Generate a password based on these inputs. use +=? create variable with "" that I can combine all these inputs in?


//create for loop that spits out password into text area. Something like for (var i = 0; i< 1; i++). Use Math.floor/Math.random? Return?

  

  


/*code given in assignment, im assuming this function writes the password in the text area from the function above?
//function writePassword() {
  //var password = passGenerate();
 //var passwordText = document.querySelector("#password");
 // passwordText.value = password;
 // return password;
 //}



/*var generateBtn = document.getElementById("generate");
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
*/


















