import { Link } from "expo-router";
import { LinkProps } from "next/link";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface LinkBtnProps extends LinkProps {
    title: string;
    onPress?: () => void; // Add optional onPress prop
}

export default function LinkBtn({ title, onPress, ...props }: LinkBtnProps) {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: 'black',
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
        },
        title: {
            color: "#FFFFFF",
            textAlign: 'center',
            fontSize: 16,
        }
    });

    return (
        <Link {...props} asChild>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </Link>
    );
}
