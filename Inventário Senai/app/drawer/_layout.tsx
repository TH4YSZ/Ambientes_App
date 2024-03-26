import {Drawer} from 'expo-router/drawer'

export default function drawerLayout(){
    return <Drawer screenOptions={{
        headerShown: false
    }}>
        <Drawer.Screen name="home"/>
    </Drawer>
}