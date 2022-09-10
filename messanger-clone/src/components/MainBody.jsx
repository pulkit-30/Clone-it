import React from "react";
import MessageBox from "./MessageBox";
import FlipMove from "react-flip-move";

function MainBody(props) {
  function displayMessage(message) {
    return (
      <MessageBox key={message.id} user={props.user} message={message.data} />
    );
  }
  return (
    <div className="container">
      <div className="greet">Welcome : {props.user}</div>
      <FlipMove>{props.DisplayMessages.map(displayMessage)}</FlipMove>
    </div>
  );
}

export default MainBody;
