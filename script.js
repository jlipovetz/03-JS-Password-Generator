var generateBtn = document.querySelector("#generate");

function writePassword() {
  let length = prompt("How long would you like your password to be (must be between 8-128 cahracters)")
  if (length > 128 || length < 8) {
    alert("Please enter between 8 and 128")
    return;
  }
  let lowercase = prompt('Would you like lowercase letters? (yes or no)')
  if (lowercase != "yes" && lowercase != "no") {
    alert("Please enter yes or no")
    return;
  }
  let uppercase = prompt('Would you like uppercase letters? (yes or no)')
  if (uppercase != "yes" && uppercase != "no") {
    alert("Please enter yes or no")
    return;
  }
  let numeric = prompt('Would you like numbers? (yes or no)')
  if (numeric != "yes" && numeric != "no") {
    alert("Please enter yes or no")
    return;
  }
  let specialCharacter = prompt('Would you like special characters? (yes or no)')
  if (specialCharacter != "yes" && specialCharacter != "no") {
    alert("Please enter yes or no")
    return;
  }

  function generatePassword() {
    let newPassword = ""
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let number = '123456789'
    let special = '!@#$%&*'
    let str = ""

    if (lowercase === "yes")
      str += lower

    if (uppercase === "yes")
      str += upper

    if (numeric === "yes")
      str += number

    if (specialCharacter === "yes")
      str += special



    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()
        * str.length + 1);

      newPassword += str.charAt(char)
    }
    return newPassword
  }

  var password = generatePassword()
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
  alert(password)
  console.log(password.length)
}


generateBtn.addEventListener("click", writePassword);