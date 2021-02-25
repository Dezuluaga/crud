import firebase from 'firebase/app'
//import 'firebase/firestore'

  /*var firebaseConfig = {
    apiKey: "AIzaSyCQluUgnkAK0mSGU4HP8iT3tRLZz3zJ7-k",
    authDomain: "crude-1dece.firebaseapp.com",
    projectId: "crude-1dece",
    storageBucket: "crude-1dece.appspot.com",
    messagingSenderId: "711203021197",
    appId: "1:711203021197:web:aba1b913faa011d18a1dc4"
  };*/

  const firebaseConfig = {
    apiKey: "AIzaSyCQluUgnkAK0mSGU4HP8iT3tRLZz3zJ7-k",
    authDomain: "crude-1dece.firebaseapp.com",
    projectId: "crude-1dece",
    storageBucket: "crude-1dece.appspot.com",
    messagingSenderId: "711203021197",
    appId: "1:711203021197:web:aba1b913faa011d18a1dc4"
  };


export const firebaseApp = firebase.initializeApp(firebaseConfig)