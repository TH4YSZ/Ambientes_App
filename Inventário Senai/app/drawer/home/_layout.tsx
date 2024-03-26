import { DrawerToggleButton } from "@react-navigation/drawer"
import {Tabs} from "expo-router"
import { ScreenStackHeaderSearchBarView } from "react-native-screens"
import { AntDesign } from '@expo/vector-icons';
export default function Layout(){
    return <Tabs screenOptions={{
        headerTitleAlign: "center",
    }}>

    <Tabs.Screen name="index" options={{title: "Scanner", headerStyle: {
        backgroundColor: "#ff0000"
    },
    headerTintColor: "white",
    headerLeft: ()=> (
        <DrawerToggleButton tintColor="#FFFFFF"/>
    ),

    headerRight: () => (
        <AntDesign name="reload1" size={24} color="#fff" style={{marginRight: 10}} />
    )
    }} />

    <Tabs.Screen name="Inventarios" options={{title: "Lista", headerStyle: {
            backgroundColor: "#fff"
        },
        headerTintColor: "#595959",
        headerLeft: ()=> (
            <DrawerToggleButton tintColor="#595959"/>
        ),
        headerRight: () => (
            <AntDesign name="search1" size={24} color="#595959" style={{marginRight: 10}} />
        )
        }} />

    </Tabs>
}