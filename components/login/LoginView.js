import React, { useState } from 'react'
import { Alert, Button, Image, StyleSheet, TextInput, View } from 'react-native'

export const LoginView = ({navigation}) => {
    const [state, setState] = useState({
        username: '',
        password: '',
    })

    const onLogin = () => {
        const { username, password } = state;
        Alert.alert('Credentials', `${username} + ${password}`);
    }
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/logo.png')}
                style={styles.logo}
            />
            <TextInput
                value={state.username}
                onChangeText={(username) => setState({ username })}
                placeholder={'Username'}
                style={styles.input}
            />
            <TextInput
                value={state.password}
                onChangeText={(password) => setState({ password })}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
            />

            <Button
                title={'Login'}
                style={styles.input}
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#ecf0f1',
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