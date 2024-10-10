import React, { useEffect, useCallback } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useCameraDevice, useCodeScanner } from 'react-native-vision-camera'
import { Camera, useCameraPermission } from 'react-native-vision-camera'
import PermissionsPage from '../../components/PermissionsPage';
import { useIsFocused } from '@react-navigation/core'
import { getFoodItemFromBarcode } from '../../logic/diet-api'

DEBUG = true;

const BarcodeScanningScreen = (props) => {
    const { navigation, route } = props;
    const meal = route.params.meal;
    const { hasPermission } = useCameraPermission()

    const device = useCameraDevice('back')
    // const isFocused = useIsFocused()
    const [isActive, setIsActive] = React.useState(useIsFocused())

    const onCodeScanned = useCallback((codes) => {
        let ignore = false;
        const runScanned = async () =>{
            setIsActive(false)
            const code = codes[0]?.value
            if (code === null){
                DEBUG && console.log('No barcode scanned')
                setIsActive(true)
                return
            }
            DEBUG && console.log('Barcode scanned:', code)
            if (ignore) return;
            const foodItem = await getFoodItemFromBarcode(code)
            if (foodItem === null){
                DEBUG && console.log('No food item found')
                setIsActive(true)
                return
            }
            if (ignore) return;
            DEBUG && console.log('Food item:', foodItem)
            DEBUG && console.log('Meal:', meal)
            navigation.replace('Add Food', { foodItem:foodItem, meal:meal });
        }

        runScanned()

        return () => { ignore = true; };
    }, [])

    const codeScanner = useCodeScanner({
        codeTypes: ['ean-13'],
        onCodeScanned: onCodeScanned
    })
      

    if (!hasPermission) return <PermissionsPage />
    // if (device == null) return <NoCameraDeviceError />
    
    return (
        <View style={styles.container}>
            {device != null && hasPermission && (
                <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={isActive}
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