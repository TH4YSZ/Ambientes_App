import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function BotaoCad(){
    return(
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#000',
        height: 47,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    textButton:{
        fontSize: 14,
        color: '#fff',
    },
})

export default BotaoCad