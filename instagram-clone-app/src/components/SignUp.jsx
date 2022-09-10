import { Button, Input } from "@material-ui/core";
import React, { useState } from "react";
function SignUp(props) {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  function handelUsernameChange(event) {
    setusername(event.target.value);
  }
  function handelEmailChange(event) {
    setemail(event.target.value);
  }
  function handelPasswordChange(event) {
    setpassword(event.target.value);
  }
  function handelSignUp(event) {
    event.preventDefault();
    props.getUsername(username);
    props.handelAuth(email, password);
  }
  return (
    <div>
      <form className="flex" onSubmit={handelSignUp}>
        <img src="./insta-logo.png" alt="insta-logo" />
        <Input
          type="text"
          name="Username"
          placeholder="Username"
          value={username}
          onChange={handelUsernameChange}
          required
        />
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
        <Button type="submit">SignUp</Button>
      </form>
    </div>
  );
}

export default SignUp;
