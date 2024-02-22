import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function BotaoCad(){
    return(
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Acessar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#000',
        width: 320,
        height: 47,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    textButton:{
        fontSize: 20,
        color: '#fff',
    },
})