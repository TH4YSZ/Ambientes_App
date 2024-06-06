import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from '@components/Header';
import Input from '@components/Input';
import Subtitulo from '@components/Subtitulo'
import LinkBtn from '@components/LinkBtn';
import { useColor } from '@temas/Temas';
import { Link } from 'expo-router';


function Login() {
    return (
        <View style={styles.container}>
            <Header titulo="Login" cor={cores.loginHeader} />
            <View style={styles.form}>
                <Subtitulo subtitulo="Faça Login para Acessar o Sistema!" />
                <Input label="Nome de Usuário" placeholder='Insira seu nome' />
                <Input label="Senha" placeholder={'Insira sua senha'} secureTextEntry={true} />
                <LinkBtn title="Entrar" href="TabNav" />
            </View>
        </View>

    )
}

const cores = useColor()

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
    },
    form: {
        backgroundColor: "#fff",
        height: '100%',
        marginTop: 45,
        paddingHorizontal: 20,
        width: "100%",
    },
    text: {
        color: "#011E83",
    }
})

export default Login