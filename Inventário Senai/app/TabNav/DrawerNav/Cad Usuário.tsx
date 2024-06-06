import { View, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import Header from '@components/Header';
import Input from '@components/Input';
import LinkBtn from '@components/LinkBtn';

function Cadastro(){
    return(
        <ImageBackground source={require('@assets/bg cad.jpg')} style={styles.backgroundImage}>
            <ScrollView style={styles.container}>
                <Header/>
                <View style={styles.form}>
                    <Input label="Nome" placeholder={"Insira seu nome:"} />
                    <Input label="Sobrenome" placeholder={"Insira seu sobrenome:"} />
                    <Input label="E-mail" placeholder={"Insira seu email:"}/>
                    <Input label="Telefone" placeholder={"Insira seu telefone:"}/>
                    <Input label="Senha" placeholder={"Insira sua senha:"} secureTextEntry={true} />
                    <Input label="Confirmar Senha" placeholder={"Insira sua senha:"} secureTextEntry={true} />
                    <LinkBtn title="Cadastre-se" href="/TelasIniciais/Login"/>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    form:{
        height: '100%',
        marginVertical: 45,
        paddingHorizontal: 20,
        width: "100%"
    },
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
})
export default Cadastro