import { View, StyleSheet, ScrollView } from "react-native"
import TopNav from "../components/TopNavigator"
import InputItem from "../components/Input-Item"
import BottomNav from "../components/BottomNavigator"

function CadItens(){
    return( 
        <ScrollView>
            <TopNav icon="arrow-back" icon2="add-circle-outline" text="Cadastro de itens" bgcolor="#FF0000" iconcolor="#fff" fontcolor="#fff"/>
                <View style={styles.container}>
                    <InputItem label="N° do Inventário " />
                    <InputItem label="Descrição " />
                    <InputItem label="Local " />
                    <InputItem label="Responsável " />
                    <InputItem label="Data de registro " />
                </View>
                <BottomNav icon="camera-reverse" icon2="menu" iconcolor="#595959" bgcolor="#fff" bordercolor="CBCBCB"/>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 60,
        paddingHorizontal: 20,
        height: 800
    },
})
export default CadItens