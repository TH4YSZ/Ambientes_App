import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Camera, CameraType } from "expo-camera";
import { useColor } from "@temas/Temas";


const Scanner = () => {
    const [isCameraActive, setIsCameraActive] = useState(false);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const cores = useColor()

    if (!permission)
        return null;

    if (!permission.granted)
        return null;

    return (
        <View style={styles.container}>
            {isCameraActive ? (
                <Camera style={styles.camera} type={CameraType.back}>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.button} onPress={() => setIsCameraActive(false)}>
                            <MaterialIcons name="qr-code-scanner" size={300} color={cores.scannerColor} style={{opacity: 0.2}} />
                        </TouchableOpacity>
                    </View>
                </Camera>
            ) : (
                <TouchableOpacity style={styles.buttonContainer} onPress={() => setIsCameraActive(true)}>
                    <MaterialIcons name="qr-code-scanner" size={300} color={cores.scannerColor}  />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Scanner;