import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import InputItem from "@components/Input-Item"
import LinkBtn from "@components/LinkBtn"

function CadAmbientes(){
    return( 
        <ScrollView style={styles.scrollview}>
                <View style={styles.container}>
                    <InputItem label="Nome do Ambiente" descInicial="" />
                    <InputItem label="Descrição " descInicial=""/>
                    <InputItem label="Sala " descInicial="" />
                </View>
                    <LinkBtn title="Cadastrar" href="Ambientes" />
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
})
export default CadAmbientes
