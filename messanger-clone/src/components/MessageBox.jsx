import React, { forwardRef } from "react";
const MessageBox = forwardRef((props, ref) => {
  var addClass = props.user === props.message.username ? "right" : "left";
  return (
    <div ref={ref} className={addClass} key={props.message.timestamp}>
      <span className="username">{props.message.username}</span>:{" "}
      <span className="message">{props.message.message}</span>
    </div>
  );
});
export default MessageBox;
