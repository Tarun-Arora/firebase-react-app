// // import firebase from 'firebase'
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore/lite';

// const app = initializeApp({
//     apiKey: "AIzaSyBc80C3rD2Ta-7vD41bQkBcM5q2SPd-gA8",
//     authDomain: "fir-react-338b9.firebaseapp.com",
//     projectId: "fir-react-338b9",
//     storageBucket: "fir-react-338b9.appspot.com",
//     messagingSenderId: "195150765455",
//     appId: "1:195150765455:web:ee9439d1ba06a6f6a57ffa",
//     measurementId: "G-BKS95QHQXS"
// });

// const db = getFirestore();

// const auth = getAuth()

// export { db, auth }

import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyBc80C3rD2Ta-7vD41bQkBcM5q2SPd-gA8",
    authDomain: "fir-react-338b9.firebaseapp.com",
    projectId: "fir-react-338b9",
    storageBucket: "fir-react-338b9.appspot.com",
    messagingSenderId: "195150765455",
    appId: "1:195150765455:web:ee9439d1ba06a6f6a57ffa",
    measurementId: "G-BKS95QHQXS"
});

var db = firebase.firestore();

const auth = firebase.auth()

export { db,auth }