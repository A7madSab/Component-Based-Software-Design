import React from "react"
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AntDesign from "react-native-vector-icons/AntDesign"

import { createAppContainer, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator, createStackNavigator } from "react-navigation"
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp"
import Settings from "../screens/Settings"
import Camera from "../screens/Camera"
import Picker from "../screens/Picker"

import { primary } from "../utils/index"

const AuthNav = createBottomTabNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => <Feather name="log-in" size={24} color={tintColor} />
        })
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => <MaterialIcons name="create" size={24} color={tintColor} />
        })
    }
}, {
    initialRouteName: "SignIn"
})

const CameraStack = createStackNavigator({
    Camera: {
        screen: Camera,
        navigationOptions: ({ navigation }) => {
            return ({
                title: "Camera",
                headerLeft: <Feather
                    onPress={() => navigation.toggleDrawer()}
                    name="menu"
                    size={30}
                    style={{ margin: 15 }}
                />
            })
        },
        drawerIcon: () => <Feather name="home" size={30} />
    }
})

const PickerStack = createStackNavigator({
    Picker: {
        screen: Picker,
        navigationOptions: ({ navigation }) => {
            return ({
                title: "Picker",
                headerLeft: <Feather
                    onPress={() => navigation.toggleDrawer()}
                    name="menu"
                    size={30}
                    style={{ margin: 15 }}
                />
            })
        },
        drawerIcon: () => <Feather name="home" size={30} />
    }
})

const VisionNavigator = createBottomTabNavigator({
    Picker: {
        screen: PickerStack,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => <AntDesign name="picture" size={24} color={tintColor} />
        })
    },
    Camera: {
        screen: CameraStack,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => <Feather name="camera" size={24} color={tintColor} />
        })
    }
}, {
    initialRouteName: "Picker"
})

const SettingsStack = createStackNavigator({
    Settings: {
        screen: Settings,
        navigationOptions: ({ navigation }) => {
            return ({
                title: "Settings",
                headerLeft: <Feather
                    onPress={() => navigation.toggleDrawer()}
                    name="menu"
                    size={30}
                    style={{ margin: 15 }}
                />
            })
        },
    }
})

const AppNav = createDrawerNavigator({
    Camera: {
        screen: VisionNavigator,
        navigationOptions: ({
            drawerIcon: ({ tintColor }) => <Feather name="camera" size={25} color={tintColor} />
        })
    },
    Settings: {
        screen: SettingsStack,
        navigationOptions: ({
            drawerIcon: ({ tintColor }) => <FontAwesome name="cog" size={25} color={tintColor} />
        })
    }
}, {
    drawerWidth: 200,
    drawerBackgroundColor: primary,
    overlayColor: "rgba(5,5,5,0.5)",
    contentOptions: {
        activeTintColor: "#000",
        activeBackgroundColor: "#fff",
        inactiveTintColor: "#fff"
    },
})

const Navigation = createSwitchNavigator({
    auth: AuthNav,
    app: AppNav
}, {
    initialRouteName: "app"
})

export default createAppContainer(Navigation)