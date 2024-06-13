import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, ImageBackground } from 'react-native';
import { Ambiente_List } from '../api';
import Cards from '@components/Cards';


const Ambientes = () => {
    const [ambientes, setAmbientes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await Ambiente_List();
            if (data) {
                setAmbientes(data);
            } else {
                console.error('Falha ao obter dados dos ambientes');
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return <ImageBackground source={require('@assets/engrenagens.jpg')} style={styles.backgroundImage}>
                <Cards dadosAmbiente={ambientes} />    
            </ImageBackground>;
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Ambientes;
