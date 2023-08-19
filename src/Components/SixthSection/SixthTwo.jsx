import React from 'react'
import classes from "./SixthCardOne.module.css";
import Card from '../Card'
import diamond from "../../assets/diamond.png";

const SixthTwo = () => {
  return (
    <Card>
      <img className={classes.sixthImg} src={diamond} alt=".." />
      <div className={classes.sixthHeading}>
        <span>Enterprise</span>
      </div>
      <p>
        Branding, apps, entire websites—you name it—for a custom fee delivered
        in milestones.
      </p>
      <div className={classes.allBtn}>
        <button style={{ marginLeft: "0" }} className={classes.chatBtn}>
          Request quote
        </button>
      </div>
      <div className={classes.sixthList}>
        <li>Fixed-scope of work</li>
        <li>Delivered in milestones</li>
        <li>Project planning</li>
      </div>
    </Card>
  );
}

export default SixthTwo
