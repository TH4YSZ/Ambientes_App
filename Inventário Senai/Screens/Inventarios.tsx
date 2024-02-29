import { View, Text, StyleSheet } from "react-native";
import Nav from "../components/Nav";
import Patrimonio from "../components/Patrimonio";
import { StatusBar } from "expo-status-bar";

function Inventarios(){
    return(
        <View>
            <StatusBar style="light"/>
            <Nav icon="menu" icon2="search"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/><Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
        
        </View>
    )
}
const styles = StyleSheet.create({

})
export default Inventarios