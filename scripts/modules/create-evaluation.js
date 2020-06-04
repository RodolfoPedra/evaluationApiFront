import {configs} from './configsApi.js';

export default function initCreateEvaluation() {

    const dados = sessionStorage.getItem('dataUser');
    const usuario = JSON.parse(dados);
    console.log('dados usuario: ', usuario);

    
    
}