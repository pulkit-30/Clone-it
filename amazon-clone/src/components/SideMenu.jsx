import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";

function SideMenu(props) {
  return (
    <div
      className="Sidemenu"
      style={{ transform: ` translateX(${props.display})` }}
    >
      <div
        className="flex Sidemenu-menu"
        onClick={() => {
          props.handelDisplay();
        }}
      >
        <Link to="/Sign-In">
          <div>
            <Button>Sign In</Button>
          </div>
        </Link>
        <Link to="/">
          <div>
            <Button>Home</Button>
          </div>
        </Link>
        <div>
          <Button>Account</Button>
        </div>
        <div>
          <Button>Order</Button>
        </div>
        <div>
          <Button>Buy Again</Button>
        </div>
        <Link to="/cart">
          <div>
            <Button>Lists</Button>
          </div>
        </Link>
        <div>
          <Button>Custumer Service</Button>
        </div>
      </div>
      <div
        className="cancel"
        onClick={() => {
          props.handelDisplay();
        }}
      >
        X
      </div>
    </div>
  );
}

export default SideMenu;
