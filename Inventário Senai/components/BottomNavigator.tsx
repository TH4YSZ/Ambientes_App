import { View, StyleSheet } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

function BottomNav({icon, icon2, bgcolor, iconcolor, bordercolor}){
    return(
        <View style={{...styles.bottomNav, backgroundColor: bgcolor, borderColor: bordercolor}}>
            <Ionicons style={{paddingRight: 20}} name={icon} size={35} color={iconcolor}/>
            <Ionicons name={icon2} size={35} color={iconcolor}/>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomNav:{
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderTopWidth: 1
    },
})
export default BottomNav