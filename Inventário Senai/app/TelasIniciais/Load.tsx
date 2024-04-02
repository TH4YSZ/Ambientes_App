import { View, StyleSheet, Image, ActivityIndicator} from "react-native"

function Load(){
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('@assets/LogoSenai.png')}/>
            <View style={[styles.indicator, styles.horizontal]}>
                <ActivityIndicator size={60} color="#fff" />
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height:'100%',
        backgroundColor: '#FF0000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        width: 181,
        height: 39,
    },
    indicator: {
        justifyContent: 'center',
        marginTop: 60
      },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
      },

})

export default Load