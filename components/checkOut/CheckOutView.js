import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const CheckOutView = () => {
    return (
        <View style={styles.container}>
            <Text>CheckOutView</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    }
})