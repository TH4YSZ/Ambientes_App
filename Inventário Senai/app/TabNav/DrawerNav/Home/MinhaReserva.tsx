import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import CardReserva from '@components/Card-reserva';

const MinhaReserva: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <CardReserva
        title="Reserva 01"
        data="Data: 01/01/2021"
        hora="Hora: 10:00"
        local="Local: Laboratório 01"
        responsavel='Carlos'
      />

      <CardReserva
        title="Reserva 02"
        data="Data: 01/01/2021"
        hora="Hora: 10:00"
        local="Local: Laboratório 02"
        responsavel='Thigas'
      />

      <CardReserva
        title="Reserva 03"
        data="Data: 01/01/2021"
        hora="Hora: 10:00"
        local="Local: Laboratório 03"
        responsavel='Thiegue'
      />

      <CardReserva
            title="Reserva 04"
            data="Data: 01/01/2021"
            hora="Hora: 10:00"
            local="Local: Laboratório 04"
            responsavel='Yuri'
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
});

export default MinhaReserva;
