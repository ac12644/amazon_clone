import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDiS4Z9OLTfqbqc4OAEoid94t3GLeDjwAA",
    authDomain: "clone-5d0d9.firebaseapp.com",
    databaseURL: "https://clone-5d0d9.firebaseio.com",
    projectId: "clone-5d0d9",
    storageBucket: "clone-5d0d9.appspot.com",
    messagingSenderId: "722363768979",
    appId: "1:722363768979:web:822251aedc43ea45d56d66",
    measurementId: "G-6P5QKXYDSY"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };