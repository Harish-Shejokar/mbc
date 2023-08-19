import React from "react";
import classes from "./FifthCard.module.css";

const FifthCard = (props) => {
  return (
    <div>
      <div className={classes.fifthBtm}>
        <img className={classes.fifthImg} src={props.logo} />
        <div className={classes.fifthHead}>{props.heading}</div>
        <p className={classes.fifthPara}>{props.text}</p>
      </div>
    </div>
  );
};

export default FifthCard;
