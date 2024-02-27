import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import BotaoCad from '../components/Botao-Cad';
import Subtitulo from '../components/Subtitulo'

function RecSenha(){
    const [email, setEmail] = useState('');
    return(
        
        <View>
            <StatusBar style="light"/>

            <Header titulo="Recuperação de senha" cor="#011E83"/>
            <View style={styles.form}>
                <Subtitulo subtitulo="Insira seu e-mail para recuperar a senha!"/>
                <Input label="Email" onChangeText={setEmail} value={email} placeholder={"Insira seu email:"} secureTextEntry={false} />
                <BotaoCad/>            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        backgroundColor: "#fff",
        height: 800,
        marginTop: 45,
        marginHorizontal: 20
    },

})
export default RecSenha