import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputItemProps extends TextInputProps{
    label: string
  }
function InputItem({label, ...props}:InputItemProps){
    return(
        <View>
            <Text style={styles.label}>{label} *</Text>
            <TextInput
                style={styles.input}
                {...props}
            />
        </View>







    )
}

const styles = StyleSheet.create({
    label: {
      fontSize: 11,
      color: '#000',
      fontWeight: '600',
      position: 'absolute',
  
    },
    input: {
      height: 40,
      marginTop: 15,
      marginBottom:30,
      borderRadius: 5,
      padding: 10,
      backgroundColor: '#fff',
      borderColor: '#000',
      borderWidth: 1
    },
  });
  
  
  export default InputItem;