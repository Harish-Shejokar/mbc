import React from "react";
import ChatBackground from "../ChatBackground";
import classes from "./Chat.module.css";
import UserFace from "../UserFace";

const Chat = () => {

 

  return (
    <div className={classes.chat}>
      <ChatBackground text="Hey, Daryl here, founder of Endless" />
      <ChatBackground text="So what's Endless? Good question." />
      <ChatBackground text="Endless is an unlimited design agency." />
      <ChatBackground text="See, unlike relying on freelancers or spending months trying to hire the perfect designer, Endless keeps it simple and offers unlimited design requests and revisions for a flat monthly fee." />
      <ChatBackground text="You can create as many design requests as you want and we'll close them off one by one within a few business days on average." />
      <UserFace text="3m ago" />
      <ChatBackground text="It gets better." />
      <ChatBackground text="There's no calls to take up your time." />
      <ChatBackground text="No boring lengthy contracts to sign." />
      <ChatBackground text="You can chat directly to us anytime in Slack." />
      <ChatBackground text="You can even pause or cancel your subscription at any time should your need for design work dry up." />
      <ChatBackground text="It's time to change things up." />
      <UserFace text="1m ago" />
      <ChatBackground  link={true} text="See subscription plans." />
      <UserFace text="now" />
    </div>
  );
};

export default Chat;
