import { View } from "react-native"
import TopNav from "../components/TopNavigator"

function AddItems(){
    return(
        <View>
            <TopNav icon="arrow-back" icon2="refresh-outline" text="Cadastro de itens"/>
        </View>
    )
}

export default AddItems