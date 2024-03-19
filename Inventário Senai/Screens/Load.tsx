import { View, StyleSheet, Image, ActivityIndicator} from "react-native"

function Load(){
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/LogoSenai.png')}/>
            <View style={[styles.indicator, styles.horizontal]}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height:'100%',
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        width: 181,
        height: 39,
        marginHorizontal: 73
    },
    indicator: {
        flex:  1,
        justifyContent: 'center',
      },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
      },

})

export default Load