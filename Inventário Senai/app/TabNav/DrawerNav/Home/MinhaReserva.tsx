import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, ImageBackground } from 'react-native';
import CardReservas from '@components/Card-reserva';
import { ListarReservas } from '../../../api';

const MinhasReservas = () => {
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await ListarReservas();
      if (data) {
        setReservas(data);
      } else {
        console.error('Falha ao obter dados das Reservas');
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

  return (
    <ImageBackground source={require('@assets/engrenagens.jpg')} style={styles.backgroundImage}>
      <CardReservas dadosReserva={reservas} />
    </ImageBackground>
  );
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

export default MinhasReservas;