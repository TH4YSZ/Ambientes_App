import Ionicons from '@expo/vector-icons/Ionicons';

function Icon({name, color}){
    return(
        <>
            <Ionicons name={name} size={30} color={color}/>
        </>
    )
}

export default Icon