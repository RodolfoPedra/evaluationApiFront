import {configs} from './configsApi.js';

export default function initSignUp() {

    const btnCadastrar = document.querySelector('#btnCadastrar');
    const signupError = document.querySelector('.signupError');
    
    function getDataSignup() {
        
        signupError.innerHTML = '';
        const seletorTipoPessoa = document.querySelector('#seletorTipoPessoaCadastro');
        const signup = document.querySelectorAll('[data-cadastro]');

        if(seletorTipoPessoa.value == "cliente") {
            checkSignupUser(signup[0].value, signup[1].value, signup[2].value, );
        }else if(seletorTipoPessoa.value == "profissional") {
            checkSignupProfessional(signup[0].value, signup[1].value, signup[2].value, signup[3].value);
        }else {
            signupError.innerHTML = 'Selecione um Tipo de Perfil';
        }

        signup[0].value = ''; 
        signup[1].value = ''; 
        signup[2].value = '';
        signup[3].value = '';

    }

    btnCadastrar.addEventListener('click', getDataSignup);

    async function checkSignupUser(name, email, password, typePerson) {
        
        const json = JSON.stringify({
            name: name,
            email: email,
            password: password,
            typePerson: typePerson
        })
        const response = await fetch(`${configs.baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: json
        })
        const responseLogin = await response.json();

        if(response.status == 400){
            signupError.innerHTML = responseLogin.error;
        }

    }

    async function checkSignupProfessional(name, email, password, workplace) {
        
        const json = JSON.stringify({
            name: name,
            email: email,
            password: password,
            workplace: workplace
        })
        const response = await fetch(`${configs.baseUrl}/professional`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: json
        })
        const responseLogin = await response.json();

        if(response.status == 400){
            signupError.innerHTML = responseLogin.error;
        }

        // const dataUser = JSON.stringify(responseLogin);
        // sessionStorage.setItem('dataUser', dataUser);
    }
    
}

