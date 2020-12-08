import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Check = ({ navigation, isCheckIn }) => {
    const [permits, setPermits] = useState(null);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.front);
    const [photo, setPhoto] = useState(null);
    const [location, setLocation] = useState({});
    const ref = useRef(null);

    const getPermits = async () => {
        const { status: cameraStatus } = await Camera.requestPermissionsAsync();
        const { status: locationStatus } = await Location.requestPermissionsAsync();
        setPermits(cameraStatus === 'granted' && locationStatus === 'granted')
    }

    const searchLocartion = async () => {
        const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
        setLocation(location.coords)
    }

    const takePhoto = async () => {
        const photo = await ref.current.takePictureAsync({ quality: 0.2 });
        let data = new FormData();
        data.append('img', { uri: photo.uri, name: 'profile_photo.jpg', type: 'image/jpg' });
        const imgResponse = await fetch('http://192.168.0.10:8001/api/image', {
            method: 'POST',
            body: data
        });
        const { imgName } = await imgResponse.json();
        const uid = await AsyncStorage.getItem('@uid')

        const checkIn = { coordinates: location, imgName, user: uid };

        const checkInResponse = await fetch(`http://192.168.0.10:8001/api/${isCheckIn ? 'checkIn' : 'checkOut'}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(checkIn)
        });
        const checkInData = await checkInResponse.json();

        Alert.alert(
            `${isCheckIn ? 'Entrada' : 'Salida'}`,
            ` Se registro su ${isCheckIn ? 'Entrada' : 'Salida'}`,
            [
                { text: "OK", onPress: () => navigation.navigate('Home') }
            ],
            { cancelable: false }
        );
    }

    useEffect(() => {
        getPermits();
        searchLocartion();
    }, [])

    if (permits === null) {
        return <View style={styles.container}><Text>Esperando Permisos de Camara y localizacion ...</Text></View>
    }
    if (permits === false) {
        return <View style={styles.container}><Text>No tenemos accesso a la camara o al GPS de su equipo :/</Text></View>
    }
    // if (photo) {
    //     return <Image style={styles.img} source={{
    //         uri: photo.uri,
    //     }} />
    // }

    return (
        <View style={styles.container}>
            <Button
                title={cameraType === 0 ? 'Cambiar a camara Frontal' : 'Cambiar a camara trasera'}
                onPress={() => {
                    const { front, back } = Camera.Constants.Type;
                    const nuevoTipo = cameraType === back ? front : back
                    setCameraType(nuevoTipo)
                }}
            />
            <Camera
                ref={ref}
                style={styles.camera}
                type={cameraType}
            />
            <Button
                title={isCheckIn ? 'Marcar Entrada' : 'Marcar Salida'}
                onPress={takePhoto}
            />
        </View >
    )
}
const styles = StyleSheet.create({
    containerCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#ecf0f1',
    },
    camera: {
        height: Dimensions.get('window').height - 200
    },
    img: {
        width: 400,
        height: 600
    },
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    }
})