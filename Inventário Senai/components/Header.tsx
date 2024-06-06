import { View, StyleSheet, Image} from "react-native"
import React from 'react';

function Header(){
    return (
      <View style={{...styles.container}}>
          <Image style={styles.logo} source={require('@assets/LogoSenai.png')}/>
      </View>
        
    )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    fontFamily: 'Roboto',
    height: 300,
    width: "100%",
    justifyContent: "center",
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    gap: 10
  },
  logo:{
    width: 200,
    height: 50,
    marginHorizontal: 73,
  },
  text:{
    fontSize: 20,
    color: '#fff'
  },
})

export default Header