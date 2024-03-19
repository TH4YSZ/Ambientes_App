import { View, StyleSheet, ScrollView } from "react-native"
import TopNav from "../components/TopNavigator"
import InputItem from "../components/Input-Item"
import BottomNav from "../components/BottomNavigator"

function Editar(){
    return( 
        <ScrollView>
            <TopNav icon="arrow-back" icon2="checkmark-circle" text="Editar" bgcolor="#FF0000" iconcolor="#fff" fontcolor="#fff"/>
                <View style={styles.container}>
                    <InputItem label="N° do Inventário " descInicial="957689"/>
                    <InputItem label="Descrição " descInicial="CADEIRA GIRATÓRIA"/>
                    <InputItem label="Local " descInicial="SALA C13" />
                    <InputItem label="Responsável " descInicial="CARLOS" />
                    <InputItem label="Data de registro " descInicial="05/03/2024" />
                </View>
                <BottomNav icon="camera-reverse" icon2="menu" iconcolor="#595959" bgcolor="#fff" bordercolor="#CBCBCB"/>
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
export default Editar