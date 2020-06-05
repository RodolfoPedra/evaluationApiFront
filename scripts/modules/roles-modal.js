export default function initModal() {
    
    const btnLogin = document.querySelector('#nomeLogin');
    const btnCadastrar = document.querySelector('.cadastrarOuSair');

    const containerModalLogin = document.querySelector('.modal-login');
    const btnFecharLogin = document.querySelector('#fecharLogin');
    

    const btnFecharCadastro = document.querySelector('#fecharCadastro');
    const containerModalCadastro = document.querySelector('.modal-cadastro');
    
    const optionSelect = document.querySelector('#seletorTipoPessoaCadastro');
    const fworkplace = document.querySelector('#fworkplace');

    function showOrNoneModalLogin() {
        containerModalLogin.classList.toggle('ativo');
    }

    function showOrNoneModalCadastro() {
        containerModalCadastro.classList.add('ativo');
    }

    function closeModal() {
        containerModalCadastro.classList.remove('ativo');
        containerModalLogin.classList.remove('ativo');
    }

    function clickEscapeModal(event) {
        if(event.target === this)
        closeModal();
    }

    function showOrNoneWorkplace(event) {
        console.log(event.target.value);
            
        if(event.target.value === "profissional"){
            fworkplace.classList.add('ativo');
        }else {
            fworkplace.classList.remove('ativo');
        }
    }

    optionSelect.addEventListener('change', showOrNoneWorkplace);

    btnLogin.addEventListener('click', showOrNoneModalLogin);
    btnFecharLogin.addEventListener('click', closeModal);
    containerModalLogin.addEventListener('click', clickEscapeModal);
    
    btnCadastrar.addEventListener('click', showOrNoneModalCadastro);
    btnFecharCadastro.addEventListener('click', closeModal);
    containerModalCadastro.addEventListener('click', clickEscapeModal);
}   