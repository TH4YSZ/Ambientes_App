import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

type Props = {
  title: string;
  text: string;
  data: string;
  hora: string;
  local: string;
};

const CardReserva: React.FC<Props> = ({ title, text, data, hora, local }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardText}>{text}</Text>
        <Text style={styles.cardText}>{data}</Text>
        <Text style={styles.cardText}>{hora}</Text>
        <Text style={styles.cardText}>{local}</Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Remover</Text>
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
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CardReserva;
