import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBGBJEIytKVubaYEpFZAKJxowlzNfUXOk",
  authDomain: "twitter-clone-8d418.firebaseapp.com",
  databaseURL: "https://twitter-clone-8d418.firebaseio.com",
  projectId: "twitter-clone-8d418",
  storageBucket: "twitter-clone-8d418.appspot.com",
  messagingSenderId: "733567231734",
  appId: "1:733567231734:web:862c0ac50bcbc53c586ed7",
  measurementId: "G-EKMMVTN8YY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

// gives access to the db for use in any file
export default db;
