import React, { useEffect, useState } from "react";
import db from "./firebase";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import SendBox from "./components/SendBox";
import firebase from "firebase";
function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName(prompt("Enter your name", "NewUser"));
  }, []);
  const [Messages, getMessage] = useState([]);

  function UpdateMessages(newMessage) {
    db.collection("messages").add({
      username: userName,
      message: newMessage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp")
      .onSnapshot((Snapshot) => {
        getMessage(
          Snapshot.docs.map((doc) => {
            return { id: doc.id, data: doc.data() };
          })
        );
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <MainBody user={userName} DisplayMessages={Messages} />
      <SendBox updateMessageArray={UpdateMessages} />
    </div>
  );
}

export default App;
