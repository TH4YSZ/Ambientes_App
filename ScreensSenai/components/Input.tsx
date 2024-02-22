import React, {useState} from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

function InputSenha(){
    const [senha, setSenha] = useState("")
    return(
        <View>
            <Text style={styles.senha}>Senha:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setSenha(text)}
                value={senha}
                placeholder="Sua senha:"
                secureTextEntry={true}
            />
        </View>
        
    )
}

function 


const styles = StyleSheet.create({
    senha:{
        fontSize: 16,
        color: '#242323',
        paddingBottom: 10,
        paddingTop: 25
      },
    input: {
      height: 40,
      marginBottom: 10,
      fontFamily: 'Roboto',
      borderBottomWidth: 1,
      borderColor: "gray",
  
    }
  
  })
export default InputSenha