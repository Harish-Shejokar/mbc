import React from "react";
import classes from "./Album.module.css";

const Album = () => {
  return (
    <div className={classes.album}>
      <div className={classes.albumImg}>
        <img
          src="https://framerusercontent.com/images/se6UEYR4unrPCNZVrJVAAdIm6w.png?scale-down-to=512"
          alt="loading"
        /> 
      </div>
      <div className={classes.albumImg}>
        <img
          src="https://framerusercontent.com/images/7pWBzvt3ZRSeuA7ZXUGPP9at1Q.png?scale-down-to=1024"
          alt="loading"
        />
      </div>
      <div className={classes.albumImg}>
        <img
          src="https://framerusercontent.com/images/Bp4caHbalvi1Hr51twH6cwAx2qI.png?scale-down-to=512"
          alt="loading"
        />
      </div>
      <div className={classes.albumImg}>
        <img
          src="https://framerusercontent.com/images/4PFpaB82G4mlCAIdo55Cu8HdCs.png?scale-down-to=1024"
          alt="loading"
        />
      </div>
      <div className={classes.albumImg}>
        <img
          src="https://framerusercontent.com/images/wBr7Q5FudfkOCZsk2oP50d3t84I.png?scale-down-to=512"
          alt="loading"
        />
      </div>
      <div className={classes.albumImg}>
        <img
          src="https://framerusercontent.com/images/65FgazSbsqKTDKFi5iw3zU1kAe8.png?scale-down-to=1024"
          alt="loading"
        />
      </div>
      <div className={classes.albumImg}>
        <img
          src="https://framerusercontent.com/images/doly4GL5irzr399f6F5Z0BizYs.png?scale-down-to=512"
          alt="loading"
        />
      </div>
    </div>
  );
};

export default Album;
