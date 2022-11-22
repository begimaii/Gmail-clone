import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5pgpeehdF_G_dgp_olwBUiJpkbaq1U08",
  authDomain: "clone-yt-f8703.firebaseapp.com",
  projectId: "clone-yt-f8703",
  storageBucket: "clone-yt-f8703.appspot.com",
  messagingSenderId: "553562220735",
  appId: "1:553562220735:web:f734e88f4799b5831b3e0a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
