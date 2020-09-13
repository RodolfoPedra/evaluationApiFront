import { configs } from './configsApi.js';

export default function initPerfilProfessional() {
  const idProfissional = sessionStorage.getItem('idProfissional');

  const avaliacoesProfissional = document.querySelector(
    '.avaliacoesProfissional .tableBody',
  );
  const dadosProfissional = document.querySelectorAll(
    '[data-profissionalDados]',
  );

  const dados = sessionStorage.getItem('dataUser');
  const usuario = JSON.parse(dados);

  console.log('login: ', usuario);

  function setNameProfessional(professional) {
    dadosProfissional[0].innerHTML = professional[0].professional.name;
    dadosProfissional[1].innerHTML = professional[0].professional.workplace;
  }

  function createTableProfessional(professional) {
    for (let i = 0; i < professional.length; i++) {
      const ul = document.createElement('ul');
      const li1 = document.createElement('li');
      const li2 = document.createElement('li');
      const li3 = document.createElement('li');

      li1.id = professional[i].id;
      li1.innerHTML = professional[i].user.name;
      li2.id = professional[i].id;
      li2.innerHTML = professional[i].opinion;
      li3.id = professional[i].id;
      li3.innerHTML = professional[i].note;

      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);

      avaliacoesProfissional.appendChild(ul);
    }
  }

  async function getAllEvaluation(idProfessional) {
    const response = await fetch(
      `${configs.baseUrl}/evaluations/professional/${idProfessional}`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          authorization: `Bearer ${usuario.token}`,
        },
      },
    );
    const responseEvaluation = await response.json();

    if (responseEvaluation.length == 0) {
      alert('Profissional ainda não foi avaliado!');
    }

    console.log('avaliações: ', responseEvaluation);

    createTableProfessional(responseEvaluation);
    setNameProfessional(responseEvaluation);
  }

  getAllEvaluation(Number.parseInt(idProfissional));
}
