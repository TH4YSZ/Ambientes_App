import {View, Text} from 'react-native'
import { DrawerItemList } from '@react-navigation/drawer'

export default function CustomDrawer(props: any){
    return(
        <View>
            <DrawerItemList {...props}/>
        </View>
    )
}