import { View, Text, TextInput, StyleSheet } from 'react-native';

type InputProps = {
  label: string,
  placeholder: string,
  secureTextEntry: boolean,
  onChangeText: any,
  value: any
}

function Input({ label, placeholder, secureTextEntry, onChangeText, value }: InputProps) {
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

  },
  input: {
    height: 40,
    marginTop: 15,
    marginBottom:30,
    fontFamily: 'Inter',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#F5F5F5'
  },
});


export default Input;
