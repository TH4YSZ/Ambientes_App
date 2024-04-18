import { Stack } from "expo-router"
import { DrawerToggleButton } from "@react-navigation/drawer"
import { useColor } from "../../../../temas/Temas"

export default function layout(){
    const cores = useColor()
    return(
        <Stack>
            <Stack.Screen name="Inventarios" options={{
                headerLeft: () => (
                <DrawerToggleButton />
                ),
                headerSearchBarOptions:{
                    placeholder: "Pesquisar",
                },
                headerTitleAlign: 'center',
                headerTitle: 'Lista',
                headerTintColor: cores.headerTintColor,
                headerStyle: { backgroundColor: cores.bgPrimary }
            
            }}
            
            />
            
        </Stack>
    )
}