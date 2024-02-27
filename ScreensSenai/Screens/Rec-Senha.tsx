import { View, Text } from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import BotaoCad from '../components/Botao-Cad';

function RecSenha(){
    const [email, setEmail] = useState('');
    return(
        
        <View>
            <StatusBar style="light"/>
            <Header/>
            <View>
                <Text>Insira seu e-mail para recuperar a senha!</Text>
                <Input label="Insira seu e-mail para recuperar a senha:" onChangeText={setEmail} value={email} placeholder={"Insira seu email:"} secureTextEntry={false} />
            </View>
            <BotaoCad/>
        </View>
    )
}

export default RecSenha