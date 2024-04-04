import { View, StyleSheet, ScrollView } from "react-native"
import TopNav from "@components/TopNavigator"
import InputItem from "@components/Input-Item"

function CadItens(){
    return( 
        <ScrollView>
            <TopNav icon="arrow-back" icon2="add-circle-outline" text="Cadastro de itens" bgcolor="#FF0000" iconcolor="#fff" fontcolor="#fff"/>
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

const styles = StyleSheet.create({
    container:{
        paddingVertical: 60,
        paddingHorizontal: 20,
        height: '100%',
    },
})
export default CadItens