// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDmntVAxLvBfG_zA43MlhNGcdkpV2zIWhU",
//   authDomain: "messanger-clone-6d383.firebaseapp.com",
//   projectId: "messanger-clone-6d383",
//   storageBucket: "messanger-clone-6d383.appspot.com",
//   messagingSenderId: "1040134611056",
//   appId: "1:1040134611056:web:5aa7f692c04bbf111b54b5",
//   measurementId: "G-LPZDPCL6R8",
// };
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDmntVAxLvBfG_zA43MlhNGcdkpV2zIWhU",
  authDomain: "messanger-clone-6d383.firebaseapp.com",
  projectId: "messanger-clone-6d383",
  storageBucket: "messanger-clone-6d383.appspot.com",
  messagingSenderId: "1040134611056",
  appId: "1:1040134611056:web:5aa7f692c04bbf111b54b5",
  measurementId: "G-LPZDPCL6R8",
});
const db = firebaseApp.firestore();
export default db;
