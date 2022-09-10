import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
function UserLog() {
  const [{ isUser, Username }, dispatch] = useStateValue();
  const [email, updateemail] = useState("");
  const [password, updatePassword] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [username, upadteUsername] = useState("");
  function ChangeForm() {
    if (signUp) setSignUp(false);
    else setSignUp(true);
  }
  function handelUsername(event) {
    upadteUsername(event.target.value);
  }
  function handelEmail(event) {
    updateemail(event.target.value);
  }
  function handelPassword(event) {
    updatePassword(event.target.password);
  }
  function handelSubmit(event) {
    event.preventDefault();
    if (signUp) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(dispatch({}))
        .catch((error) => {
          alert(error.message);
        });
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then()
        .catch((error) => {
          alert(error.message);
        });
    }
  }
  return (
    <div className="Log flex">
      <Link to="/">
        <div className="">
          <img src="./amazon-logo.png" alt="" />
        </div>
      </Link>
      <form className="flex">
        <h3>{!signUp ? "Sign In" : "Sign Up"}</h3>
        {signUp && (
          <div className="flex username">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={handelUsername}
            />
          </div>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handelEmail}
        />
        <label htmlFor="Password">Password</label>
        <input
          type="Password"
          name="email"
          id="password"
          value={password}
          onChange={handelPassword}
        />
        <Button type="submit" className="btn" onClick={handelSubmit}>
          {!signUp ? "Sign In" : "Sign Up"}
        </Button>
      </form>
      <hr />
      <div>
        {
          <div>
            <div>New To Amazon</div>
            <button className="btn" onClick={ChangeForm}>
              {!signUp ? <div>Create a new Account</div> : <div>Sign In</div>}
            </button>
          </div>
        }
      </div>
    </div>
  );
}

export default UserLog;
