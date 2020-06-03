import {configs} from './configsApi.js';

export default function initListEvaluations() {

    const tabelaAvaliacoes = document.querySelector('.tabelaAvaliacoes tbody');
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    function createTableProfessional(professionals) {

        
    }
    td1.innerHTML = 'Nome2';
    td2.innerHTML = 'Conveniência MultiMarcas';
    td3.innerHTML = '5';

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    
    tabelaAvaliacoes.appendChild(tr);


   async function allProfessionals(){
        const response = await fetch(`${configs.baseUrl}/professionals`);
        const responseProfessionals = await response.json();

        // createTableProfessional(responseProfessionals);

        Array.from(responseProfessionals).forEach(item => {
            console.log(item);
        })
    }
    
    allProfessionals();
    
    
}