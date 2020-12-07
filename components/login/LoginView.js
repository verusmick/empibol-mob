import React, { useState } from 'react'
import { Alert, Button, Image, StyleSheet, TextInput, View } from 'react-native'
import { fetchWithoutToken } from '../../utils/fetch';

export const LoginView = ({ navigation }) => {
    const [loginForm, setLoginForm] = useState({
        ci: '',
        password: '',
    })
    
    const { ci, password } = loginForm;

    const handleLogin = async (e) => {
        const resp = await fetchWithoutToken(`auth`, { ci, password }, 'POST');
        const body = await resp.json();
        if (body.ok) {
            navigation.navigate('Home');
        } else {
            alert(body.msg)
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/logo.png')}
                style={styles.logo}
            />
            <TextInput
                value={ci}
                ty
                onChangeText={(ci) => setLoginForm({ ...loginForm, ci: ci })}
                placeholder={'CI del Usuario'}
                style={styles.input}
            />
            <TextInput
                value={password}
                onChangeText={(password) => setLoginForm({ ...loginForm, password: password })}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
            />

            <Button
                title={'Login'}
                style={styles.input}
                onPress={handleLogin}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 150,
        width: 150
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    }
});