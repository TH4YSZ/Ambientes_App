import { View, StyleSheet } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

function BottomNav({icon, icon2}){
    return(
        <View style={styles.bottomNav}>
            <Ionicons style={styles.icon} name={icon} size={35} color={"#FFF"}/>
            <Ionicons name={icon2} size={35} color={"#FFF"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomNav:{
        backgroundColor: '#FF0000',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    icon:{
        paddingRight: 20
    }
})
export default BottomNav