import CustomDrawer from '@components/CustomDrawer';
import { Drawer } from 'expo-router/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Layout() {
    return (
        <Drawer
            screenOptions={{
                drawerInactiveTintColor: "black"
            }}
            drawerContent={(...props) => (
                CustomDrawer(...props)
            )}
        >
            <Drawer.Screen
                name="Home"
                options={{
                    headerShown: false,
                    drawerIcon: ({ size, color }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    ),
                    headerTitle: "Home",
                    headerTitleAlign: 'center'
                }}
            />

            <Drawer.Screen
                name="All Reservas"
                options={{
                    headerShown: true,
                    drawerIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name="account" size={size} color={color} />
                    ),
                    headerTitle: "Todas as Reservas",
                    headerTitleAlign: 'center'
                }}
            />

            <Drawer.Screen
                name="Cad Ambiente"
                options={{
                    headerShown: true,
                    drawerIcon: ({ size, color }) => (
                        <FontAwesome6 name="house-circle-check" size={size} color="black" />
                    ),
                    headerTitle: "Cadastro de Ambiente",
                    headerTitleAlign: 'center'
                }}
            />

            <Drawer.Screen
                name="Cad Usuário"
                options={{
                    headerShown: true,
                    drawerIcon: ({ size, color }) => (
                        <FontAwesome name="user-plus" size={size} color="black" />
                    ),
                    headerTitle: "Cadastro de Usuário",
                    headerTitleAlign: 'center'
                }}
            />

            <Drawer.Screen
                name="Sair"
                options={{
                    headerShown: false,
                    drawerIcon: ({ size, color }) => (
                        <Ionicons name="exit" size={size} color={color} />
                    ),
                    headerTitle: "Sair",
                    headerTitleAlign: 'center'
                }}
            />

        </Drawer>
    );
}
