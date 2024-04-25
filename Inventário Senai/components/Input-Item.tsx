import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { useColor } from '@temas/Temas';

interface InputItemProps extends TextInputProps {
  label: string;
  descInicial: string
}

function InputItem({ label, descInicial, ...props }: InputItemProps) {
  const cores = useColor()
  const [hover, setHover] = useState('#5D5C5C');
  const [textColor, setTextColor] = useState(cores.textColorSecundary);
  const [desc, setDesc] = useState(descInicial || '')

  const styles = StyleSheet.create({
    label: {
      fontSize: 14,
      color: cores.textColorPrimary,
      fontWeight: '600',
    },
    input: {
      height: 60,
      marginTop: 15,
      marginBottom: 30,
      borderRadius: 5,
      padding: 10,
      backgroundColor: cores.bgPrimary,
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
          setHover(cores.bgHover);
          setTextColor(cores.bgHover);
        }}
        onBlur={() => {
          setHover('#5D5C5C');
          setTextColor('#000');
        }}
        placeholderTextColor={cores.textColorSecundary}
        value={desc}
        onChangeText={text => setDesc(text)}
        {...props}
      />
    </View>
  );
}

export default InputItem;
