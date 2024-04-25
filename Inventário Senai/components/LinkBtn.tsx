import { Link } from "expo-router";
import { LinkProps } from "next/link";
import { Text, TouchableOpacity, StyleSheet} from "react-native";
import { useColor } from "@temas/Temas";


interface LinkBtnProps extends LinkProps{
    title: string
}

export default function LinkBtn({title, ...props}: LinkBtnProps){
    const cores = useColor()

    const styles = StyleSheet.create({
        button: {
            backgroundColor: cores.bgButtom,
            padding: 10,
            borderRadius: 5
        },

        title: {
            color: "#FFFFFF",
            textAlign: 'center',
            fontSize: 16
        }
    })

    return(

        <Link {...props} asChild>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </Link>
    )
}
