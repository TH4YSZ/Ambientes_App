import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import Input from '../components/Input';
import BotaoCad from '../components/Botao-Cad';
import Subtitulo from '../components/Subtitulo'


function Login(){
    return(
        
        <View>
            <StatusBar style="light"/>

            <Header titulo="Login" cor="#000"/>
            <View style={styles.form}>
                <Subtitulo subtitulo="Faça Login para Acessar o Sistema!"/>
                <Input label="Email" placeholder='Insira seu email:'/>
                <Input label="Senha" placeholder ={'Insira sua senha:'} secureTextEntry={true}/>
                <BotaoCad/>
                <View style={styles.links}>
                    <Text style={styles.text}>Cadastre-se</Text>
                    <Text style={styles.text}>Esqueceu a senha?</Text>  
                </View>         
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        backgroundColor: "#fff",
        height: 800,
        marginTop: 45,
        marginHorizontal: 20,
        width: "100%",
    },
    links: {
        fontSize: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    text:{
        color: '#011E83',

    }
})
export default Login