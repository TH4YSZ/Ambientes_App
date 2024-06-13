import { View, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import Header from '@components/Header';
import Input from '@components/Input';
import LinkBtn from '@components/LinkBtn';


const Reserva_Ambiente = () => {
    return (
        <ImageBackground source={require('@assets/bg cad.jpg')} style={styles.backgroundImage}>
            <ScrollView style={styles.container}>
                <View style={styles.form}>
                    <Input label="Data" placeholder="Insira a data:" />
                    <Input label="Horário Inicial" placeholder="Insira o horário Inicial:" />
                    <Input label="Horário Final" placeholder="Insira o horário Final:" />
                    <LinkBtn title="Reservar" href="TabNav/DrawerNav/Home/MinhaReserva" />
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
});
