import React from "react";
import Image from "../../Assets/google-logo.png";
import Classes from "./Home.module.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import SearchBar from "../Ui/SearchBar";
function Home() {
  localStorage.clear();
  return (
    <div className={Classes.home + " flex"}>
      <div className={Classes.header + " flex"}>
        <div>
          <span>Gmail</span>Images<span></span>
        </div>
        <AppsIcon />
        <Avatar className={Classes.Avatar} />
      </div>
      <div className={Classes.logo}>
        <img src={Image} alt="google logo" />
      </div>
      <SearchBar />
      <div className={Classes.home_box + " flex"}>
        <div className="flex">
          <button className={Classes.btn}>Google Search</button>
          <button className={Classes.btn}>I'm Feeling Lucky</button>
        </div>
        <div>
          Google offered in :
          <span>
            हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
