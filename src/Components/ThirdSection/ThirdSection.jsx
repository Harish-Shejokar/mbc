import React from "react";
import classes from "./ThirdeSection.module.css";

const ThirdSection = () => {
  return (
    <section className={classes.thirdMain}>
      <div className={classes.thirdHead}>
        We only design you what we're exceptionally good at.
      </div>
      <div className={classes.para}>
        We know our weaknesses, and we know our strengths. So we leave no room
        for disappointment by only designing what we excel at.
      </div>
      <div>
        <div>
          <div>
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/128/649/649733.png"
                alt=""
              />
            </span>
            <span>Branding</span>
          </div>
          <span>Mobile apps</span>
        </div>
        <div>
          <span>Design systems</span>
          <span>Web apps</span>
        </div>
        <div>
          <span>Landing Pages</span>
          <span>Icons</span>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
