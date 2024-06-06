import { Tabs, Stack } from "expo-router";
import {MaterialIcons, FontAwesome} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function layout(){
    return(
        
        <Tabs screenOptions={{
            tabBarShowLabel: false, 
            tabBarStyle: { backgroundColor:"black"},
            tabBarIcon: ({color, size}) => (
                <FontAwesome name="list-alt" size={size} color={color} />
            ),
        }}>
        <Tabs.Screen name="Ambiente"
            options={{
                headerRight: () =>
                <Link href="TabNav/Ambiente" asChild>   
                    <Ionicons style={{paddingRight: 10}}name="refresh" size={24} color={'white'} />
                </Link>,
                headerTitleAlign: 'center',
                headerTitle: "Ambientes",
                headerTintColor: "black",
                headerStyle: { backgroundColor: "white"},
            }}
        />

        <Tabs.Screen name="DrawerNav"
            options={{
                headerShown: false,
                tabBarStyle:{
                    backgroundColor: 'black'},
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="format-list-bulleted" size={size} color={color} />
                ),
                tabBarInactiveTintColor: '#fff',
            }}
        />   
        </Tabs>

    )
}