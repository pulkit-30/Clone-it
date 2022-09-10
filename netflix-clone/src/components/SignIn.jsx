import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { auth } from "../firebase";
function SignIn(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function handelInput(event) {
    setemail(event.target.value);
  }
  function handelPassword(event) {
    setpassword(event.target.value);
  }
  function handelSubmit(event) {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        props.handelStatus(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  return (
    <div className="signUp-background flex">
      <h2>Sign In</h2>
      <form className="column flex" onSubmit={handelSubmit}>
        <TextField
          type="email"
          id="filled-basic"
          label="Email"
          variant="filled"
          className="signUp-input"
          value={email}
          onChange={handelInput}
          required
        />
        <TextField
          type="password"
          id="filled-basic"
          label="Password"
          variant="filled"
          className="signUp-input"
          value={password}
          onChange={handelPassword}
          required
        />

        <Button type="submit" className="red">
          Sign In
        </Button>
      </form>
      If you don't have an account
      <span className="blue-text ">Sign Up here</span>
    </div>
  );
}

export default SignIn;
