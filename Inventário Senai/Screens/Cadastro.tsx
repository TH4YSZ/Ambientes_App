import { View, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import BotaoCad from '../components/Botao-Cad';



function Cadastro(){
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    return(
        
        <ScrollView>
            <StatusBar style="light"/>

            <Header titulo="Cadastre-se" cor="#FF0000"/>
            <View style={styles.form}>
                <Input label="Nome" onChangeText={setNome} value={nome} placeholder={"Insira seu nome:"} secureTextEntry={false} />
                <Input label="Sobrenome" onChangeText={setSobrenome} value={sobrenome} placeholder={"Insira seu sobrenome:"} secureTextEntry={false} />
                <Input label="E-mail" onChangeText={setEmail} value={email} placeholder={"Insira seu email:"} secureTextEntry={false} />
                <Input label="Telefone" onChangeText={setTelefone} value={telefone} placeholder={"Insira seu telefone:"} secureTextEntry={false} />
                <Input label="Senha" onChangeText={setSenha} value={senha} placeholder={"Insira sua senha:"} secureTextEntry={true} />
                <Input label="Confirmar Senha" onChangeText={setConfSenha} value={confSenha} placeholder={"Insira sua senha:"} secureTextEntry={true} />
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
        marginHorizontal: 20
    },
})
export default Cadastro