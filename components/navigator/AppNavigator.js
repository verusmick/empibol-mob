import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { HomeView } from '../Home/HomeView';

import { LoginView } from '../login/LoginView';


export const AppNavigator = createSwitchNavigator({
    Login: {
        screen: LoginView
    },
    Home: {
        screen: HomeView
    }
}, {
    initialRouteName: 'Login'
})
