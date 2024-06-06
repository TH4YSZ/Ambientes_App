import React from 'react';
import { Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

type Props = {
  title: string;
  data: string;
  hora: string;
  local: string;
  responsavel: string
};

const CardReserva: React.FC<Props> = ({ title, data, hora, local,responsavel }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardText}>{data}</Text>
        <Text style={styles.cardText}>{hora}</Text>
        <Text style={styles.cardText}>{local}</Text>
        <Text style={styles.cardText}>{responsavel}</Text>
        <TouchableOpacity style={styles.deleteButton}>
          <Link href="" asChild>
            <Text style={styles.deleteButtonText}>Excluir</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  cardTitle: {
    fontSize: 18,
    color: '#333',
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ff0000',
    alignItems: 'center'
  },
  deleteButtonText: {
    color: '#ff0000',
    fontSize: 16
  }
});

export default CardReserva;
