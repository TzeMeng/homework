import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCWtEDGZrBDJhOP-uKFZjf79kSvokL49s4",
    authDomain: "week9hw-afc03.firebaseapp.com",
    databaseURL: "https://week9hw-afc03.firebaseio.com",
    projectId: "week9hw-afc03",
    storageBucket: "week9hw-afc03.appspot.com",
    messagingSenderId: "93114444483",
    appId: "1:93114444483:web:d4425a7391068e1d8d9076",
    measurementId: "G-3LYX2BDKNZ"
};
  
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;

