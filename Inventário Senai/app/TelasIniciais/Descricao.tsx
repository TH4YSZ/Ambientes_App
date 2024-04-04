import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from "react-native"
import TopNav from "@components/TopNavigator"
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from "expo-router";

function Desc(){
    return( 
        <ScrollView>
            <TopNav icon="arrow-back" icon2="refresh-outline" text="Descrição do item" bgcolor="#FF0000" iconcolor="#fff" fontcolor="#fff"/>
                <View style={styles.container}>
                    <Text style={styles.titulodesc}>N° do Inventário:</Text>
                    <Text style={styles.desc}>957689</Text>
                    <Text style={styles.titulodesc}>Descrição:</Text>
                    <Text style={styles.desc}>CADEIRA GIRATÓRIA</Text>
                    <Text style={styles.titulodesc}>Local:</Text>
                    <Text style={styles.desc}>SALA C13</Text>
                    <Text style={styles.titulodesc}>Responsável:</Text>
                    <Text style={styles.desc}>CARLOS</Text>
                    <Text style={styles.titulodesc}>Data de registro:</Text>
                    <Text style={styles.desc}>05/03/2024</Text>
                </View>
                <TouchableOpacity style={styles.buttomedit}>
                    <Link href="Editar">
                        <View style={styles.editIconContainer}>
                            <MaterialIcons name="edit" size={24} color="#fff" />
                        </View>
                    </Link>  
                </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 60,
        paddingHorizontal: 20,
        height: '100%',
    },
    titulodesc: {
        fontWeight: '600',
        fontSize: 14
    },
    desc: {
        fontSize: 18,
        color: '#595959',
        paddingTop: 10,
        paddingBottom: 20
    },
    buttomedit: {
        borderRadius: 100,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 130,
        right: 16,
        backgroundColor: '#FF0000',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    editIconContainer: {
        borderRadius: 100,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF0000'
    }
})

export default Desc