import React from "react";
function Header() {
  return (
    <div>
      <header className="flex">
        <div className="logo">
          <i className="fab fa-facebook-messenger"></i>Messanger
        </div>
        <div>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </header>
    </div>
  );
}

export default Header;
