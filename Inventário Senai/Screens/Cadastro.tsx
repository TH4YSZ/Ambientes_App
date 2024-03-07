import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';
import BotaoCad from '../components/Botao-Cad';



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
                <BotaoCad/>            
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form:{
        backgroundColor: "#fff",
        height: 800,
        marginTop: 45,
        paddingHorizontal: 20,
        width: "100%"
    },
})
export default Cadastro