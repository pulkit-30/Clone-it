import React, { useState } from "react";

import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { auth } from "../firebase";

function SignUp(props) {
  const [wantpassword, setwantpassword] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  function handelEmail(event) {
    setEmail(event.target.value);
  }
  function handelPassword(event) {
    setPassword(event.target.value);
  }
  function handelSubmit(event) {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(Email, Password)
      .then(props.handelStatus(true))
      .catch((error) => {
        alert(error.message);
      });
  }
  return (
    <div>
      <div className="login-box">Unlimited movies, TV shows and more.</div>
      <div className="login-box-2">Watch anywhere. Cancel anytime.</div>
      <div className="login-box-3">
        Ready to watch? Enter your email to create or restart your membership.
        <div className="login-form">
          <form className="form flex" onSubmit={handelSubmit}>
            {!wantpassword && (
              <input
                type="email"
                className="Input"
                placeholder="Email address"
                value={Email}
                onChange={handelEmail}
                required
              />
            )}
            {wantpassword && (
              <input
                type="password"
                className="Input"
                placeholder="Password"
                value={Password}
                onChange={handelPassword}
                required
              />
            )}
            <button
              type="submit"
              className="login-btn"
              onClick={() => {
                Email && setwantpassword(true);
              }}
            >
              <div className="flex">
                Get Started <KeyboardArrowRightIcon />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
