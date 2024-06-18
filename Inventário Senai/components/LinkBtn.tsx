import { Link } from "expo-router";
import { LinkProps } from "next/link";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface LinkBtnProps extends LinkProps {
    title: string;
    color?: string; // Make color optional
    onPress?: () => void; // Add optional onPress prop
}

export default function LinkBtn({ title, color = "#007BFF", onPress, ...props }: LinkBtnProps) {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: color,
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            marginVertical: 10, // Add margin for better spacing
        },
        title: {
            color: "#FFFFFF",
            textAlign: 'center',
            fontSize: 16,
        },
    });

    return (
        <Link {...props} asChild>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </Link>
    );
}
