import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker, { DateChangedCallback } from "react-native-calendar-picker";

interface CalendarioProps {}

const Calendario: React.FC<CalendarioProps> = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);

  const onDateChange: DateChangedCallback = (date) => {
    setSelectedStartDate(date);
  };

  const startDate = selectedStartDate ? selectedStartDate.toString() : "";

  return (
    <View style={styles.container}>
      <CalendarPicker onDateChange={onDateChange} />
      <View>
        <Text>Data selecionada: {startDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 100,
  },
});

export default Calendario;
