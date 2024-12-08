import React from "react";
import Slider from "./Slider.jsx";

const Hero = () => {
  return (
    <section className=" w-[100%] flex flex-col-reverse mb-32 items-center justify-between px-2 lg:flex-row  lg:px-20 ">
      <div className="mt-8 lg:mt-0">
        <h2 className=" text-2xl text-center font-bold mt-4 lg:text-4xl lg:mt-0 lg:text-left ">
          Summer Sale
        </h2>
        <p className="text-center my-5 lg:text-2xl lg:text-left ">
          Upto 50% off!
        </p>
        <small className="text-center lg:text-sm lg:text-left">
          Offer valid till 30th April @ Midnight
        </small>
      </div>
      <div className=" lg:w-[60%]">
        <Slider />
      </div>
    </section>
  );
};

export default Hero;
