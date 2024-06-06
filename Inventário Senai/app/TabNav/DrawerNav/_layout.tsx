import CustomDrawer from '@components/CustomDrawer';
import { Drawer } from 'expo-router/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
                    drawerLabelStyle: { color: "black" },
                    drawerActiveBackgroundColor: "#FFCECE",
                    drawerIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name="home" size={24} color="black" />
                    ),
                    headerTitle: "Home",
                    headerTitleAlign: 'center'
                }}
            />

            <Drawer.Screen
                name="All Reservas"
                options={{
                    headerShown: true,
                    drawerLabelStyle: { color: "black" },
                    drawerActiveBackgroundColor: "#FFCECE",
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
                    drawerLabelStyle: { color: "black" },
                    drawerActiveBackgroundColor: "#FFCECE",
                    drawerIcon: () => (
                        <MaterialCommunityIcons name="home-plus" size={24} color="black" />
                    ),
                    headerTitle: "Cadastro de Ambiente",
                    headerTitleAlign: 'center'
                }}
            />

            <Drawer.Screen
                name="Cad Usuário"
                options={{
                    headerShown: true,
                    drawerLabelStyle: { color: "black" },
                    drawerActiveBackgroundColor: "#FFCECE",
                    drawerIcon: () => (
                        <MaterialCommunityIcons name="account-multiple-plus" size={24} color="black" />
                    ),
                    headerTitle: "Cadastro de Usuário",
                    headerTitleAlign: 'center'
                }}
            />

            <Drawer.Screen
                name="Sair"
                options={{
                    headerShown: false,
                    drawerLabelStyle: { color: "black" },
                    drawerActiveBackgroundColor: "#FFCECE",
                    drawerIcon: () => (
                        <MaterialCommunityIcons name="exit-to-app" size={24} color="black" />
                    ),
                    headerTitle: "Sair",
                    headerTitleAlign: 'center'
                }}
            />

        </Drawer>
    );
}
