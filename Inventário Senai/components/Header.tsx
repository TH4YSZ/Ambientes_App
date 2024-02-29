import { View, Text, StyleSheet, Image} from "react-native"
import React from 'react';

function Header({cor, titulo}){
    return (
        <View style={{...styles.container, backgroundColor: cor}}>
            <Image style={styles.logo} source={require('../assets/LogoSenai.png')}/>
            <Text style={styles.text}>{titulo}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    fontFamily: 'Roboto',
    height: 200,
    width: "100%",
    justifyContent: "center",
    borderRadius: 5,
  },
  logo:{
    width: 181,
    height: 39,
    marginTop: 42,
    marginBottom: 20,
    marginHorizontal: 73,
  },
  text:{
    fontSize: 20,
    color: '#fff',
    marginBottom: 42,
    fontFamily: "Inter"
  },
})

export default Header