import { View, StyleSheet, ScrollView, ImageBackground, Button} from 'react-native';
import Header from '@components/Header';
import Input from '@components/Input';
import LinkBtn from '@components/LinkBtn';
import { useState } from 'react';
import { registerUser } from '../../api';
import { Alert } from 'react-native';
import { router } from 'expo-router';

function Cadastro(){
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');

    const Cad_User = async () => {
        try {

            const newUser = {
                nome,
                sobrenome,
                username,
                senha
            }
            const response = await registerUser(newUser);
            if (response.success) {
                router.navigate('Cad Usuário')
                
            } else {
                console.error('Erro ao cadastrar um usuário:', response.message);
                Alert.alert('Erro', 'Erro ao cadastrar usuário. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar um usuário:', error.message);
            Alert.alert('Erro', 'Ocorreu um erro ao tentar cadastrar um usuário. Tente novamente mais tarde.');
        }
    };
    return(
        <ImageBackground source={require('@assets/bg cad.jpg')} style={styles.backgroundImage}>
            <ScrollView style={styles.container}>
                <Header/>
                <View style={styles.form}>
                    <Input label="Nome" placeholder={"Insira seu nome:"} value={nome} onChangeText={setNome} />
                    <Input label="Sobrenome" placeholder={"Insira seu sobrenome:"} value={sobrenome} onChangeText={setSobrenome}/>
                    <Input label="Nome de Usuário" placeholder={"Insira seu nome de usuário:"} value={username} onChangeText={setUsername}/>
                    <Input label="Senha" placeholder={"Insira sua senha:"} secureTextEntry={true} value={senha} onChangeText={setSenha}/>
                    <Button title="Cadastrar" onPress={Cad_User} />
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