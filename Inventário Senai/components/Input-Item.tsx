import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { useState } from 'react';

interface InputItemProps extends TextInputProps{
    label: string
}

function InputItem({label, ...props}:InputItemProps){
    const [hover, setHover] = useState('#5D5C5C')
    const styles = StyleSheet.create({
      label: {
        fontSize: 11,
        color: '#000',
        fontWeight: '600',
    
      },
      input: {
        height: 40,
        marginTop: 15,
        marginBottom:30,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff',
        borderColor: hover,
        borderWidth: 1
      },
    });


    return(
        <View>
            <Text style={styles.label}>{label} *</Text>
            <TextInput
                style={styles.input} onFocus={()=>{
                  setHover('#F39200')
                }} onBlur={()=>{
                  setHover('#5D5C5C')
                }}
                placeholderTextColor={'#595959'}
                {...props}
            />
        </View>







  )
}


  
  
  export default InputItem;