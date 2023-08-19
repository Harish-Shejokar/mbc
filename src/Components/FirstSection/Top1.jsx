import React from 'react'
import classes from "./Top1.module.css";

const Top1 = () => {
  return (
    <div className={classes.top1}>
      <h1 className={classes.topHeading}>
        Unlimited design support by world-class designers for a flat monthly
        fee.
      </h1>
      <div className={classes.topSecond}>
        Skip the ugly hiring process and start making design progress
        immediately by getting instant-access to industry-leading designers with
        over 20 years experience.
      </div>
    </div>
  );
}

export default Top1
