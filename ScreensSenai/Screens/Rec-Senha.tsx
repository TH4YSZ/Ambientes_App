import { View, Text } from 'react-native';
import Header from '../components/Header';
import { InputEmail } from '../components/Input';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

function RecSenha(){
    return(
        <View>
            <StatusBar style="light"/>
            <Header/>
            <View>
                <Text>Insira seu e-mail para recuperar a senha!</Text>
                <InputEmail/>
            </View>
        </View>
    )
}

export default RecSenha