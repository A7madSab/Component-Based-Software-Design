import { createStackNavigator, createAppContainer } from "react-navigation"

import ToDoList from "../components/Todo" 
import Alphabetics from "../components/Alphabetics" 

const Navigation = createStackNavigator({
    ToDoList: {
        screen: ToDoList
    },
    Alphabetics: {
        screen: Alphabetics
    }
})

export default createAppContainer(Navigation)
