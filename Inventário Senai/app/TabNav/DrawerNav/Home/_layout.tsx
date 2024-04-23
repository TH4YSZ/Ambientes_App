import { Stack } from "expo-router"
import { DrawerToggleButton } from "@react-navigation/drawer"
import { useColor } from "@temas/Temas"
import { Ionicons } from '@expo/vector-icons';

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
                headerStyle: { backgroundColor: cores.bgPrimary,  }
            
            }}/>

            <Stack.Screen name="Cad-Itens" options={{
        
                headerRight: () => (
                <Ionicons name="add-circle-outline" size={24} color='white' />
                ),
                headerTitle: "Cadastro de itens",
                headerTintColor: "#fff",
                headerStyle: { backgroundColor: cores.bgSecundary },
                headerTitleAlign: 'center'
            }}/>

            <Stack.Screen name="Descricao" options={{
                    
                headerRight: () => (
                <Ionicons name="refresh" size={24} color={'white'} />
                ),
                headerTitle: "Descrição do item",
                headerTintColor: "#fff",
                headerStyle: { backgroundColor: cores.bgSecundary },
                headerTitleAlign: 'center'
            }}/>

            <Stack.Screen name='Editar' options={{
                headerRight: () => (
                <Ionicons name="checkmark-circle" size={24} color="white" />
                ),
                headerTitle: "Editar",
                headerTintColor: "#fff",
                headerStyle: { backgroundColor: cores.bgSecundary },
                headerTitleAlign: 'center'
            }}/>
            
            
        </Stack>
    )
}