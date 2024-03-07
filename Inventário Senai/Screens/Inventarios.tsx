import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import TopNav from "../components/TopNavigator";
import Patrimonio from "../components/Patrimonio";
import { StatusBar } from "expo-status-bar";
import BottomNav from "../components/BottomNavigator";
import { AntDesign } from '@expo/vector-icons';

function Inventarios(){
    return(
        <ScrollView>
            <StatusBar style="light"/>
            <TopNav icon="menu" icon2="search" text='Lista' bgcolor="#fff" fontcolor="#666" iconcolor="#666"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <BottomNav icon="camera-reverse" icon2="menu"/>
            <TouchableOpacity style={styles.buttomplus}>
                <AntDesign name="pluscircle" size={50} color="#FF0000" />
            </TouchableOpacity>
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