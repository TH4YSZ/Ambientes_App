import { View, StyleSheet, ScrollView, Image } from "react-native"
import TopNav from "../../../components/TopNavigator"
import BottomNav from "../../../components/BottomNavigator"
import { StatusBar } from "expo-status-bar"

function Scanner(){
    return( 
        <ScrollView>
            {/* <TopNav icon="arrow-back" icon2="refresh-outline" text="Scanner" bgcolor="#FF0000" iconcolor="#fff" fontcolor="#fff"/> */}
                <View style={styles.container}>
                    <Image style={{width: 350, height: 350}} source={require('../../../assets/Scanner.png')}/>
                </View>
                {/* <BottomNav icon="camera-reverse" icon2="menu" iconcolor="#595959" bgcolor="#fff" bordercolor="CBCBCB"/> */}
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 60,
        paddingHorizontal: 20,
        height: 800,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Scanner