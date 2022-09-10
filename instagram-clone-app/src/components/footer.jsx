import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
function Footer(props) {
  function Upload() {
    return props.updateUpload("true");
  }
  function Uploadfalse() {
    props.updateUpload(false);
  }
  return (
    <div>
      {props.islogin && (
        <footer className="flex">
          <HomeIcon onClick={Uploadfalse} />
          <i className="fab fa-facebook-messenger"></i>
          <div onClick={Upload}>
            <i className="far fa-plus-square"></i>
          </div>

          <i className="far fa-heart"></i>
          <AccountCircleIcon />
        </footer>
      )}
    </div>
  );
}

export default Footer;
