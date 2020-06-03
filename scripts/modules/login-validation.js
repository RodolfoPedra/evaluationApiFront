import {configs} from './configsApi.js';

export default function initLogin() {

    const btnEntrar = document.querySelector('#btnEntrar');
    const loginError = document.querySelector('.loginError');
    
    function getDataLogin() {
        
        loginError.innerHTML = '';
        const selectorTipoPessoa = document.querySelector('#seletorTipoPessoaLogin');
        const login = document.querySelectorAll('[data-login]');

        // console.log('selector pessoa login: ', selectorTipoPessoa.value);
        

        console.log(login[0].value);
        console.log(login[1].value);
        console.log(selectorTipoPessoa.value);
        
        
        validationLogin(login[0].value, login[1].value, selectorTipoPessoa.value);
    }

    btnEntrar.addEventListener('click', getDataLogin);

    async function validationLogin(email, password, typePerson) {
        
        const json = JSON.stringify({
            email: email,
            password: password,
            typePerson: typePerson
        })
        const response = await fetch(`${configs.baseUrl}/session`, {
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
        loginError.innerHTML = responseLogin.token;

        const dataUser = JSON.stringify(responseLogin);
        sessionStorage.setItem('dataUser', dataUser);
    }
    
}

