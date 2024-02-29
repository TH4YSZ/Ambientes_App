import { View, Text, StyleSheet } from "react-native";

type PatrimonioProps = {
    id: number,
    categoria: string
}

function Patrimonio({id, categoria}: PatrimonioProps){
    return(
        <View style={styles.patrimonio}>
            <Text style={styles.id}>{id}</Text>
            <Text style={styles.categoria}>{categoria}</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    id:{
        fontSize: 16,
        fontWeight: '600'
    },
    categoria:{
        fontSize: 14,
        color: '#595959'
    },
    patrimonio:{
        borderColor: 'F5F5F5',
        borderTopWidth: 1,
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%',
        height: 66
    }
})

export default Patrimonio