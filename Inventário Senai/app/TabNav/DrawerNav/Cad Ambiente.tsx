import { View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from "react-native"
import InputItem from "@components/Input-Item"
import LinkBtn from "@components/LinkBtn"

function CadAmbientes(){
    return( 
        <ImageBackground source={require('@assets/bg cad.jpg')} style={styles.backgroundImage}>
            <ScrollView>
                    <View style={styles.container}>
                        <InputItem label="Nome do Ambiente" descInicial="" />
                        <InputItem label="Descrição " descInicial=""/>
                        <InputItem label="Sala " descInicial="" />
                        <LinkBtn title="Cadastrar" href="/TabNav/Ambiente" />
                    </View>                        
            </ScrollView>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container:{
        paddingVertical: 60,
        paddingHorizontal: 20,
        height: '100%',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
})
export default CadAmbientes
