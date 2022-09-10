import React from "react";
import Classes from "./Footer.module.css";
function Footer() {
  return (
    <footer className={Classes.foot}>
      <div>India</div>
      <hr />
      <div className={Classes.foot_bottom}>
        <div>
          <span>About</span>
          <span>Advertising</span>
          <span>Business</span>
          <span>How Search Works</span>
        </div>
        <div>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Settings</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
