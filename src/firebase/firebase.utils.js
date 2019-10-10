import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAl2Nt-Y5qYyCDc5TbisGE_k_9MrEyVaLU",
  authDomain: "crown-db-a6afd.firebaseapp.com",
  databaseURL: "https://crown-db-a6afd.firebaseio.com",
  projectId: "crown-db-a6afd",
  storageBucket: "crown-db-a6afd.appspot.com",
  messagingSenderId: "278945833962",
  appId: "1:278945833962:web:feb39e9236027607474893",
  measurementId: "G-BBYZM278Y6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
