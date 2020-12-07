import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const CheckInView = () => {
    return (
        <View style={styles.container}>
            <Text>CheckInView</Text>
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