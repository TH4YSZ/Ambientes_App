import { StatusBar } from "expo-status-bar"
import { SafeAreaView, TextInput } from 'react-native'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { useState, useEffect } from "react";

const URL = 'http://192.168.0.130:8000/api/';

export default function Pesquisar() {
    const [isLoading,setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [fullData, setFullData] = useState([])
    const [searchQuery,setSearchQuery] = useState("");

    useEffect(() => {
        setIsLoading(true);
        fetchData(URL); 
    },[]);

    const fetchData = async(url) =>{
        try{
            const response = await fetch(url);
            const json = response.json();
            setData(json.results);

            console.log(json.results);
        } catch(error) {
            setError(error);
            console.log(error);
        }
    }

    const handleSearch = (query) => {
        setSearchQuery(query);
    }

    if( isLoading ){
        return (
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text>Erro na busca dos dados... Verifique sua conexão com a Internet</Text>
            </View>
        )
    }

    if( error ){
        return (
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size={'large'} color="#ff000"/>
            </View>
        )
    }

    return(
        <SafeAreaView style={{ flex:1,marginHorizontal:20 }}>
            <TextInput 
            placeholder="Pesquisar"
            clearButtonMode="always"
            style={styles.searchBox}
            autoCapitalize="none"
            autoCorrect={false}
            value={searchQuery}
            onChangeText={(query) => handleSearch(query)} 
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    searchBox: {
        paddingHorizontal: 20,
        paddingVertical:20,
        borderColor: "#ccc",
        borderWidth:1,
        borderRadius:8,
    },
});