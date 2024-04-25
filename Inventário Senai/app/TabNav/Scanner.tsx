import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import { Camera, CameraType } from "expo-camera";
import { useColor } from "@temas/Temas";


const Scanner = () => {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [iconOpacity, setIconOpacity] = useState(1); 
    const cores = useColor()

    if (!permission)
        return null;

    if (!permission.granted)
        return null;


    return(
        <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
                <View style={styles.qrContainer}>
                    <TouchableOpacity>
                        <MaterialIcons name="qr-code-scanner" size={300} color={cores.scannerColor} style={{ opacity: iconOpacity }} />
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    camera: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 240,
    },
    qrContainer: {
        alignItems: 'center',
        opacity: 0.2
    }
});

export default Scanner;