import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC4ihnBb0HIcg2YzlFWnyn6JrX6AFD6QMs",
    authDomain: "postlist-ac5d2.firebaseapp.com",
    databaseURL: "https://postlist-ac5d2.firebaseio.com",
    projectId: "postlist-ac5d2",
    storageBucket: "",
    messagingSenderId: "54330858385"
};
firebase.initializeApp(config);
firebase.firestore().settings({})

export default firebase;