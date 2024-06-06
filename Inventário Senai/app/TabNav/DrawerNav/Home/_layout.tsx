import React from "react";
import { Stack } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function Layout() {    
    return (
        <Stack>

            <Stack.Screen name="MinhaReserva" 
                options={{
                    headerLeft: () => <DrawerToggleButton tintColor = "black" />,
                    headerTitleAlign: 'center',
                    headerTitle: 'Minhas Reservas',
                    headerStyle: { backgroundColor: "white" }
                }}
            />

            <Stack.Screen name="ReservaAmbiente" 
                options={{
        
                    headerTitleAlign: 'center',
                    headerTitle: 'Reservar Ambiente',
                    headerStyle: { backgroundColor: "white" }
                }}
            />


        </Stack>
    );
}
