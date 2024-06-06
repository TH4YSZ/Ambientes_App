import { View, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import Header from '@components/Header';
import Input from '@components/Input';
import LinkBtn from '@components/LinkBtn';
import * as Calendar from 'expo-calendar';

type Props = {};

const Reserva_Ambiente = (props: Props) => {

    useEffect(() => {
        (async () => {
            const { status } = await Calendar.requestCalendarPermissionsAsync();
            if (status === 'granted') {
                const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
                console.log('Calendário:');
                console.log({ calendars });
            }
        })();
    }, []);

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

async function getDefaultCalendarSource() {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
}

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
