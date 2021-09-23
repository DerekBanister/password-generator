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
  while (!uppercase || !lowercase || !numbers || !symbols){
      alert("Please select atleast one character type");
       uppercase = confirm("Do you want uppercase letters in your password?");
       lowercase = confirm("Do you want lowercase letters in your password?");
       numbers = confirm("Do you want numbers in your password");
       symbols = confirm("Do you want to use special characters?");
    
  }
}
)

//function that generates random password using my random number functions
function passgenerate(){
  var password = ""
 
  //these if statement are adding value to the variable pass
  if (uppercase) password += rando(allowed.uppercase = "QWERTYYUIOPASDFGHJKLZXCVBNM");
  if (lowers) password += rando(allowed.lowercase = "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) password += rando(allowed.numbers = "1234567890");
  if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.")

  // for loop that sets the variable to whatever was selected in characters variable
  for (var i = password.characters; i < characters; i++) password += rando(rando(allowed).value);

  //concatenating all of the elements in this object and putting them together based on my if statements
  document.getElementById("password").value = randoSequence(password).join("");
}

//code given in assignment, im assuming this function writes the password from the function above?
function writePassword() {
  var password = passgenerate();
 var passwordText = document.querySelector("#password");
 passwordText.value = password;
}

//make generateBtn spit out that password in the textarea provided
for (var i = 0; i < 100; i++){
  generateBtn.addEventListener("click");
  passgenerate();
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




