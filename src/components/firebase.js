import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBMNQsTvDAxCOn68et851LhzbpGXwrS5nI",
    authDomain: "otp2-7b236.firebaseapp.com",
    projectId: "otp2-7b236",
    storageBucket: "otp2-7b236.appspot.com",
    messagingSenderId: "533069405325",
    appId: "1:533069405325:web:ea52a382e607d5e892d6c4",
    measurementId: "G-GTCM8PJ5Q6"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};