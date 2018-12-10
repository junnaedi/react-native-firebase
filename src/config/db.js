import Firebase from 'firebase';

config = {
    apiKey: "AIzaSyCJKgsP5luuLVLtWxABQFjMCOaN4MWxddk",
    authDomain: "rnbase-16641.firebaseapp.com",
    databaseURL: "https://rnbase-16641.firebaseio.com",
    projectId: "rnbase-16641",
    storageBucket: "rnbase-16641.appspot.com",
    messagingSenderId: "913317511472"
};

Firebase.initializeApp(config);

export const db = Firebase.database();