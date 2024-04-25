import { Tabs } from "expo-router";
import {MaterialIcons} from '@expo/vector-icons';
import { useColor } from "@temas/Temas";
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";

export default function layout(){
    const cores = useColor()
    return(
        
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: cores.bgPrimary },
            tabBarIcon: ({color, size}) => (
                <MaterialIcons name="camera-alt" size={size} color={color} />
            ),
        }}>
        <Tabs.Screen name="Scanner"
            options={{
                headerRight: () =>
                <Link href="TabNav/Scanner" asChild>   
                    <Ionicons style={{paddingRight: 10}}name="refresh" size={24} color={'white'} />
                </Link>,
                headerTitle: "Scanner",
                headerTintColor: "#fff",
                headerStyle: { backgroundColor: cores.bgSecundary },
            }}
        />

        <Tabs.Screen name="DrawerNav"
            options={{
                headerShown: false,
                tabBarStyle:{
                    backgroundColor: '#FF0000'},
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="format-list-bulleted" size={size} color={color} />
                ),
                tabBarInactiveTintColor: '#fff',
            }}
        />   
        </Tabs>
    )
}