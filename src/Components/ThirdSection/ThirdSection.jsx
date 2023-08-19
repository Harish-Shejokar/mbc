import React from "react";
import classes from "./ThirdeSection.module.css";
import ThirdBottom from "./ThirdBottom";

const ThirdSection = () => {
  return (
    <section className={classes.thirdSection}>
      <div className={classes.thirdMain}>
        <h2>How it works</h2>
        <p>
          We make it as simple as possible for you to sign up and begin making
          progress with design as soon as possible.
        </p>
        <ThirdBottom />
      </div>
    </section>
  );
};

export default ThirdSection;
