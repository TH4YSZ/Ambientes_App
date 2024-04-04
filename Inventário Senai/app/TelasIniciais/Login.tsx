import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from '@components/Header';
import Input from '@components/Input';
import Botao from '@components/Botao';
import Subtitulo from '@components/Subtitulo'
import LinkBtn from '@components/LinkBtn';
import { Link } from 'expo-router';



function Login(){
    return(
        <View>
            <Header titulo="Login" cor="#000"/>
            <View style={styles.form}>
                <Subtitulo subtitulo="Faça Login para Acessar o Sistema!"/>
                <Input label="Email" placeholder='Insira seu email:'/>
                <Input label="Senha" placeholder ={'Insira sua senha:'} secureTextEntry={true}/>
                <LinkBtn title="Entrar" href="TabNav"/>

                <View style={styles.links}>
                    
                    <Link href="/TelasIniciais/Cadastro" asChild>
                        <TouchableOpacity>
                            <Text style={styles.text}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </Link>

                    <Link href="/TelasIniciais/Rec-Senha" asChild>
                        <TouchableOpacity>
                            <Text style ={styles.text}>Esqueceu a senha?</Text>  
                        </TouchableOpacity>
                    </Link>
                    
                </View>         
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        backgroundColor: "#fff",
        height: '100%',
        marginTop: 45,
        paddingHorizontal: 20,
        width: "100%",
    },
    links: {
        fontSize: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    text:{
        color: '#011E83',
    }
})
export default Login