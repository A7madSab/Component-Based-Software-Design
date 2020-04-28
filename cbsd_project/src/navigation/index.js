import React from "react"
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation"
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp"
import Home from "../screens/Home"

const AuthNav = createBottomTabNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => <Icon name='log-in' size={24} color={tintColor} />
        })
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => <MaterialIcons name='create' size={24} color={tintColor} />
        })
    }
}, {
    initialRouteName: "SignIn"
})

const AppNav = createBottomTabNavigator({
    Camera: {
        screen: Home
    }
})

const Navigation = createSwitchNavigator({
    auth: AuthNav,
    app: AppNav
})

export default createAppContainer(Navigation)