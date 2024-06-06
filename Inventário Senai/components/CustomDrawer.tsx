import {View, Text, StyleSheet, Image} from 'react-native'
import { DrawerItemList } from '@react-navigation/drawer'
import { FontAwesome5 } from '@expo/vector-icons';

export default function CustomDrawer(props: any) {

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <View style={styles.textContainer}>
                    <Text style={styles.nome}>Olá, Coordenador</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: 'white',
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 20,
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderColor: '#D9D9D9'
    },
    textContainer: {
        marginLeft: 20,

    },
    nome: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black'
    }
});