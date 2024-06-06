import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputItemProps extends TextInputProps {
  label: string;
  descInicial: string
}

function InputItem({ label, descInicial, ...props }: InputItemProps) {
  const [hover, setHover] = useState('#5D5C5C');
  const [textColor, setTextColor] = useState('#595959');
  const [desc, setDesc] = useState(descInicial || '')

  const styles = StyleSheet.create({
    label: {
      fontSize: 14,
      color: 'black',
      fontWeight: '600',
    },
    input: {
      height: 60,
      marginTop: 15,
      marginBottom: 30,
      borderRadius: 5,
      padding: 10,
      backgroundColor: 'white',
      borderColor: hover,
      borderWidth: 1,
      color: textColor,
    },
    textlabel: {
      flexDirection: 'row',
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
          setHover("ff0000");
          setTextColor("ff0000");
        }}
        onBlur={() => {
          setHover('#5D5C5C');
          setTextColor('#000');
        }}
        placeholderTextColor={"#595959"}
        value={desc}
        onChangeText={text => setDesc(text)}
        {...props}
      />
    </View>
  );
}

export default InputItem;
