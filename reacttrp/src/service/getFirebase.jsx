// Import the functions you need from the SDKs you need
import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAm3NNllyCDQqON_QMs7msmTYuZwEHqirY",
  authDomain: "reacttrp-a691f.firebaseapp.com",
  projectId: "reacttrp-a691f",
  storageBucket: "reacttrp-a691f.appspot.com",
  messagingSenderId: "491731151699",
  appId: "1:491731151699:web:24fb75b11724fe076a4fa6"
};


const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
    return firebase.firestore(app)
}