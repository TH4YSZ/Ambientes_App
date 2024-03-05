import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps{
  label: string
}

function Input({label, ...props}: InputProps) {
  return (
    <View>
      <Text style={styles.label}>{label}:</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={'#595959'}
        {...props}
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
