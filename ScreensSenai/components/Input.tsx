import { View, Text, TextInput } from 'react-native';


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

const styles = {
  label: {
    fontSize: 16,
    color: '#242323',
    paddingBottom: 10,
    paddingTop: 25,
  },
  input: {
    height: 40,
    marginBottom: 10,
    fontFamily: 'Roboto',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
};


export default Input;
