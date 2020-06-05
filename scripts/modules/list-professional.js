import {configs} from './configsApi.js';

export default function initListProfessionals() {

    const tabelaAvaliacoes = document.querySelector('.tabelaAvaliacoes tbody');
    const professionalTabela = document.querySelector('.tabelaAvaliacoes td');

    const professionalTabelaDados = document.querySelector('.tabelaAvaliacoes tbody');

    function showDataProfessional(event) {

        const dados = sessionStorage.getItem('dataUser');
        const usuario = JSON.parse(dados);

        console.log('dados usuario: ', usuario);

        if(usuario) {
            sessionStorage.setItem('idProfissional', JSON.stringify(+event.target.id));
            window.location.href = "client.html";
        }else {
            alert('Faça login para realizar avaliacões!');
        }
        
        
    }

    professionalTabelaDados.addEventListener('click', showDataProfessional);


    function createTableProfessional(professionals) {

        for(let i = 0; i < professionals.length; i++) {

            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
        
            td1.id = professionals[i].id;
            td1.innerHTML = professionals[i].name;
            td2.id = professionals[i].id;
            td2.innerHTML = professionals[i].workplace;

            tr.appendChild(td1);
            tr.appendChild(td2);
            // tr.appendChild(td3);
            
            tabelaAvaliacoes.appendChild(tr);
        }
    }
    
   async function allProfessionals(){
        const response = await fetch(`${configs.baseUrl}/professionals`);
        const responseProfessionals = await response.json();

        createTableProfessional(responseProfessionals);
        
    }

    allProfessionals();

}