// screens/CardsScreen.tsx
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Cards from '@components/Cards';

type Ambiente = {
    id: number;
    titulo: string;
    descricao: string;
    sala: string;
};

type Props = {
    dadosAmbiente: Ambiente[];
};

const Ambientes = ({ dadosAmbiente }: Props) => {
    return (
        <View style={styles.container}>
            <Cards dadosAmbiente={[
                {id: 1,titulo: 'Sala 1',descricao: 'Sala de aula 1',sala: 'Sala 1',},
                {id: 2,titulo: 'Sala 2',descricao: 'Sala de aula 2',sala: 'Sala 2',},
                {id: 3,titulo: 'Sala 3',descricao: 'Sala de aula 3',sala: 'Sala 3',},
                {id: 4,titulo: 'Sala 4',descricao: 'Sala de aula 4',sala: 'Sala 4',},
                {id: 5,titulo: 'Sala 5',descricao: 'Sala de aula 5',sala: 'Sala 5',}
             ]} />
            <TouchableOpacity style={styles.addButton}>
                <Link href="TabNav/DrawerNav/Cad Ambiente" asChild>
                    <Ionicons name="add" size={30} color="white" />
                </Link>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: 'red',
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Ambientes;
