import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyC0ixHY7FVjxhth4qWwO7AuoLI2QCQl5Xc",
    authDomain: "panpacificgem.firebaseapp.com",
    databaseURL: "https://panpacificgem.firebaseio.com",
    projectId: "panpacificgem",
    storageBucket: "panpacificgem.appspot.com",
    messagingSenderId: "910518957235"
};

firebase.initializeApp(config);

export const database = firebase.database();
export const storage = firebase.storage().ref();