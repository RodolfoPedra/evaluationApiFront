import {configs} from './configsApi.js';

export default function initPerfilProfessional() {

    const idProfissional = sessionStorage.getItem('idProfissional');

    const avaliacoesProfissional = document.querySelector('.avaliacoesProfissional tbody');
    const dadosProfissional = document.querySelectorAll('[data-profissionalDados]');

    const dados = sessionStorage.getItem('dataUser');
    const usuario = JSON.parse(dados);

    console.log('login: ', usuario);
    

    function setNameProfessional(professional) {
        dadosProfissional[0].innerHTML = professional[0].professional.name;
        dadosProfissional[1].innerHTML = professional[0].professional.workplace;
    }

    function createTableProfessional(professional) {

        for(let i = 0; i < professional.length; i++) {

            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
            const btnAvaliar = document.createElement('input');

            td1.id = professional[i].id;
            td1.innerHTML = professional[i].user.name;
            td2.id = professional[i].id;
            td2.innerHTML = professional[i].opinion;
            td3.id = professional[i].id;
            td3.innerHTML = professional[i].note;

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            
            avaliacoesProfissional.appendChild(tr);
        }
    }

    async function getAllEvaluation(idProfessional) {
        
        const response = await fetch(`${configs.baseUrl}/evaluations/professional/${idProfessional}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'authorization': `Bearer ${usuario.token}`
            }
        })
        const responseEvaluation = await response.json();

        if(responseEvaluation.length == 0){
            alert('Profissional ainda não foi avaliado!');
        }

        console.log('avaliações: ', responseEvaluation);
        

        createTableProfessional(responseEvaluation);
        setNameProfessional(responseEvaluation);
        
    }

    getAllEvaluation(Number.parseInt(idProfissional));
}