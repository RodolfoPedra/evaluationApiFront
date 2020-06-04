import {configs} from './configsApi.js';

export default function initPerfilProfessional() {

    const idProfissional = sessionStorage.getItem('idProfissional');

    const avaliacoesProfissional = document.querySelector('.avaliacoesProfissional tbody');
    const dadosProfissional = document.querySelectorAll('[data-profissionalDados]');

    const dados = sessionStorage.getItem('dataUser');
    const usuario = JSON.parse(dados);


    function setNameProfessional(professional) {
        dadosProfissional[0].innerHTML = professional.name;
        dadosProfissional[1].innerHTML = professional.workplace;
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
            td1.innerHTML = professional[i].opinion;
            td2.id = professional[i].id;
            td2.innerHTML = professional[i].note;
            // btnAvaliar.type = "button";
            // btnAvaliar.value = "Avaliar";
            // btnAvaliar.classList.add('btnAvaliar');
            // btnAvaliar.id = professionals[i].id;
            // td3.appendChild(btnAvaliar);

            tr.appendChild(td1);
            tr.appendChild(td2);
            // tr.appendChild(td3);
            // tr.appendChild(td4);
            // tr.appendChild(td3);
            
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

        if(responseEvaluation.evaluationsProfessional.length == 0){
            alert('Profissional ainda não foi avaliado!');
        }

        createTableProfessional(responseEvaluation.evaluationsProfessional);
        setNameProfessional(responseEvaluation);
        
    }

    getAllEvaluation(Number.parseInt(idProfissional));
}