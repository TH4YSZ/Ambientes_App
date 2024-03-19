import Cadastro from './Screens/Cadastro';
import Login from './Screens/Login';
import RecSenha from './Screens/Rec-Senha';
import Inventarios from './Screens/Inventarios';
import CadItens from './Screens/Cad-Itens';
import Desc from './Screens/Descricao';
import Scanner from './Screens/Scanner';
import Editar from './Screens/Editar';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


function App(){
   return(
      <View>
         <StatusBar style="light"/>
         <Editar/>
      </View>
      
   )
}

export default App