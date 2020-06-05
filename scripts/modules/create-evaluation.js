import {configs} from './configsApi.js';

export default function initCreateEvaluation() {

    const dados = sessionStorage.getItem('dataUser');
    const usuario = JSON.parse(dados);

    const idProf = sessionStorage.getItem('idProfissional');
    const idProfissional = Number.parseInt(idProf);

    const btnAvaliar = document.querySelector('#btnAvaliar');



    function setEvaluate() {
        
        const dadosAvaliacao = document.querySelectorAll('[data-avaliacao]');


        createEvaluate(dadosAvaliacao[0].value, dadosAvaliacao[1].value, idProfissional);
    }

    btnAvaliar.addEventListener('click', setEvaluate);



    async function createEvaluate(opinion, note, idProfissional) {
        
        const json = JSON.stringify({
            opinion: opinion,
            note: note,
        })
        const response = await fetch(`${configs.baseUrl}/evaluate/${idProfissional}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'authorization': `Bearer ${usuario.token}`
            },
            body: json
        })
        const responseLogin = await response.json();

        window.location.reload();
        
        // if(response.status == 401){
        //     loginMensagem.innerHTML = responseLogin.error;
        // }
        // loginMensagem.innerHTML = responseLogin.ok;

        // const dataUser = JSON.stringify(responseLogin);
        // sessionStorage.setItem('dataUser', dataUser);
    }
    
}