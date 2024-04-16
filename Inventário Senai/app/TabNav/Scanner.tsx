import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { useColor } from "../../temas/Temas";

function Scanner() {
    
 
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Image style={{ width: 350, height: 350 }} source={require('@assets/Scanner.png')} />
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
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Scanner;


// colorcar a imagem do scanner como vetor
// alterar a tabNav