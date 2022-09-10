import firebase from "firebase";
const fireaseapp = firebase.initializeApp({
  apiKey: "AIzaSyDqX5qoDon623Ch2QzTMriOZvk05J3aDFA",
  authDomain: "netflix-clone-5cd59.firebaseapp.com",
  projectId: "netflix-clone-5cd59",
  storageBucket: "netflix-clone-5cd59.appspot.com",
  messagingSenderId: "446398887266",
  appId: "1:446398887266:web:623dfbaf7a5df5ab80a83b",
  measurementId: "G-HMR0HWFZVL",
});
const auth = firebase.auth();
const storage = firebase.storage();
const db = fireaseapp.firestore();
export { db, auth, storage };
