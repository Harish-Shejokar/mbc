import React from 'react'
import classes from "./UserFace.module.css";

const UserFace = (props) => {
  return (
    <div className={classes.userFace}>
      <div>
        <img
          src="https://framerusercontent.com/images/po0U5jwcCg54pSyzwWvVZ23AnE.png"
          alt="user"
        />
      </div>
      <div className={classes.minText}>{props.text}</div>
    </div>
  );
}

export default UserFace
