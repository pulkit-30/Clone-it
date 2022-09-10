import React from "react";
import { Button } from "@material-ui/core";
import { auth } from "../firebase";
function Header(props) {
  window.addEventListener("scroll", () => {
    document
      .querySelector(".navbar")
      .classList.toggle("active-navbar", window.scrollY > 200);
  });
  return (
    <nav className="navbar flex">
      <div className="logo">
        <img src="./netflix-logo.png" alt="" />
      </div>

      {props.LoginStatus && (
        <Button
          variant="contained"
          color="primary"
          className="btn"
          onClick={() => {
            auth
              .signOut()
              .then(props.handelLoginStatus(false))
              .catch((error) => {
                alert(error.message);
              });
          }}
        >
          Log out
        </Button>
      )}
    </nav>
  );
}

export default Header;
