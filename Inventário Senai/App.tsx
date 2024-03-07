import Cadastro from './Screens/Cadastro';
import Login from './Screens/Login';
import RecSenha from './Screens/Rec-Senha';
import Inventarios from './Screens/Inventarios';
import CadItens from './Screens/Cad-Itens';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


function App(){
   return(
      <View>
         <StatusBar style="light"/>
         <Inventarios/>
      </View>
      
   )
}

export default App