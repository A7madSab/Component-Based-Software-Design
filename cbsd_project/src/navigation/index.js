import React from "react"
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { createAppContainer, createBottomTabNavigator } from "react-navigation"
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp"

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
    initialRouteName: "SignUp"
})


export default createAppContainer(AuthNav)