import { Stack } from "expo-router";


export default function layout(){

  return(
    <Stack>
      <Stack.Screen name='index'
        options={{
          headerShown: false
      }}/> 

      <Stack.Screen name='TabNav' 
        options={{
          headerShown: false
      }}/> 
      
      
      <Stack.Screen name='TelasIniciais/Login'
        options={{
          headerShown: false
      }}/> 

    </Stack>
    
  )
}