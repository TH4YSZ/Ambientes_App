import { View, StyleSheet, ScrollView, Image } from "react-native"


function Scanner(){
    return( 
        <ScrollView>
                <View style={styles.container}>
                    <Image style={{width: 350, height: 350}} source={require('@assets/Scanner.png')}/>
                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 120,
        paddingHorizontal: 20,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        }
})
export default Scanner