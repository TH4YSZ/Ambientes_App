import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  label: string;
}

function Input({ label, ...props }: InputProps) {
  const [hover, setHover] = useState("#F5F5F5")
  const styles = StyleSheet.create({
    label: {
      fontSize: 16,
      color: '#242323',
    },
    input: {
      height: 40,
      marginTop: 15,
      marginBottom: 30,
      fontFamily: 'Inter', 
      padding: 10,
      backgroundColor: '#F5F5F5',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: hover,
    },
  });

  return (
    <View>
      <Text style={styles.label}>{label}:</Text>
      <TextInput
        style={styles.input} onFocus={()=>{
          setHover('#F39200')
        }} onBlur={()=>{
          setHover('#F5F5F5')
        }}
        placeholderTextColor={'#595959'}
        {...props}
      />
    </View>
  );
}

export default Input;
