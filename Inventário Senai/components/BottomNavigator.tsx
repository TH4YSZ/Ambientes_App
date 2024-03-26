import { View, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native"
import Icon from "./Icon";
import { Link } from "expo-router";

interface BottomNavProps extends TouchableOpacityProps{
    icon: any;
    icon2: any;
    bgcolor: string;
    iconcolor: string;
    bordercolor: string
}

function BottomNav({icon, icon2, bgcolor, iconcolor, bordercolor, ...props}:BottomNavProps){
    return(
        <View style={{...styles.bottomNav, backgroundColor: bgcolor, borderColor: bordercolor}}>
            <Link href="/Scanner" asChild>
                <TouchableOpacity style={{ paddingRight: 20 }} {...props}>
                    <Icon name={icon} color={iconcolor} />
                </TouchableOpacity>
            </Link>
            <Link href="Inventarios" asChild>
                <TouchableOpacity>
                    <Icon name={icon2} color={iconcolor}/>
                </TouchableOpacity>
            </Link>
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