import firebase from "firebase";
const fireaseapp = firebase.initializeApp({
  apiKey: "AIzaSyBs4v4qEVVQGreVRHFbThhhNiQ8AVJ70Kc",
  authDomain: "instagram-clone-app-4f17f.firebaseapp.com",
  projectId: "instagram-clone-app-4f17f",
  storageBucket: "instagram-clone-app-4f17f.appspot.com",
  messagingSenderId: "878235495173",
  appId: "1:878235495173:web:a46274c7507e0466b2256c",
  measurementId: "G-CE26CCT7SV",
});
const auth = firebase.auth();
const storage = firebase.storage();
const db = fireaseapp.firestore();
export { db, auth, storage };
