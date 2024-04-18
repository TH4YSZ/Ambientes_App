import { View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Link } from "expo-router";
import { useColor } from "../temas/Temas";

interface PatrimonioProps extends TouchableOpacityProps {
    id2: number;
    categoria: string
}

function Patrimonio({id2, categoria, ...props}: PatrimonioProps){
    return(
        <View style={styles.patrimonio}>
            <Link href="/TelasIniciais/Descricao" asChild>
                <TouchableOpacity {...props}>
                    <Text style={styles.id}>{id2}</Text>
                    <Text style={styles.categoria}>{categoria}</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
    
}

const cores = useColor()
const styles = StyleSheet.create({
    id:{
        fontSize: 16,
        fontWeight: '600',
        color: cores.textColorPrimary
    },
    categoria:{
        fontSize: 14,
        color: cores.textColorSecundary
    },
    patrimonio:{
        borderColor: cores.inputBgPrimary,
        borderTopWidth: 1,
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%',
        height: 66,
        backgroundColor: cores.bgPrimary
    }
})

export default Patrimonio