//
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import SignUp from "./signUp";
import SignIn from "./SignIn";
function UseLog(props) {
  const [wantSignIn, setSignIn] = useState(false);
  function handelStatus() {
    props.handelLoginStatus(true);
  }

  return (
    <div className="login-page flex">
      {!wantSignIn && <SignUp handelStatus={handelStatus} />}

      {wantSignIn && <SignIn handelStatus={handelStatus} />}

      <Button
        variant="contained"
        className="btn-red btn"
        onClick={() => {
          if (wantSignIn) setSignIn(false);
          else setSignIn(true);
        }}
      >
        {wantSignIn ? " Sign Up " : " Sign In"}
      </Button>
    </div>
  );
}

export default UseLog;
