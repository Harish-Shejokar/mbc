import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={classes.header}>
        <img
          src="https://framerusercontent.com/images/3V29MUi1k1kkgLu7NiPpvnxT8.png"
          alt="Endless"
          width="46"
          height="46"
          className="d-inline-block align-top"
        />
      </div>
    </>
  );
};

export default Header;
