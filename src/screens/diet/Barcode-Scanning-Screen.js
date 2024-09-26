import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useCameraDevice, useCodeScanner } from 'react-native-vision-camera'
import { Camera, useCameraPermission } from 'react-native-vision-camera'
import PermissionsPage from '../../components/PermissionsPage';
import { useIsFocused } from '@react-navigation/core'



const BarcodeScanningScreen = (props) => {
    const { navigation, route } = props;
    const { hasPermission } = useCameraPermission()

    const device = useCameraDevice('back')
    const isFocused = useIsFocused()

    if (!hasPermission) return <PermissionsPage />
    // if (device == null) return <NoCameraDeviceError />

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
            console.log(`Scanned ${codes.length} codes!`)
        }
    })
      
    
    return (
        <View style={styles.container}>
            {/* <Camera {...props} codeScanner={codeScanner} /> */}
            {device != null && hasPermission && (
                <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={isFocused}
                codeScanner={codeScanner}
                />
            )}
            <Text>Barcode Scanning Screen</Text>
        </View>
    )
}

export default BarcodeScanningScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    }
  })