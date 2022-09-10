import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MainComponent from "./components/Main-Component";
import Banner from "./components/Banner";
import UseLog from "./components/UseLog";
import { auth } from "./firebase";
function App(props) {
  const [LoginStatus, SetLoginStatus] = useState(false);
  const [username, setusername] = useState("");
  const [user, setuser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        SetLoginStatus(true);
        setuser(authUser);

        if (authUser.displayName) {
        } else {
          return authUser.updateProfile({
            displayName: username,
          });
        }
      } else {
        //user is logged out....
        setusername("");
      }
    });
    return () => {
      //perform some clean up action
      unsubscribe();
    };
  }, [user, username]);

  function handelLoginStatus(status) {
    SetLoginStatus(status);
  }

  return (
    <div>
      <Header LoginStatus={LoginStatus} handelLoginStatus={handelLoginStatus} />

      {LoginStatus ? (
        <div>
          <Banner />
          <MainComponent />
        </div>
      ) : (
        <UseLog handelLoginStatus={handelLoginStatus} />
      )}
    </div>
  );
}

export default App;
