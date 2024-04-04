import {Drawer} from 'expo-router/drawer'
import { View } from 'react-native'


export default function layout(){
    return(
        <Drawer>
            <Drawer.Screen name='Home' options={{
                headerShown: false
            }}/>
        </Drawer>
    )
}