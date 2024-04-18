import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { useColor } from "../../temas/Temas";
import { MaterialIcons } from '@expo/vector-icons';

function Scanner() {
    
 
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <MaterialIcons name="qr-code-scanner" size={350} color={cores.scannerColor} />
            </View>                   
        </ScrollView>     
    );
}
const cores = useColor();
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: cores.bgPrimary
    },
    container: {
        paddingVertical: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Scanner;


// colorcar a imagem do scanner como vetor
// alterar a tabNav