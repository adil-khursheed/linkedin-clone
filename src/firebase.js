import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDkcS11_VBFGZBgzkXP7sa49f8P5GyLffo",
    authDomain: "linkedin-clone-97496.firebaseapp.com",
    projectId: "linkedin-clone-97496",
    storageBucket: "linkedin-clone-97496.appspot.com",
    messagingSenderId: "121244714413",
    appId: "1:121244714413:web:e7f64b1ada455987b64d24"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };