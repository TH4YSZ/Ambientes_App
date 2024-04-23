import CustomDrawer from '@components/CustomDrawer'
import { Drawer } from 'expo-router/drawer'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Layout() {
    return (
        <View>
            <Drawer 
                drawerContent={(...props) => CustomDrawer(...props)} 
            >
                <Drawer.Screen 
                    name='Home' 
                    options={{
                        headerShown: false,
                        drawerIcon: () => (
                            <Ionicons name="exit" size={24} color={'#D9D9D9'} />
                        )
                    }}                 
                />
            </Drawer>
        </View>
    );
}
