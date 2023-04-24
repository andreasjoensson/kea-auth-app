import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAfNlfzNqhi6-vmClmqLpx26FHQXsSUU30",

  authDomain: "keaauth.firebaseapp.com",

  projectId: "keaauth",

  storageBucket: "keaauth.appspot.com",

  messagingSenderId: "667955668099",

  appId: "1:667955668099:web:ddcba4de20892f6f1027b6",
};
firebase.initializeApp(firebaseConfig);

export function getFirebaseAuth() {
  return firebase.auth();
}

export function getFirebaseGoogle() {
  return firebase.auth.GoogleAuthProvider.PROVIDER_ID;
}
