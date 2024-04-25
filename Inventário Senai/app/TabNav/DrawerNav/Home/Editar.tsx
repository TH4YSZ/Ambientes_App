import { View, StyleSheet, ScrollView } from "react-native"
import InputItem from "@components/Input-Item"
import { useColor } from "@temas/Temas"


function Editar(){
    return( 
        <ScrollView style={styles.scrollview}>
                <View style={styles.container}>
                    <InputItem label="N° do Inventário " descInicial="957689"/>
                    <InputItem label="Descrição " descInicial="CADEIRA GIRATÓRIA"/>
                    <InputItem label="Local " descInicial="SALA C13" />
                    <InputItem label="Responsável " descInicial="CARLOS" />
                    <InputItem label="Data de registro " descInicial="05/03/2024" />
                </View>
            </ScrollView>
    )
}

const cores = useColor()
const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
        backgroundColor: cores.bgPrimary
    },
    container:{
        paddingVertical: 60,
        paddingHorizontal: 20,
        height: '100%',
    },
})
export default Editar