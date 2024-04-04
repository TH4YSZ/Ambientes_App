import { View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Link } from "expo-router";


interface PatrimonioProps extends TouchableOpacityProps {
    id2: number;
    categoria: string
}

function Patrimonio({id2, categoria, ...props}: PatrimonioProps){
    return(
        <View style={styles.patrimonio}>
            <Link href="/Descricao" asChild>
                <TouchableOpacity {...props}>
                    <Text style={styles.id}>{id2}</Text>
                    <Text style={styles.categoria}>{categoria}</Text>
                </TouchableOpacity>
            </Link>
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
        borderColor: '#F5F5F5',
        borderTopWidth: 1,
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%',
        height: 66,
        backgroundColor: '#fff'
    }
})

export default Patrimonio