import CustomDrawer from '@components/CustomDrawer'
import {Drawer} from 'expo-router/drawer'
import { View } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'


export default function Layout() {
    return (
        <Drawer drawerContent={(...props) => (
            CustomDrawer(...props)
        )}>
            <Drawer.Screen name='Home'
                options={{
                    headerShown: false,
                    drawerIcon: ({size, color}) => (
                        <MaterialIcons name='home' size={size} color={color} />
                    ) 
                }}
            />
        </Drawer>
    );
}