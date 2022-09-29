// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
var specialCharacters = [" ", "!",'"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
var i = 0;


//function to generate password
function generatePassword() {
  var passwordGenerated = ""; //placeholder string for future password

  var lengthChoice = prompt("Enter the password length you'd like. Min 8 - 128 Max");
    //Check to make sure number falls in range
  if( (!isNaN(lengthChoice)) && (lengthChoice >=8) && (lengthChoice <= 128) ){
    var charsAvailable = [];
    // Ask what characters are wanted in the password.
    if(confirm("Do you want to include lowercase letters in the password?")){
      charsAvailable = charsAvailable.concat(lowerLetters);
    }
    if(confirm("Do you want to include uppercase letters in the password?")){
      charsAvailable = charsAvailable.concat(upperLetters);
    }
    if(confirm("Do you want to include numbers in the password?")){
      charsAvailable = charsAvailable.concat(numbers);
    }
    if(confirm("Do you want to include special characters in the password?")){
      charsAvailable = charsAvailable.concat(specialCharacters);
    }

    // Check that at least one set of characters were chosen
    if(charsAvailable.length === 0) {
      alert("You didn't select any characters to include!");
      return "Your Secure Password"; //Makes there that the password text does not change to empty or a random string.
    } else {
      for(var i = 0; i < lengthChoice; i++) {
        passwordGenerated += charsAvailable[Math.floor(Math.random()*charsAvailable.length)];
      }
    }
    //Return password back to write password function to be written into text box
    return passwordGenerated;
  } else {
    alert ("That doesn't fall within the range, try again!");
    return "Your Secure Password"; //Makes there that the password text does not change to empty or a random string.
  }
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

