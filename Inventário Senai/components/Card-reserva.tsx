import React from 'react';
import { Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

type Reservas = {
  id: number;
  title: string;
  data: string;
  hora: string;
  local: string;
  responsavel: string;
};

type CardProps = {
  id: number;
  title: string;
  data: string;
  hora: string;
  local: string;
  responsavel: string;
};
const CardReservas = ({ dadosReserva }: { dadosReserva: Reservas[] }) => {
  const CardReserva = ({ id, title, data, hora, local, responsavel }: CardProps) => {
    return (
      <View key={id} style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardText}>Data:{data}</Text>
          <Text style={styles.cardText}>Hora:{hora}</Text>
          <Text style={styles.cardText}>Local:{local}</Text>
          <Text style={styles.cardText}>Responsavel:{responsavel}</Text>
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
    <ScrollView>
      <View>
        {dadosReserva.map((item) => (
          <CardReserva key={item.id} {...item}/>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    marginHorizontal: 4,
    marginVertical: 6,
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
