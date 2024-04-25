import React from "react";
import { Link, Stack } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { useColor } from "@temas/Temas";
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
    const cores = useColor();
    
    return (
        <Stack>
            <Stack.Screen name="Inventarios" 
                options={{
                    headerLeft: () => <DrawerToggleButton tintColor={cores.headerTintColor} />,
                    headerSearchBarOptions: { placeholder: "Pesquisar",
                        headerIconColor: cores.headerTintColor
                     },
                    headerTitleAlign: 'center',
                    headerTitle: 'Lista',
                    headerTintColor: cores.headerTintColor,
                    headerStyle: { backgroundColor: cores.bgPrimary }
                }}
            />
            <Stack.Screen name="Cad-Itens" 
                options={{
                    headerRight: () => 
                        <Link href="TabNav/DrawerNav/Home/Inventarios" asChild>
                            <Ionicons name="add-circle-outline" size={24} color='white' />
                        </Link>
                    ,
                    headerTitle: "Cadastro de itens",
                    headerTintColor: "#fff",
                    headerStyle: { backgroundColor: cores.bgSecundary },
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen name="Descricao" 
                options={{
                    headerRight: () =>
                        <Link href="TabNav/DrawerNav/Home/Descricao" asChild>
                            <Ionicons name="refresh" size={24} color={'white'} />
                        </Link>,
                    headerTitle: "Descrição do item",
                    headerTintColor: "#fff",
                    headerStyle: { backgroundColor: cores.bgSecundary },
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen name='Editar' 
                options={{
                    headerRight: () =>
                        <Link href="TabNav/DrawerNav/Home/Descricao" asChild>
                            <Ionicons name="checkmark-circle" size={24} color="white" />
                        </Link>,
                    headerTitle: "Editar",
                    headerTintColor: "#fff",
                    headerStyle: { backgroundColor: cores.bgSecundary },
                    headerTitleAlign: 'center'
                }}
            />
        </Stack>
    );
}
