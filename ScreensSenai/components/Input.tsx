import { View, Text, TextInput, StyleSheet } from 'react-native';


function Input({ label, placeholder, secureTextEntry, onChangeText, value }) {
  return (
    <View>
      <Text style={styles.label}>{label}:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#242323',
    paddingTop: 45,
  },
  input: {
    height: 40,
    marginBottom: 20,
    fontFamily: 'Roboto',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
});


export default Input;
