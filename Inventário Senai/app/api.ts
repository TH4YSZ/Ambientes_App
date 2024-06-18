import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const URL = 'http://192.168.0.130:8000/api/';

export async function Logica_Login(username, password) {
    try {
        const response = await axios.post(`${URL}token/`, {
            username: username,
            password: password
        });

        const token = response.data.access;

        // Armazenar o token no AsyncStorage
        await AsyncStorage.setItem('token', token);
        return { success: true, data: response.data };

    } catch (error) {
        if (error.response) {
            return { success: false, message: error.response.data };
        } else {
            return { success: false, message: error.message };
        }
    }
}

export async function Ambiente_List() {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            throw new Error('Token não encontrado');
        }

        const response = await axios.get(`${URL}ambiente/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Erro ao listar ambientes:', error.response.data);
        } else {
            console.error('Erro ao listar ambientes:', error.message);
        }
        return null;
    }
}

export async function ListarReservas() {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            throw new Error('Token não encontrado');
        }

        const response = await axios.get(`${URL}reserva/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Erro ao listar reservas:', error.response.data);
        } else {
            console.error('Erro ao listar reservas:', error.message);
        }
        return null;
    }
}

export async function registerUser(nome, sobrenome, username, senha, cargo) {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            console.log('Token não encontrado');
        }

        const response = await axios.post(`${URL}usuario/`, {
            nome: nome,
            sobrenome: sobrenome,
            username: username,
            senha: senha,
            cargo: cargo
        });

        if (response.status === 201) {
            return { success: true, data: response.data };
        } else {
            return { success: false, message: 'Erro ao cadastrar usuário' };
        }
    } catch (error) {
        if (error.response) {
            return { success: false, message: error.response.data };
        } else {
            return { success: false, message: error.message };
        }
    }
}

export async function registrarAmbiente(titulo, descricao, sala) {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            console.log('Token não encontrado');
        }

        const response = await axios.post(`${URL}ambiente/`, {
            titulo: titulo,
            descricao: descricao,
            sala: sala
        });

        if (response.status === 201) {
            return { success: true, data: response.data };
        } else {
            return { success: false, message: 'Erro ao cadastrar ambiente' };
        }
    } catch (error) {
        if (error.response) {
            return { success: false, message: error.response.data };
        } else {
            return { success: false, message: error.message };
        }
    }
}

export async function excluir_Reserva(id) {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            console.log('Token não encontrado');
            return { success: false, message: 'Token não encontrado' };
        }

        const response = await axios.delete(`${URL}reserva/${id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });

        if (response.status === 204) {
            Alert.alert('Sucesso', 'Reserva excluída com sucesso');
            return { success: true };
        } else {
            return { success: false, message: 'Erro ao deletar reserva' };
        }
    } catch (error) {
        if (error.response) {
            return { success: false, message: error.response.data };
        } else {
            return { success: false, message: error.message };
        }
    }
}

export async function excluirAmbiente(id) {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            console.log('Token não encontrado');
            throw new Error('Token não encontrado');
        }

        const response = await axios.delete(`${URL}ambiente/${id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });

        if (response.status === 204) {
            Alert.alert('Sucesso', 'Ambiente excluído com sucesso');
            return { success: true };
        } else {
            throw new Error('Erro ao deletar ambiente');
        }
    } catch (error) {
        console.error('Erro ao excluir ambiente:', error.message);
        return { success: false, message: 'Erro ao deletar ambiente' }; // Corrigindo mensagem de erro
    }
}



export async function ListarMinhasReservas() {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            throw new Error('Token não encontrado');
        }

        const response = await axios.get(`${URL}minhas-reservas/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Erro ao listar minhas reservas:', error.response.data);
        } else {
            console.error('Erro ao listar minhas reservas:', error.message);
        }
        return null;
    }
}
