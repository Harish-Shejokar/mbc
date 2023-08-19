import React from "react";
import classes from "./FourthSection.module.css";
import star from "../../assets/star.png";

const FourthSection = () => {
  return (
    <section className={classes.fourthSection}>
      <div className={classes.fourthMain}>
        <h2 className={classes.fourthh2}>How we can help you</h2>
        <p className={classes.fourthPara}>
          We know our weaknesses, and we know our strengths. So we leave no room
          for disappointment by only designing you what we excel at—and enjoy
          most.
        </p>

        <div className={classes.fourthList}>
          <ul className={classes.firstUl}>
            <li>Logo design</li>
            <li>Visual identity</li>
            <li>Brand guides</li>
            <li>Web apps</li>
            <li>Mobile apps</li>
          </ul>
          <ul>
            <li>Landing pages</li>
            <li>Design system</li>
            <li>Social assets</li>
            <li>Pitch decks</li>
            <li>Icons</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
