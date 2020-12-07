import React from 'react'
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native'

export const HomeView = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <View style={styles.contentBtn}>
                <Button
                    title="Registrar Entrada"
                    onPress={() => navigation.navigate('CheckIn')}
                />
            </View>
            <View style={styles.contentBtn}>
                <Button
                    title="Registrar Salida"
                    onPress={() => navigation.navigate('CheckOut')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    contentBtn: {
        width: Dimensions.get('window').width,
        padding: 30
    }
})