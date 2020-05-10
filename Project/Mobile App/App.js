import React, { useEffect } from "react"
import Navigation from "./src/navigation"
import { Provider } from "react-redux"
import store from "./src/redux/store"
import { Notifications } from "expo";

console.disableYellowBox = true;

const App = () => {
    useEffect(() => {
        const now = new Date()
        now.setSeconds(now.getSeconds() + 5)
        Notifications.scheduleLocalNotificationAsync({
            title: "Hello",
            body: "Don't forget to read something today",
            ios: {
                sound: true
            },
            android: {
                color: "blue",
                sticky: false,
                
            }
        }, {
            time: now
        })
    })
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    )
}

export default App