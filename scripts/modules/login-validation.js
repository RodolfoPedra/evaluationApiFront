import {configs} from './configsApi.js';

export default function initLogin() {

    const btnEntrar = document.querySelector('#btnEntrar');
    const loginMensagem = document.querySelector('.loginMensagem');
    
    function getDataLogin() {
        
        loginMensagem.innerHTML = '';
        const seletorTipoPessoa = document.querySelector('#seletorTipoPessoaLogin');
        const login = document.querySelectorAll('[data-login]');
            
        validationLogin(login[0].value, login[1].value, seletorTipoPessoa.value);
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
            loginMensagem.innerHTML = responseLogin.error;
        }
        loginMensagem.innerHTML = responseLogin.ok;

        const dataUser = JSON.stringify(responseLogin);
        sessionStorage.setItem('dataUser', dataUser);
    }
    
}

