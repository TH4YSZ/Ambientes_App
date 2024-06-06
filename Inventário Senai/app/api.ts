import { Axios } from "axios";

const axios = require('axios');

// interface dados_login {
// 	username: string;
// 	senha: string;
// }

// interface dados_cadastro {
//     username: string;
//     sobrenome: string;
//     senha: string;
// }

function Logica_Login() {
	const options = {
		method: 'POST',
		url: 'http://127.0.0.1:8000/api/token/'
	}
}

function Logica_Cadastro() {
    const options = {
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/usuario/'
    }
}

function Logica_Cadastro_Ambiente() {
    const criar_ambiente = {
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/ambiente/'
    }
    const excluir_ambiente = {
        method: 'DELETE',
        url: 'http://127.0.0.1:8000/api/ambiente/<int:id>/'
    }
}

function Logica_Reserva() {
    const fazer_reserva = {
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/reserva/'
    }
    const excluir_reserva = {
        method: 'DELETE',
        url: 'http://127.0.0.1:8000/api/reserva/<int:id>/'
    }
}

function Dados_Senai() {
    const options = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/api/senai/'
    }
}

Logica_Login()
Logica_Cadastro()
Logica_Cadastro_Ambiente()
Logica_Reserva()
Dados_Senai()