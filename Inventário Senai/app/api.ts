// api.ts
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URL = 'http://192.168.0.130:8000/api/';

export async function Logica_Login(username: string, password: string) {
    try {
        const response = await axios.post(`${URL}token/`, {
            username: username,
            password: password
        });

        const token = response.data.access;
        
        // Armazenar o token no AsyncStorage
        await AsyncStorage.setItem('token', token);

        console.log('Login realizado com sucesso:', response.data);
        return { success: true, data: response.data };
    } catch (error) {
        if (error.response) {
            console.error('Erro ao fazer login:', error.response.data);
            return { success: false, message: error.response.data };
        } else {
            console.error('Erro ao fazer login:', error.message);
            return { success: false, message: error.message };
        }
    }
}
