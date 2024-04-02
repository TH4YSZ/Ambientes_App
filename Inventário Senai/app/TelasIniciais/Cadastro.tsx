import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '@components/Header';
import Input from '@components/Input';
import Botao from '@components/Botao';
import { Link } from 'expo-router';



function Cadastro(){
    return(
        <ScrollView>
            <Header titulo="Cadastre-se" cor="#FF0000"/>
            <View style={styles.form}>
                <Input label="Nome" placeholder={"Insira seu nome:"} />
                <Input label="Sobrenome" placeholder={"Insira seu sobrenome:"} />
                <Input label="E-mail" placeholder={"Insira seu email:"}/>
                <Input label="Telefone" placeholder={"Insira seu telefone:"}/>
                <Input label="Senha" placeholder={"Insira sua senha:"} secureTextEntry={true} />
                <Input label="Confirmar Senha" placeholder={"Insira sua senha:"} secureTextEntry={true} />
                <Link href="/index" asChild>
                    <Botao texto="Cadastre-se"/> 
                </Link>
                           
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form:{
        backgroundColor: "#fff",
        height: '100%',
        marginTop: 45,
        paddingHorizontal: 20,
        width: "100%"
    },
})
export default Cadastro