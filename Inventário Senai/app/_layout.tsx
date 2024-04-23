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



      <Stack.Screen name='TabNav' options={{
        headerShown: false
      }}/> 
      
      <Stack.Screen name='/TelasIniciais/Login' options={{
        headerShown: false
      }}/> 

    </Stack>
    
  )
}