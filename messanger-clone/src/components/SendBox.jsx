import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function SendBox(props) {
  const [message, updateMessage] = useState("");

  function handelMessage(event) {
    updateMessage(event.target.value);
  }

  function sendMessage(event) {
    props.updateMessageArray(message);
    event.preventDefault();
    updateMessage("");
  }
  return (
    <div className="SendBox flex">
      <form onSubmit={sendMessage}>
        <TextField
          className="input"
          id="standard-basic"
          label="Message"
          type="text"
          name="message"
          placeholder="Message"
          value={message}
          onChange={handelMessage}
          autoComplete="off"
        />

        <Button
          className="button"
          variant="outlined"
          color="primary"
          type="submit"
          disabled={!message}
        >
          <i className="fas fa-paper-plane"></i>
        </Button>
      </form>
    </div>
  );
}

export default SendBox;
