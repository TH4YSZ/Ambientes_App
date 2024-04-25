import { View, StyleSheet, ScrollView } from "react-native"
import InputItem from "@components/Input-Item"
import { useColor } from "@temas/Temas"

function CadItens(){
    return( 
        <ScrollView style={styles.scrollview}>
                <View style={styles.container}>
                    <InputItem label="N° do Inventário" descInicial="" />
                    <InputItem label="Descrição " descInicial=""/>
                    <InputItem label="Local " descInicial="" />
                    <InputItem label="Responsável " descInicial="" />
                    <InputItem label="Data de registro " descInicial="" />
                </View>
        </ScrollView>
    )
}

const cores = useColor()
const styles = StyleSheet.create({
    scrollview:{
        backgroundColor: cores.bgPrimary
    },
    container:{
        paddingVertical: 60,
        paddingHorizontal: 20,
        height: '100%',
    },
})
export default CadItens
