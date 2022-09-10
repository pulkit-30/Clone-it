import firebase from "firebase";
const fireaseapp = firebase.initializeApp({
    apiKey: "AIzaSyC30pHqT-96HqmRmapmi2snsnD4L4Y4NPc",
  authDomain: "clone-9a6c5.firebaseapp.com",
  projectId: "clone-9a6c5",
  storageBucket: "clone-9a6c5.appspot.com",
  messagingSenderId: "750357542590",
  appId: "1:750357542590:web:f2db5f5c4f226fb656d0ef",
  measurementId: "G-M1YXKNXSQK"
});
const auth = firebase.auth();
export { auth};
