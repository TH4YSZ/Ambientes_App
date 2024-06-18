import { View, Text, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import Header from '@components/Header';
import Input from '@components/Input';
import LinkBtn from '@components/LinkBtn';
import Calendario from '@components/Calendario';

const Reserva_Ambiente = () => {
    return (
        <ImageBackground source={require('@assets/bg cad.jpg')} style={styles.backgroundImage}>
            <ScrollView style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.label}>Escolha a data:</Text>
                    <Calendario />
                    <Input label="Horário Inicial" placeholder="Insira o horário Inicial:" />
                    <Input label="Horário Final" placeholder="Insira o horário Final:" />
                    <View style={styles.buttonContainer}>
                        <LinkBtn title="Reservar" href="app/TabNav/DrawerNav/Home/MinhaReserva" color="#28a745" />
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default Reserva_Ambiente;

const styles = StyleSheet.create({
    form: {
        height: '100%',
        marginVertical: 45,
        paddingHorizontal: 20,
        width: "100%",
    },
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
        color: '#fff',
    },
    buttonContainer: {
        marginTop: 20,
    },
});
