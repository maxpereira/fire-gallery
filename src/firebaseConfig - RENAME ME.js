// The below information can be accessed from your project in the Firebase Console.
// Click "Add Firebase to your web app"

import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "",
    authDomain: ".firebaseapp.com",
    databaseURL: ".firebaseio.com",
    projectId: "",
    storageBucket: ".appspot.com",
    messagingSenderId: ""
};

var Feb14App = firebase.initializeApp(firebaseConfig);
export default Feb14App.database(); //this doesnt have to be database only