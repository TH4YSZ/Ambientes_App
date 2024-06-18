import React from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, ScrollView, Button, Alert } from 'react-native';
import { excluir_Reserva } from '.././app/api';
import { router } from 'expo-router';

type Reservas = {
  id: number;
  data: string;
  horario: string;
  hora_final: string;
  sala: string;
  username: string;
};

type CardProps = {
  id: number;
  data: string;
  horario: string;
  hora_final: string;
  username: string;
  onExcluirReserva: (id: number) => void;
};

const CardReservas = ({ dadosReserva }: { dadosReserva: Reservas[] }) => {


  const excluirReserva = async (id: number) => {
    try {
      const response = await excluir_Reserva(id);
      if (response.success) {
        Alert.alert('Sucesso', 'Reserva excluída com sucesso!');
        router.push('TabNav/Ambiente');
      } else {
        console.error('Erro ao excluir reserva:', response.message);
        Alert.alert('Erro', 'Erro ao excluir reserva. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao excluir reserva:', error.message);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar excluir a reserva. Tente novamente mais tarde.');
    }
  };

  const CardReserva = ({ id, data, horario, hora_final, username, onExcluirReserva }: CardProps) => {
    return (
      <View key={id} style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardText}>Data: {data}</Text>
          <Text style={styles.cardText}>Hora: {horario} - {hora_final}</Text>
          <Text style={styles.cardText}>Responsável: {username}</Text>
          <Button onPress={() => onExcluirReserva(id)} title="Excluir"/>
        </View>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardContainer}>
        {dadosReserva.map((item) => (
          <CardReserva key={item.id} {...item} onExcluirReserva={excluirReserva} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    marginHorizontal: 4,
    marginVertical: 6,
    width: 400,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  cardText: {
    fontSize: 16,
    color: 'black',
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ff0000',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#ff0000',
    fontSize: 16,
  },
});

export default CardReservas;
