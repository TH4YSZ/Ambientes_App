import { View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Button } from "react-native"
import { router } from 'expo-router';
import Input from "@components/Input"
import LinkBtn from "@components/LinkBtn"
import { Alert } from 'react-native';
import { registrarAmbiente } from "../../api";
import { useState } from "react";

function CadAmbientes(){
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [sala, setSala] = useState('');

    const Cad_Ambiente = async () => {
        try {
            const response = await registrarAmbiente(titulo, descricao, sala);
            if (response.success) {
                router.navigate('TabNav/Ambiente')
                Alert.alert('Sucesso', 'Sucesso ao cadastrar ambiente!');
                
            } else {
                console.error('Erro ao cadastrar um ambiente:', response.message);
                Alert.alert('Erro', 'Erro ao cadastrar ambiente. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar um ambiente:', error.message);
            Alert.alert('Erro', 'Ocorreu um erro ao tentar cadastrar um ambiente. Tente novamente mais tarde.');
        }
    };
    return( 
        <ImageBackground source={require('@assets/bg cad.jpg')} style={styles.backgroundImage}>
            <ScrollView>
                    <View style={styles.container}>
                        <Input label="Nome do Ambiente" placeholder={"Insira o nome do ambiente:"} value={titulo} onChangeText={setTitulo} />
                        <Input label="Descrição" placeholder={"Insira uma descrição:"} value={descricao} onChangeText={setDescricao}/>
                        <Input label="Sala" placeholder={"Insira a sala:"} value={sala} onChangeText={setSala}/>
                        <Button title="Cadastrar" onPress={Cad_Ambiente} />
                    </View>                        
            </ScrollView>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container:{
        paddingVertical: 60,
        paddingHorizontal: 20,
        height: '100%',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
})
export default CadAmbientes
