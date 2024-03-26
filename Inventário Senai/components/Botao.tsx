import { View, Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from "react-native";

interface BotaoProps extends TouchableOpacityProps {
    texto: string;
  }

function Botao({texto, ...props}:BotaoProps){
    return(
        <View>
            <TouchableOpacity {...props} style={styles.button}>
                <Text  style={styles.textButton}>{texto}</Text>
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

export default Botao