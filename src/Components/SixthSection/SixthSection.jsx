import React from "react";
import classes from "./SixthSection.module.css";
import SixthCardOne from "./SixthCardOne";
import SixthTwo from "./SixthTwo";
import SixthThird from "./SixthThird";
import SixthFourth from "./SixthFourth";

const SixthSection = () => {
  return (
    <section className={classes.sixthSection}>
      <div className={classes.sixthMain}>
        <h2>Plans</h2>
        <p>
          Get unmatched design for a fraction of the cost from world-class
          designers with over 20 years experience.
        </p>
        <SixthCardOne />
        <SixthTwo />
        <SixthThird />
        <SixthFourth />
      </div>
    </section>
  );
};

export default SixthSection;
