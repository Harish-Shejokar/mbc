import React from "react";
import classes from "./SecondChat.module.css";
import ChatBackground from "../ChatBackground";
import UserFace from "../UserFace";

const SecondChat = () => {
  return (
    <div className={classes.SecondChat}>
      <ChatBackground text="Daryl again." />
      <ChatBackground text="Our goal is to make you a leader in your industry." />
      <ChatBackground text="So if you're not serious, close your tab." />
      <ChatBackground text="We only want to work with those who want to level up through the use of great design." />
      <ChatBackground text="We want to make your competition irrelevant." />
      <ChatBackground text="Honestly, I'll be disappointed if we don't." />
      <UserFace text="3m ago" />
      <ChatBackground text="I've been designing for 20 years." />
      <ChatBackground text="I've seen it all—the good, and the bad." />
      <ChatBackground text="Honestly, way too much of the bad." />
      <ChatBackground text="Great design takes focus, thought and care." />
      <ChatBackground text="People can determine within seconds if you're worth their time just by looking at your design." />
      <ChatBackground text="It's the first thing people see." />
      <ChatBackground text="Make it count." />
      <UserFace text="2m ago" />
      <ChatBackground text="Want to make a good first impression?" />
      <ChatBackground link={true} text="See Subscription now" />
      <UserFace text="now" />
    </div>
  );
};

export default SecondChat;
