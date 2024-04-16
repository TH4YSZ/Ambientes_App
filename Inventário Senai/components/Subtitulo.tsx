import { View, Text, StyleSheet } from "react-native"
import { useColor } from "../temas/Temas"

function Subtitulo({subtitulo}){
    const cores = useColor()
    const styles = StyleSheet.create({
        subtitulo:{
            fontWeight: '500',
            fontSize: 20,
            textAlign: "center",
            marginBottom: 45,
            color: cores.textColorPrimary
        }
    })

    return(
        <View>
            <Text style={styles.subtitulo}>{subtitulo}</Text>
        </View>
    )
}



export default Subtitulo