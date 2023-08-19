import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.headerSection}>
        <div className={classes.headerMain}>
          <img
            src="https://framerusercontent.com/images/3V29MUi1k1kkgLu7NiPpvnxT8.png"
            alt="Endless"
            width="46"
            height="46"
            className="d-inline-block align-top"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
