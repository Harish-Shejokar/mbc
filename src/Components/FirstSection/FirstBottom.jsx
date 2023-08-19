import React from "react";
import classes from "./FirstBottom.module.css";

const FirstBottom = () => {
  return (
    <div>
      <div className={classes.firstBtmMain}>
        <button className={classes.firstBtn}>Subscribe to a plan</button>
        <div className={classes.firstHour}>
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/128/9972/9972921.png"
              alt="loading"
            />
          </span>
          <span className={classes.hourText}>2 spots left</span>
        </div>
      </div>

      {/* // other section */}
      <div className={classes.firstMsg}>
        <div>
          <img
            src="https://framerusercontent.com/images/dDT7rTFwSOiTnRKso0gdfFWwU.png"
            alt="loding"
          />
        </div>
        <div className={classes.firstMsgText}>
          <span>You sir are a gigachad.</span>
          <span style={{color:"gray"}}>Joji Kun, Intuition</span>
        </div>
      </div>
    </div>
  );
};

export default FirstBottom;
