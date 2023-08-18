import React from 'react'
import classes from "./Top1.module.css";

const Top1 = () => {
  return (
    <div className={classes.top1}>
      <div className={classes.topHeading}>
        <span>World-class design.</span>
        <span>
          <strong style={{color:"black"}}>Endless</strong> requests.
        </span>
        <span> One subscription.</span>
      </div>
      <button
        size="sm"
        className={classes.topBtn}
      >
        <span className={classes.redSpot}></span>
        Limited Availability
      </button>
    </div>
  );
}

export default Top1
