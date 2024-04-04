import { Tabs } from "expo-router";

export default function layout(){
    return(
        <Tabs>
            <Tabs.Screen name="Scanner" options={{
                headerTintColor: '#595959',
            }}/>
            <Tabs.Screen name="DrawerNav" options={{
                headerShown: false
            }}/>
        </Tabs>
    )
}