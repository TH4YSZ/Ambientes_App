import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Alert, Button } from 'react-native';
import Header from '@components/Header';
import Input from '@components/Input';
import Subtitulo from '@components/Subtitulo';
import { Logica_Login } from '../api';
import LinkBtn from '@components/LinkBtn';
import { router } from 'expo-router';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await Logica_Login(username, password);
            if (response.success) {
                console.log('Login bem-sucedido:', response);
                console.log(username, password);
                router.navigate('TabNav/Ambiente')
                
            } else {
                console.error('Erro ao fazer login:', response.message);
                Alert.alert('Erro', 'Nome de usuário ou senha inválidos. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error.message);
            Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.');
        }
    };

    return (
        <ImageBackground source={require('@assets/bg.jpg')} style={styles.backgroundImage}>
            <View style={styles.overlay}>
                <Header />
                <View style={styles.formContainer}>
                    <Subtitulo subtitulo="Faça Login para Acessar o Sistema!" />
                    <View style={styles.form}>
                        <Input 
                            label="Nome de Usuário" 
                            placeholder="Insira seu nome" 
                            value={username}
                            onChangeText={setUsername}
                        />
                        <Input 
                            label="Senha" 
                            placeholder="Insira sua senha" 
                            secureTextEntry={true} 
                            value={password}
                            onChangeText={setPassword}
                        />
                        <Button title='Entrar'onPress={handleLogin}/>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
    },
    formContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    form: {
        marginTop: 20,
    },
});

export default Login;
