import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { useColor } from '@temas/Temas';

interface InputProps extends TextInputProps {
  label: string;
}

function Input({ label, ...props }: InputProps) {
  const cores = useColor()
  
  const [hover, setHover] = useState(cores.inputBgPrimary)
  const styles = StyleSheet.create({
    label: {
      fontSize: 16,
      color: cores.textColorPrimary,
    },
    input: {
      height: 40,
      marginTop: 15,
      marginBottom: 30,
      padding: 10,
      backgroundColor: cores.inputBgPrimary,
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
          setHover(cores.bgHover)
        }} onBlur={()=>{
          setHover(cores.inputBgPrimary)
        }}
        placeholderTextColor={cores.inputTextPrimary}
        {...props}
      />
    </View>
  );
}

export default Input;
