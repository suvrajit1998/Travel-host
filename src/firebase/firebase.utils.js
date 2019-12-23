import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAZ9EYGYLeqct3EmVlXlqI1avKbke_dpCU",
  authDomain: "travelerhost-33536.firebaseapp.com",
  databaseURL: "https://travelerhost-33536.firebaseio.com",
  projectId: "travelerhost-33536",
  storageBucket: "travelerhost-33536.appspot.com",
  messagingSenderId: "1007106398253",
  appId: "1:1007106398253:web:b82fe6fae39158037f40a4",
  measurementId: "G-PSJNN6D01C"
};

export const createUserProfileDocument = async (userAuth, additionaldata) => {
  if (!userAuth) return;

  const userref = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userref.get();

  // console.log(snapshot);

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userref.set({ displayName, email, createdAt, ...additionaldata });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userref;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
