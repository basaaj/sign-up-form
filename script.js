const password_1 = document.querySelector('#password');
const password_2 = document.querySelector('#password-confirm');

password_2.addEventListener('keyup', ()=> {
    if(password_2.value !== password_1.value) {
        password_2.classList.add('error');
    }

    else {
        password_2.classList.remove('error');
    }
});