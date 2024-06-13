import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';


type Ambiente = {
    id: number;
    titulo: string;
    descricao: string;
    sala: string;
};

type CardProps = {
    id: number;
    titulo: string;
    descricao: string;
    sala: string;
};

const Cards = ({ dadosAmbiente }: { dadosAmbiente: Ambiente[] }) => {
    const Card = ({ id, titulo, descricao, sala }: CardProps) => {
        return (
            <View key={id} style={styles.card}>
                <Text style={styles.cardTitle}>{titulo}</Text>
                <Text style={styles.cardBody}>Lotação: {descricao}</Text>
                <Text style={styles.cardText}>Sala: {sala}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Link href="TabNav/DrawerNav/Home/ReservaAmbiente" asChild>
                            <Text style={styles.buttonText}>Reservar</Text>
                        </Link>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton}>
                        <Link href="" asChild>
                            <FontAwesome name="trash-o" size={24} color="red" style={styles.deleteButtonText} />
                        </Link>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.cardContainer}>
                {dadosAmbiente.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        padding: 10,
        alignItems: 'center',
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    card: {
        padding: 20,
        width: 200,
        height: 300,
        borderRadius: 20,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        borderColor: '#808080',
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
    },
    cardBody: {
        color: '#1f1f1f',
        fontSize: 15,
        textAlign: 'center',
        padding: 10,
        maxHeight: 250,
    },
    cardText: {
        fontSize: 16,
        textAlign: 'center',
    },
    button: {
        marginTop: 10,
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    deleteButton: {
        marginTop: 10,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ff0000',
        width: 90,
    },
    deleteButtonText: {
        color: '#ff0000',
        fontSize: 16,
        textAlign: 'center',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: 8,
    },
});

export default Cards;
