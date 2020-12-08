import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Check } from '../generals/Check'

export const CheckInView = ({ navigation }) => {
    return (
        // <View style={styles.container}>
        <Check isCheckIn={true} navigation={navigation} />
        // </View>
    )
}
const styles = StyleSheet.create({
    containerCenter: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
})