import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Patrimonio from "@components/Patrimonio";
import { AntDesign } from '@expo/vector-icons';
import { Link } from "expo-router";
import { useColor } from "@temas/Temas";

function Inventarios(){
    return(
        <ScrollView style={styles.container}>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            
            
            <Link href="TabNav/DrawerNav/Home/Cad-Itens" asChild>
                <TouchableOpacity style={styles.buttomplus}>
                    <AntDesign name="pluscircle" size={50} color="#FF0000" />
                </TouchableOpacity>
            </Link>
            
        </ScrollView>
    )
}

const cores = useColor()
const styles = StyleSheet.create({
    container:{
        backgroundColor: cores.bgPrimary,
        flex: 1
    },
    buttomplus:{
        borderRadius: 100,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 130,
        right: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
})
export default Inventarios