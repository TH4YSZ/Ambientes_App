import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function ResCoord() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.card}>
                    <Text style={styles.title}>Reserva</Text>
                    <Text style={styles.text}>Data: 01/01/2021</Text>
                    <Text style={styles.text}>Horário: 12:00</Text>
                    <Text style={styles.text}>Mesa: 1</Text>
                    <Text style={styles.text}>Status: Confirmado</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
    card: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#f00',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});