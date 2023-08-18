import React from "react";
import classes from "./ChatBackground.module.css";

const ChatBackground = (props) => {
  const fun = () => {
    console.log("redirect to subscription plan section ");
  };

  const link = props.link;
  const linkMsg = (
    <div className={classes.link}>
      <a href="https://github.com/" target="_blank">
        {props.text}
      </a>
    </div>
  );
  // console.log(link);
  return link ? linkMsg : <div className={classes.chatBack}> {props.text}</div>;
};

export default ChatBackground;
