import { View, Text, StyleSheet } from "react-native"

function Subtitulo({subtitulo}){
    return(
        <View>
            <Text style={styles.subtitulo}>{subtitulo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitulo:{
        fontWeight: '500',
        fontSize: 20
    }
})

export default Subtitulo