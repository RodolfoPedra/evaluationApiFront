export default function initModifyLogin() {

    const btnLogin = document.querySelector('#nomeLogin');
    const btnCadastrar = document.querySelector('#cadastrarOuSair');

    const dados = sessionStorage.getItem('dataUser');
    const usuario = JSON.parse(dados);

    console.log('dados usuario: ', usuario);

    if(usuario) {
        btnLogin.innerHTML = usuario.user.name;
        btnCadastrar.innerHTML = 'Sair';
    }
}