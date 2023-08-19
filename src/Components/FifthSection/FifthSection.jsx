import React from "react";
import fifthClass from "./FifthSection.module.css";
import classes from "../FourthSection/FourthSection.module.css";
import FifthCard from "./FifthCard";
import infinite from "../../assets/infi.png";
import worldClass from "../../assets/worlClass.png";
import invisibleDes from "../../assets/invisibleDesign.png";
import money from "../../assets/money.png";
import noContrst from "../../assets/noContrast.png";
import noMeeting from "../../assets/noMeeting.png";

const FifthSection = () => {
  return (
    <section>
      <div className={classes.fourthMain}>
        <h2>Why Endless</h2>
        <p>
          By subscribing to Endless you alleviate the stress of hiring a
          full-time designer and get instant-access to a highly-talented
          designer who can work on your demands instantly.
        </p>
        <div className={fifthClass.fifthMain}>
          <FifthCard
            logo={infinite}
            heading="Unlimited design"
            text="Make as many design requests as you want, whenever you want, and we'll complete them one by one."
          />
          <FifthCard
            logo={worldClass}
            heading="World-class quality"
            text=" We're highly selective on who helps out at Endless, some of our designers have over 20 years experience."
          />
        </div>
        <div className={fifthClass.fifthMain}>
          <FifthCard
            logo={invisibleDes}
            heading="Invisible design team"
            text="We're your design team, but we've never met. All of your design needs met, when you need them most."
          />
          <FifthCard
            logo={money}
            heading="Great value for money"
            text="Hiring a designer will cost you $120k+ on average per year. At just $6,995 per month we can save you $40k."
          />
        </div>
        <div className={fifthClass.fifthMain}>
          <FifthCard
            logo={noContrst}
            heading="No contracts"
            text="You pay the same every month with no surprises. Utilise us for as long as you want, and cancel any time should your needs dry up." />
          <FifthCard
            logo={noMeeting}
            heading="No meetings"
            text=" No unnecessary meetings filling up your calendar. We work async, mostly utilising direct communication."/>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
