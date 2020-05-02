import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC8phKGIDJYvDPunhpXc8w-C4HammSR6SE",
    authDomain: "ershad-02.firebaseapp.com",
    databaseURL: "https://ershad-02.firebaseio.com",
    projectId: "ershad-02",
    storageBucket: "ershad-02.appspot.com",
    messagingSenderId: "223890000181",
    appId: "1:223890000181:web:977da075a4ac1255cea47c",
    measurementId: "G-B39KFL1NNE"
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase