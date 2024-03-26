import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import TopNav from "../../../components/TopNavigator";
import Patrimonio from "../../../components/Patrimonio";
import BottomNav from "../../../components/BottomNavigator";
import { AntDesign } from '@expo/vector-icons';
import { Link } from "expo-router";

function Inventarios(){
    return(
        <ScrollView>
            {/* <TopNav icon="menu" icon2="search" text='Lista' bgcolor="#fff" fontcolor="#595959" iconcolor="#666"/> */}
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
            {/* <BottomNav icon="camera-reverse" icon2="menu" iconcolor="#fff" bgcolor="#FF0000" bordercolor='#FF0000'/> */}
            
            <Link href="/Cad-Itens" asChild>
                <TouchableOpacity style={styles.buttomplus}>
                    <AntDesign name="pluscircle" size={50} color="#FF0000" />
                </TouchableOpacity>
            </Link>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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