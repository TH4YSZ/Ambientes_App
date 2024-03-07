import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';
import BotaoCad from '../components/Botao-Cad';
import Subtitulo from '../components/Subtitulo'


function RecSenha(){
    return(
        <View>
            <Header titulo="Recuperação de senha" cor="#011E83"/>
            <View style={styles.form}>
                <Subtitulo subtitulo="Insira seu e-mail para recuperar a senha!"/>
                <Input label="Email" placeholder={"Insira seu email:"}/>
                <BotaoCad/>            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        backgroundColor: "#fff",
        height: 800,
        marginTop: 45,
        paddingHorizontal: 20,
        width: "100%",
    },
})
export default RecSenha