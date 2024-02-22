import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from "react-native"
import { StatusBar } from 'expo-status-bar';
import React from 'react';

function Header(){
    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={require('../assets/LogoSenai.png')}></Image>
            <Text style={styles.text}>Recuperação de senha</Text>
        </View>
        
    )
}


const styles = StyleSheet.create({
  header:{
    backgroundColor:'#011E83',
    flex: 1,
    alignItems: 'center',
    fontFamily: 'Roboto'
  },
  logo:{
    width: 200,
    height: 51.27,
    marginTop: 42,
    marginBottom: 20,
    marginHorizontal: 73,
  },
  text:{
    fontSize: 20,
    color: '#fff',
    marginBottom: 42
  },
})

export default Header