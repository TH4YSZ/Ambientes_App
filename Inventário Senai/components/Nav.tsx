import { View, StyleSheet  } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';



function Nav({icon, icon2}){
    return(
        <View style={styles.icons}>
           <Ionicons name={icon} size={30} color={"#666666"}/> 
           <Ionicons name={icon2} size={30} color={"#666666"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    icons:{
        flexDirection: 'row',
        width: '100%',
        borderRadius: 5,
        justifyContent: 'space-between',
        paddingVertical: 30,
        paddingHorizontal: 15,
        backgroundColor: "#fff"
    }
})
export default Nav