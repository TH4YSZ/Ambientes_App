import { View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps  } from "react-native";
import Icon from "./Icon";
import { Link } from "expo-router";

interface TopNavProps extends TouchableOpacityProps {
    icon: any;
    icon2: any;
    text: string;
    bgcolor: string;
    fontcolor: string;
    iconcolor: string;
}

function TopNav({icon, icon2, text, bgcolor, fontcolor, iconcolor, ...props}:TopNavProps){
    return(
        <View style={{...styles.nav, backgroundColor: bgcolor}}>
            <Link href="/Inventarios" asChild>
                <TouchableOpacity {...props}>
                    <Icon name={icon} color={iconcolor}/>
                </TouchableOpacity>
            </Link>
           <Text style={{color: fontcolor, fontWeight: '600', fontSize: 16}}>{text}</Text>
           <Icon name={icon2} color={iconcolor}/>
        </View>
    )
}

const styles = StyleSheet.create({
    nav:{
        flexDirection: 'row',
        width: '100%',
        borderRadius: 5,
        justifyContent: 'space-between',
        height: 80,
        paddingHorizontal: 15,
        alignItems: 'center',
    },
})
export default TopNav