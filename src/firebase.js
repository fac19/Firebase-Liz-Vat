import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyD0lmKe0Bk7Y5U4Agcq5Nn6wrd3g3PhC0k",
    authDomain: "fir-hackathon-liz-vat.firebaseapp.com",
    databaseURL: "https://fir-hackathon-liz-vat.firebaseio.com",
    projectId: "fir-hackathon-liz-vat",
    storageBucket: "fir-hackathon-liz-vat.appspot.com",
    messagingSenderId: "403576966996",
    appId: "1:403576966996:web:6dc2fb2bdd4c6162be02c1"
};

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth;
export const firestore = firebase.firestore;