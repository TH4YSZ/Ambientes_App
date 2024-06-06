import { View, Text, StyleSheet } from "react-native"

function Subtitulo({subtitulo}){
    const styles = StyleSheet.create({
        subtitulo:{
            fontWeight: '500',
            fontSize: 20,
            textAlign: "center",
            marginBottom: 45,
            color: "black"
        }
    })

    return(
        <View>
            <Text style={styles.subtitulo}>{subtitulo}</Text>
        </View>
    )
}



export default Subtitulo