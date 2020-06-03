export default function initLogin() {

    const btnEntrar = document.querySelector('#btnEntrar');
    const loginError = document.querySelector('.loginError');
    
    function getDataLogin() {
        
        loginError.innerHTML = '';
        const login = document.querySelectorAll('[data-login]');

        console.log(login[0].value);
        console.log(login[1].value);

        validationLogin(login[0].value, login[1].value)

    }

    btnEntrar.addEventListener('click', getDataLogin);

    async function validationLogin(email, password) {
        
        const json = JSON.stringify({
            email: email,
            password: password
        })
        const response = await fetch('http://localhost:3333/session', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: json
        })
        const responseLogin = await response.json();

        if(response.status == 401){
            loginError.innerHTML = responseLogin.error;
        }

        const dataUser = JSON.stringify(responseLogin);
        sessionStorage.setItem('dataUser', dataUser);
    }
    
}

