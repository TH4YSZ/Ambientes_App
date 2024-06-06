import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { Link } from "expo-router"
import InputItem from "@components/Input-Item"

function CadAmbientes(){
    return( 
        <ScrollView style={styles.scrollview}>
                <View style={styles.container}>
                    <InputItem label="Nome do Ambiente" descInicial="" />
                    <InputItem label="Descrição " descInicial=""/>
                    <InputItem label="Sala " descInicial="" />
                </View>
                <TouchableOpacity style={styles.button}>
                        <Link href="" asChild>
                            <Text style={styles.buttonText}>Reservar</Text>
                        </Link>
                </TouchableOpacity>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    scrollview:{
        backgroundColor: "#fff"
    },
    container:{
        paddingVertical: 60,
        paddingHorizontal: 20,
        height: '100%',
    },
    button: {
        marginTop: 10,
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    }
})
export default CadAmbientes
