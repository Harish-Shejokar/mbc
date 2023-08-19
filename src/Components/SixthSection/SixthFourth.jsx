import React from "react";
import Card from "../Card";
import classes from "./SixthFouth.module.css";
import SixthCont from "./SixthCont";

const SixthFourth = () => {
  let data = [
    { id: "1", text: "Why Endless instead of hiring?" },
    { id: "2", text: "How quickly will recieve a design?" },
    { id: "3", text: "Why no calls of meetings?" },
    { id: "4", text: "What if i don't like design?" },
    { id: "5", text: "Is there a request limit?" },
    { id: "6", text: "How do i change my subscription?" },
    { id: "7", text: "why design software do you use?" },
    { id: "8", text: "Are there any refunds?" },
  ];
  return (
    <div className={classes.sixthFour}>
      {data.map((item) => {
       return (
         <Card key={item.id}>
           <SixthCont id={item.id} text={item.text} />
         </Card>
       );
      })}
    </div>
  );
};

export default SixthFourth;
