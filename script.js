let button = document.getElementById("submit-password")

let UpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let LowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let Numeric = ["0","1","2","3","4","5","6","7","8","9"]
let SpecialCharacters = ["#","!","@","<>","£","%","*","/","%"]

let password = []

function generatePassword() {
    let length = prompt('Between 6 and 100 characters, how long would you like your password to be?')
    while (length < 6 || length > 100) {
        alert('Your password needs to be longer than 6 characters please try again') 
    let length = prompt('Between 6 and 100 characters, how long would you like your password to be?')

    }

    let specialCharacter = confirm('Do you want your password to have special characters?')
    if (SpecialCharacters) {
        password = password.concat(SpecialCharacters)
    }

    let upperCaseCharacters = confirm('Do you want your password to have Upper Case Characters?')
    if (UpperCase) {
        password = password.concat(UpperCase)
    }

    let LowerCaseCharacter = confirm("Do you want your password to have lower case characters?");
    if (LowerCase) {
        password = password.concat(LowerCase)
    }

    let numericCharacters = confirm('Do you want your password to have Numeric Case Characters?')
    if (Numeric) {
        password = password.concat(Numeric)
    }

    if (!specialCharacter, !upperCaseCharacters, !LowerCaseCharacter, !numericCharacters) {
        alert('One must be chosen, try again')
    } 



 let randomPassword = ""
 // Create a for loop to choose the password Characters
 for (let i = 0; i < length; i++) {
   randomPassword = randomPassword + password[Math.floor(Math.random() * password.length)];

 }
 return randomPassword;
 
 }


// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  
  }
  

button.addEventListener('click',writePassword)


// problems if no 