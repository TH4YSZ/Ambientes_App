import { View, Text, StyleSheet } from "react-native";

type PatrimonioProps = {
    number: number,
    categoria: string
}

function Patrimonio({number, categoria}: PatrimonioProps){
    return(
        <View>
            <Text>{number}</Text>
            <Text>{categoria}</Text>
        </View>
    )
}