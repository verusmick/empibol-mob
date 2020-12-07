import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import { CheckInView } from '../checkIn/CheckInView';
import { CheckOutView } from '../checkOut/CheckOutView';
import { HomeView } from '../home/HomeView';
import { LoginView } from '../login/LoginView';


export const AppNavigator = createSwitchNavigator({
    Login: {
        screen: LoginView
    },
    Home: {
        screen: HomeView
    },
    CheckIn: {
        screen: CheckInView
    },
    CheckOut: {
        screen: CheckOutView
    }
}, {
    initialRouteName: 'Login'
})


