import { Tabs } from "expo-router";
import {MaterialIcons} from '@expo/vector-icons';

export default function layout(){
    return(
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            tabBarIcon: ({color, size}) => (
                <MaterialIcons name="camera-alt" size={size} color={color} />
            ),
        }}>
            <Tabs.Screen name="Scanner" options={{
                headerTintColor: '#595959',
            }}/>
            <Tabs.Screen name="DrawerNav" options={{
                headerShown: false,
                tabBarStyle:{
                    backgroundColor: '#FF0000'
                },
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="format-list-bulleted" size={size} color={color} />
                ),
                tabBarInactiveTintColor: '#fff',
                }}/>
        </Tabs>
    )
}