import React from 'react'
import classes from "./SixthCardOne.module.css";
import Card from "../Card";
import loader from "../../assets/loader.png";
// import hourGlass from "../../assets/hourGlass.png";

const SixthCardOne = () => {
  return (
    <Card>
      <img className={classes.sixthImg} src={loader} alt=".." />
      <div className={classes.sixthHeading}>
        <span>Monthly</span>
        <span className={classes.sixthTop}>$6,995/mo</span>
      </div>
      <p>
        Perfect for those with an on-going need for design work and a desire to
        grow with unlimited design.
      </p>
      <div className={classes.allBtn}>
        <button className={classes.subscribeBtn}>Subscrible</button>
        <button className={classes.chatBtn}>Chat</button>
      </div>
      <li className={classes.hourGlass}>2 spots left</li>
      <div className={classes.sixthList}>
        <li>Unlimited requests</li>
        <li>Unlimited revisions</li>
        <li>2-3 day turnaround</li>
        <li>Paired with designer</li>
        <li>Managed via Slack</li>
        <li>Pause or cancel anytime</li>
        <li>Invite your team</li>
      </div>
    </Card>
  );
}

export default SixthCardOne
