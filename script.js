/"this checks for pass1 and pass2 if they're the same"/
function validatePassword() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    if (pass1 != pass2) {
      alert("Passwords do not match!");
      return false;
    }
    return true;
}

/"this will require email field to be something@something.something"/
function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(emailInput.value)) {
    emailInput.setCustomValidity('Enter a valid email you grackle!');
        return false;
} else {
    emailInput.setCustomValidity('');
        return true;
}
}
  
document.getElementById('email').addEventListener('input', validateEmail);

/"this will require phone field to be just numbers"/
function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const phoneValue = phoneInput.value;
    if (!/^\d+$/.test(phoneValue)) {
        phoneInput.setCustomValidity('What phone number has letters!?');
        return false;
    } else {
        phoneInput.setCustomValidity('');
        return true;
}
}