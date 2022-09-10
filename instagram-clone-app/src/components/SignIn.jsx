import { Button, Input } from "@material-ui/core";
import React, { useState } from "react";

function SignIn(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function handelEmailChange(event) {
    setemail(event.target.value);
  }
  function handelPasswordChange(event) {
    setpassword(event.target.value);
  }
  function handelSignIn(event) {
    event.preventDefault();
    props.handelSignIn(email, password, false);
  }
  return (
    <div>
      <form className="flex form">
        <img src="./insta-logo.png" alt="insta-logo" />

        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handelEmailChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handelPasswordChange}
          required
        />
        <Button type="submit" onClick={handelSignIn}>
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
