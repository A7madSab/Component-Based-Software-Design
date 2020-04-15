import React from "react"
import { createAppContainer, createStackNavigator } from "react-navigation"
import Main from "../components/Main"
import Detail from "../components/Detail"

const stackNav = createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            header: null,
        }
    },
    Detail: {
        screen: Detail
    }
})

export default createAppContainer(stackNav)