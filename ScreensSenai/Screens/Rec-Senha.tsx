import { View, Text } from 'react-native';
import Header from '../components/Header';
import { InputSenha, InputEmail } from '../components/Input';
import React from 'react';

function RecSenha(){
    return(
        <View>
            <Header/>
            <View>
                <Text>Insira seu e-mail para recuperar a senha!</Text>
                <InputSenha/>
            </View>
        </View>
    )
}

// const styles = StyleSheet.create({
    
// })

export default RecSenha