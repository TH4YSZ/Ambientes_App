import { Stack } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { useColor } from "../temas/Temas";


export default function layout(){
  const cores = useColor()

  return(
    <Stack>
      <Stack.Screen name='index' options={{
        headerShown: false
      }}/> 
      <Stack.Screen name='TelasIniciais/Rec-Senha' options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: "#fff"
      }}/> 

      <Stack.Screen name='TelasIniciais/Cadastro' options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: "#fff"
      }}/>

      <Stack.Screen name="TelasIniciais/Cad-Itens" options={{
        
        headerRight: () => (
          <Ionicons name="add-circle-outline" size={24} color='white' />
        ),
        headerTitle: "Cadastro de itens",
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: cores.bgSecundary },
        headerTitleAlign: 'center'
      }}/>

      <Stack.Screen name="TelasIniciais/Descricao" options={{
        
        headerRight: () => (
          <Ionicons name="refresh" size={24} color='white' />
        ),
        headerTitle: "Descrição do item",
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: cores.bgSecundary },
        headerTitleAlign: 'center'
      }}/>

      <Stack.Screen name='TabNav' options={{
        headerShown: false
      }}/> 
      
      <Stack.Screen name='/TelasIniciais/Login' options={{
        headerShown: false
      }}/> 

      <Stack.Screen name='TelasIniciais/Editar' options={{
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