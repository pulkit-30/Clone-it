import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SideMenu from "./SideMenu";
import { useState } from "react";
import { useStateValue } from "../StateProvider";
function Header() {
  const [{ basket }] = useStateValue();
  const [translateX, settranslateX] = useState("-150vw");
  function handelSideMenuDisplay() {
    translateX === "-150vw" ? settranslateX("0") : settranslateX("-150vw");
  }
  return (
    <div>
      <SideMenu display={translateX} handelDisplay={handelSideMenuDisplay} />
      <nav className="flex navbar">
        <div
          className="hamburger display-toggle"
          onClick={handelSideMenuDisplay}
        >
          <MenuIcon />
        </div>
        <Link to="/">
          <div className="logo">
            <img src="./logo.png" alt="" />
          </div>
        </Link>
        <div className="log">
          Hello <br />
          <span className="bold">
            <i className="fas fa-map-marker-alt"></i>
            Select your address
          </span>
        </div>
        <form className="flex">
          <input type="text" placeholder="Search" />
          <button className="btn">
            <SearchIcon />
          </button>
        </form>
        <div className="flag"></div>
        <Link to="/Sign-In">
          <div className="log">
            Hello Sign in
            <br />
            <span className="bold"> Account & Lists</span>
          </div>
        </Link>
        <div className="log">
          Returns <br />
          <span className="bold ">&Orders</span>
        </div>
        <Link to="/cart">
          <div className="cart ">
            <span className="bold">
              <span className="item-count">{basket.length}</span>
              <i className="fas fa-shopping-cart fa-2x"></i>
              Cart
            </span>
          </div>
        </Link>
        <Link to="/Sign-In">
          <div className="display-toggle signIn">
            <Button>Sign In</Button>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
