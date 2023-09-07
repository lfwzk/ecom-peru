import React from "react";
import img from "../components/images/bannerdim.png";

export const Hero = () => {
  return (
    <>
      <div>
        <img src={img} alt="" />

        <div className="hero-content text-center text-neutral-content"></div>
      </div>
    </>
  );
};
