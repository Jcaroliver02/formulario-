const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordConfirmationValue = passwordConfirmation.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'O nome de usuário é obrigatório.');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'O e-mail é obrigatório.');
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'Por favor, insira um e-mail válido.');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'A senha é obrigatória.');
    } else if (passwordValue.length < 7) {
        setErrorFor(password, 'A senha precisa ter no mínimo 7 caracteres.');
    } else {
        setSuccessFor(password);
    }

    if (passwordConfirmationValue === '') {
        setErrorFor(passwordConfirmation, 'A confirmação de senha é obrigatória.');
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, 'As senhas não coincidem.');
    } else {
        setSuccessFor(passwordConfirmation);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    
    // Adiciona a mensagem de erro
    small.innerText = message;
    
    // Adiciona a classe de erro
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    
    // Adiciona a classe de sucesso
    formControl.className = 'form-control success';
}

function checkEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}
