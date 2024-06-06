import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Header from '@components/Header';
import Input from '@components/Input';
import Subtitulo from '@components/Subtitulo';
import LinkBtn from '@components/LinkBtn';
import { Link } from 'expo-router';

function Login() {
    return (
        <ImageBackground source={require('@assets/bg.jpg')} style={styles.backgroundImage}>
            <View style={styles.overlay}>
                <Header/>
                <View style={styles.formContainer}>
                    <Subtitulo subtitulo="Faça Login para Acessar o Sistema!" />
                    <View style={styles.form}>
                        <Input label="Nome de Usuário" placeholder="Insira seu nome" />
                        <Input label="Senha" placeholder="Insira sua senha" secureTextEntry={true} />
                        <LinkBtn title="Entrar" href="TabNav" />
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
    text: {
        color: '#011E83',
    }
});

export default Login;
