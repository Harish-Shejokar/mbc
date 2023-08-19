import React, { useState } from "react";
import plusImg from "../../assets/plus.png";
import minusImg from "../../assets/Minus.png";
import classes from "./SixthCont.module.css";

const SixthCont = ({ text ,id}) => {
  const [isOpen, setOpen] = useState(false)
  
  const openTheState = () => {
    setOpen((prev) => !prev);
  }
  // console.log(isOpen);


  return (
    <div onClick={openTheState} className={classes.sixthCont}>
      <div className={classes.sixthContMain}>
        <span>{text}</span>
        {!isOpen && <img className={classes.plus} src={plusImg} alt="" />}
        {isOpen && <img className={classes.plus} src={minusImg} alt="" />}
      </div>
      {isOpen && (
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it..
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default SixthCont;
