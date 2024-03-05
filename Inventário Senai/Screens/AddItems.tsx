import { View, StyleSheet } from "react-native"
import TopNav from "../components/TopNavigator"
import InputItem from "../components/Input-Item"

function AddItems(){
    return(
        <View>
            <TopNav icon="arrow-back" icon2="refresh-outline" text="Cadastro de itens" bgcolor="#FF0000" iconcolor="#fff" fontcolor="#fff"/>
            <View style={styles.container}>
                <InputItem label="N° do Inventário " />
                <InputItem label="Descrição " />
                <InputItem label="Local " />
                <InputItem label="Responsável " />
                <InputItem label="Data de registro " />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 60,
        paddingHorizontal: 20
    }
})
export default AddItems