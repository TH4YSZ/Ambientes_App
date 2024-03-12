import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputItemProps extends TextInputProps {
  label: string;
}

function InputItem({ label, ...props }: InputItemProps) {
  const [hover, setHover] = useState('#5D5C5C');
  const [textColor, setTextColor] = useState('#000');

  const styles = StyleSheet.create({
    label: {
      fontSize: 14,
      color: textColor,
      fontWeight: '600',
    },
    input: {
      height: 40,
      marginTop: 15,
      marginBottom: 30,
      borderRadius: 5,
      padding: 10,
      backgroundColor: '#fff',
      borderColor: hover,
      borderWidth: 1,
      color: textColor,
    },
    textlabel: {
      flexDirection: 'row',
      backgroundColor: '#fff',
    },
  });

  return (
    <View>
      <View style={styles.textlabel}>
        <Text style={styles.label}>{label}</Text>
        <Text style={{ color: '#FF0000' }}>*</Text>
      </View>

      <TextInput
        style={styles.input}
        onFocus={() => {
          setHover('#F39200');
          setTextColor('#F39200');
        }}
        onBlur={() => {
          setHover('#5D5C5C');
          setTextColor('#000');
        }}
        placeholderTextColor={'#595959'}
        {...props}
      />
    </View>
  );
}

export default InputItem;
