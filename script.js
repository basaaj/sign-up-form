const password_1 = document.querySelector('#password');
const password_2 = document.querySelector('#password-confirm');
const error_msg = document.querySelector('#password-error');

password_2.addEventListener('keyup', ()=> {
    if(password_2.value !== password_1.value) {
        password_1.classList.add('error');
        password_2.classList.add('error');
        error_msg.classList.remove('hidden');
    }

    else {
        password_1.classList.remove('error');
        password_2.classList.remove('error');
        error_msg.classList.add('hidden');
    }
});