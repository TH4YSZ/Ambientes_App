import { View, StyleSheet } from 'react-native';
import Header from '@components/Header';
import Input from '@components/Input';
import Botao from '@components/Botao';
import Subtitulo from '@components/Subtitulo';
import LinkBtn from '@components/LinkBtn';
import { Link } from 'expo-router';
import { useColor } from '@temas/Temas';


function RecSenha(){
    return(
        <View style={styles.container}>
            <Header titulo="Recuperação de senha" cor={cores.recSenhaHeader}/>
            <View style={styles.form}>
                <Subtitulo subtitulo="Insira seu e-mail para recuperar a senha!"/>
                <Input label="Email" placeholder={"Insira seu email:"}/>
                <LinkBtn title="Cadastre-se" href="/TelasIniciais/Cadastro"/>
            </View>
        </View>
    )
}
const cores = useColor()
const styles = StyleSheet.create({
    form:{
        height: '100%',
        marginVertical: 45,
        paddingHorizontal: 20,
        width: "100%"
    },
    container: {
        backgroundColor: cores.bgPrimary,
        flex: 1
    },
})
export default RecSenha