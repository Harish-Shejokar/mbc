import React from 'react'
import classes from "./FirstSection.module.css";
import Top1 from './Top1'
import Chat from '../SeventhSection/Chat'
import FirstBottom from './FirstBottom';

const FirstSection = () => {
  return (
    <section className={classes.firstSection}>
      <div className={classes.firstMain}>
        <Top1 />
        <FirstBottom />
      </div>
    </section>
  );
}

export default FirstSection
