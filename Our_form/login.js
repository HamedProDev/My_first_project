const loginBtn = document.getElementById('log');
const signBtn = document.getElementById('sign');

const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signUp');

signUpForm.style.display = "none";

loginBtn.addEventListener("click", () => {
    signInForm.style.display = "flex";
    signUpForm.style.display = "none";
});

signBtn.addEventListener("click", () => {
    signUpForm.style.display = "flex";
    signInForm.style.display = "none";
});