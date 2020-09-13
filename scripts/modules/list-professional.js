import { configs } from './configsApi.js';

export default function initListProfessionals() {
  const professionalTabelaDados = document.querySelector('.tableBody');

  function showDataProfessional(event) {
    const dados = sessionStorage.getItem('dataUser');
    const usuario = JSON.parse(dados);

    console.log('dados usuario: ', usuario);

    if (usuario) {
      sessionStorage.setItem(
        'idProfissional',
        JSON.stringify(+event.target.id),
      );
      window.location.href = 'client.html';
    } else {
      alert('Faça login para realizar avaliacões!');
    }
  }

  professionalTabelaDados.addEventListener('click', showDataProfessional);

  function createTableProfessional(professionals) {
    for (let i = 0; i < professionals.length; i++) {
      const ul = document.createElement('ul');
      const img = document.createElement('img');
      const span = document.createElement('span');
      const li1 = document.createElement('li');
      const li2 = document.createElement('li');
      const li3 = document.createElement('li');

      img.classList.add('fotoPerfil');
      img.src = `../images/picProfessional.svg`;
      span.id = professionals[i].id;
      span.innerHTML = professionals[i].name;
      li1.appendChild(img);
      li1.appendChild(span);
      li2.id = professionals[i].id;
      li2.innerHTML = professionals[i].workplace;
      li3.id = professionals[i].id;
      li3.innerHTML = 4;

      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);

      professionalTabelaDados.appendChild(ul);
    }
  }

  async function allProfessionals() {
    const response = await fetch(`${configs.baseUrl}/professionals`);
    const responseProfessionals = await response.json();

    createTableProfessional(responseProfessionals);

    console.log('profissionais: ', responseProfessionals);
  }

  allProfessionals();
}
