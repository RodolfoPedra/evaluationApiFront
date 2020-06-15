export default function initModifyLogin() {

    const btnLogin = document.querySelector('#nomeLogin');
    const btnCadastrar = document.querySelector('.cadastrarOuSair');
    const btnSair = document.querySelector('.sair');

    const dados = sessionStorage.getItem('dataUser');
    const usuario = JSON.parse(dados);

    if(usuario) {
        btnLogin.innerHTML = usuario.user.name;
        btnCadastrar.classList.add('hideLogin');
        btnSair.classList.remove('hideLogin');
        btnSair.id = 'show';
    }


    btnSair.addEventListener('click', () => {
        window.location.reload();
        window.location.href = 'index.html';
        sessionStorage.clear();
    })
}