import React, { useCallback, useEffect, useState } from 'react'
import { Linking } from 'react-native'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Camera } from 'react-native-vision-camera'

const PermissionsPage = (props) => {
    
    const { navigation, route } = props;
    const [cameraPermissionStatus, setCameraPermissionStatus] = useState('not determined')

    const requestCameraPermission = useCallback(async () => {
        console.log('Requesting camera permission...')
        const permission = await Camera.requestCameraPermission()
        console.log(`Camera permission status: ${permission}`)
    
        if (permission === 'denied') await Linking.openSettings()
        setCameraPermissionStatus(permission)
      }, [])

      useEffect(() => {
        requestCameraPermission()
      }, [])

      useEffect(() => {
        if (cameraPermissionStatus === 'granted') navigation.back()
      }, [cameraPermissionStatus, navigation])

    return (
        <View >
            <Text >Permissions Page</Text>
            <Text >This page will request permissions for the camera.</Text>
            <Text >This is necessary to scan barcodes.</Text>
            <Text >Please allow the camera permissions to continue.</Text>
        </View>   
    )
}

export default PermissionsPage

const styles = StyleSheet.create({



})


