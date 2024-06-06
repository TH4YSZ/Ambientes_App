import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  label: string;
}

function Input({ label, ...props }: InputProps) {
  
  const [hover, setHover] = useState('black')
  const styles = StyleSheet.create({
    label: {
      fontSize: 16,
      color: 'black',
    },
    input: {
      height: 40,
      marginTop: 15,
      marginBottom: 30,
      padding: 10,
      backgroundColor: '#f0f0f0',
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
          setHover('#a10000')
        }} onBlur={()=>{
          setHover('black')
        }}
        placeholderTextColor={'#bdbdbd'}
        {...props}
      />
    </View>
  );
}

export default Input;
