const passwordInput = document.getElementById("user_password");
const confirmPasswordInput = document.getElementById("confirm_password");
const errorPasswordConfirmText = document.getElementById("error-text");

function validatePassword() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordInput.classList.add("wrong");
    confirmPasswordInput.classList.add("wrong");
    errorPasswordConfirmText.style.opacity = 1;
  } else {
    passwordInput.classList.remove("wrong");
    confirmPasswordInput.classList.remove("wrong");
    errorPasswordConfirmText.style.opacity = 0;
    console.log();
  }
}

confirmPasswordInput.addEventListener("keydown", validatePassword);
