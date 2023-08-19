import React from "react";
import Card from "../Card";
import classes from "./SixthThird.module.css";
import ratingStar from "../../assets/ratingStar.png";

const SixthThird = () => {
  return (
    <Card>
      <div>
        <div className={classes.rating}>
          <img className={classes.ratingStar} src={ratingStar} />
          <img className={classes.ratingStar} src={ratingStar} />
          <img className={classes.ratingStar} src={ratingStar} />
          <img className={classes.ratingStar} src={ratingStar} />
          <img className={classes.ratingStar} src={ratingStar} />
        </div>
        <div className={classes.topMain}>
          <div className={classes.sixthThirdMain}>
            <div className={classes.sixthThirdImg}>
              <img
                src="https://framerusercontent.com/images/zfhUwW42zQ5cqrrpxKYfso4o.png?scale-down-to=512"
                alt=".."
              />
            </div>
            <div className={classes.userName}>
              <span>Joe Perkins </span>
              <span style={{ color: "rgb(0,0,0,0.48)" }}>Landscape</span>
            </div>
          </div>
          <p>
            I was initially skeptical of "Design-as-a-subscription", but working
            with Endless was an absolute dream. They nailed pretty much
            everything from social assets to an entire UX redesign first time,
            with no revisions needed. I was extremely impressed with both the
            quantity and quality of work that was completed.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default SixthThird;
