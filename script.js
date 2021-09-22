var generateBtn = document.getElementById("generate");
//make button prompt the screen where you can select number of characters
generateBtn.addEventListener("click", function prompted(){
    var characters = prompt("How many characters would you like your password to be");
    
  while (characters < 8 || characters > 128){
   characters = prompt("Length must be 8-128 characters");
  }
//when a number of characters is selected, go to next screen prompting lowercase etc..
  const uppercase = confirm("Do you want uppercase letters in your password?");
  const lowercase = confirm("Do you want lowercase letters in your password?");
  const numbers = confirm("Do you want numbers in your password");
  const symbols = confirm("Do you want to use special characters?");
  //while loop that executes if the below condition is true, which is where none of these are selected
  while (!uppercase && !lowercase && !numbers && !symbols){
      alert("Please select atleast one character type");
      const uppercase = confirm("Do you want uppercase letters in your password?");
      const lowercase = confirm("Do you want lowercase letters in your password?");
      const numbers = confirm("Do you want numbers in your password");
      const symbols = confirm("Do you want to use special characters?");
    
  }
}
)


//function that generates random password using my random number functions?
function generate(){
  var pass = ""
  //these if statement are adding value to the variable pass
  if (uppercase) pass += rando(allowed.uppercase = "QWERTYYUIOPASDFGHJKLZXCVBNM");
  if (lowers) pass += rando(allowed.lowercase = "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) pass += rando(allowed.numbers = "1234567890");
  if (symbols) pass += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.")
// for loop that sets the variable to whatever was selected in characters variable
  for (var i = pass.characters; i < characters; i++) pass += rando(rando(allowed).value);
//concatenating all of the elements in this object and putting them together based on my if statements
  document.getElementById("pass").value = randoSequence(pass).join("");
}
 
//make "generate" button spit out this input into text area
//document.getElementById("generate").addEventListener("click");
  //return pass;


//code given in assignment
//function writePassword() {
 // var password = generate();
 //var passwordText = document.querySelector("#password");
// passwordText.value = password;
//}
//var generateBtn = document.querySelector("#generate");




//make generateBtn spit out that password in the textarea provided





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




