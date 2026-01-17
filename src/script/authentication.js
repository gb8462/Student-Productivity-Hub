const registerBtn = document.getElementById('switchRegister');
const authForm = document.querySelector('.auth-form');

registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    authForm.classList.add("show-register");
})