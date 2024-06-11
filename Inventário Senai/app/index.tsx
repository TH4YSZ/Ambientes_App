import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./TelasIniciais/Login";
import Ambientes from "./TabNav/Ambiente";

const Stack = createStackNavigator();

export default function Index() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Ambientes" component={Ambientes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
