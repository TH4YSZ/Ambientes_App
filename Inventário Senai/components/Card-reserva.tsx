import React from 'react';
import { Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

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
 
};
const CardReservas = ({ dadosReserva }: { dadosReserva: Reservas[] }) => {
  const CardReserva = ({ id, data, horario, hora_final, username }: CardProps) => {
    return (
      <View key={id} style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardText}>Data: {data}</Text>
          <Text style={styles.cardText}>Hora: {horario} - {hora_final}</Text>
          <Text style={styles.cardText}>Responsavel: {username}</Text>
          <TouchableOpacity style={styles.deleteButton}>
            <Link href="" asChild>
              <Text style={styles.deleteButtonText}>Excluir</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardContainer}>
        {dadosReserva.map((item) => (
          <CardReserva key={item.id} {...item}/>
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
    color: 'lack',
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
