import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFWwQHvUuNx03lIMT_BcED4MS2BcVCKjw",
  authDomain: "ecommerce-c89c2.firebaseapp.com",
  projectId: "ecommerce-c89c2",
  storageBucket: "ecommerce-c89c2.appspot.com",
  messagingSenderId: "991699533914",
  appId: "1:991699533914:web:0f0920de45840bc8f81863",
  measurementId: "G-KS8GFNGTV4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export
export const database = firebase.firestore();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
