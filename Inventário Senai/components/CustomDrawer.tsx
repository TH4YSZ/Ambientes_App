import { View, Text, Image, StyleSheet } from 'react-native'
import { DrawerItemList } from '@react-navigation/drawer'
import { useColor } from '@temas/Temas'

export default function CustomDrawer(props: any) {
    const cores = useColor();

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Image source={require('@assets/perfil.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
                <View style={styles.textContainer}>
                    <Text style={styles.nome}>Flávio Josefo</Text>
                    <Text style={styles.email}>flavio@email.com</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </View>
    )
}
const cores = useColor()
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: cores.bgPrimary,
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
    email: {
        color: cores.textColorSecundary
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 16,
        color: cores.textColorPrimary
    },
});
