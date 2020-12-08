import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Check } from '../generals/Check'

export const CheckOutView = ({navigation}) => {
    return (
        <Check isCheckIn={false} navigation={navigation} />
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