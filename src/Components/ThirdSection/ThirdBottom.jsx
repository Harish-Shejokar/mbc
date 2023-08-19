import React from "react";
import classes from "./ThirdBottom.module.css";

import first from "../../assets/first.png";
import second from "../../assets/second.png";
import thirdImg from "../../assets/third.png";
import fourthImg from "../../assets/fourth.png";

const ThirdBottom = () => {
  return (
    <div>
      <div className={classes.thirdBtmMain}>
        <div>
          <img className={classes.thirdImg} src={first} alt=".." />
          <h2
            className={classes.thirdh2}
            style={{ color: "rgb(171, 69, 222)" }}
          >
            Choose a package
          </h2>
          <p className={classes.thirdPara}>
            Select the package that best suits your needs. You'll be onboarded
            on how to get the most out of Endless.
          </p>
        </div>
        <div>
          <img className={classes.thirdImg} src={second} alt=".." />
          <h2
            className={classes.thirdh2}
            style={{ color: "rgb(51, 131, 250)" }}
          >
            Make a request
          </h2>
          <p className={classes.thirdPara}>
            Write up your first design request and receive a first draft within
            2-3 business days on average. Sometimes faster.
          </p>
        </div>
      </div>

      <div className={classes.thirdBtmMain}>
        <div>
          <img className={classes.thirdImg} src={thirdImg} alt=".." />
          <h2
            className={classes.thirdh2}
            style={{ color: "rgb(223, 126, 48)" }}
          >
            Refine design
          </h2>
          <p className={classes.thirdPara}>
            Now you've got something to work with, you're free to make an
            unlimited amount of changes until it's just right.
          </p>
        </div>
        <div>
          <img className={classes.thirdImg} src={fourthImg} alt=".." />
          <h2
            className={classes.thirdh2}
            style={{ color: "rgb(17, 172, 112)" }}
          >
            Make progress
          </h2>
          <p className={classes.thirdPara}>
            All good? Great, let's move to your next request, maintain momentum
            and move you further towards your goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdBottom;
