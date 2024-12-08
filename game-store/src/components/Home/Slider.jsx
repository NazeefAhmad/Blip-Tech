import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import sliderImg from "../lib/sliderImg.js";

{
  /* <MdKeyboardArrowLeft />
    <MdKeyboardArrowRight /> */
}

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = sliderImg.length;
  useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentSlide( (currentSlide+1)%length );
    }, 4000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide])
  
  return (
    <>
    <div className="relative custom-shadow">
      {/* <MdKeyboardArrowLeft className="arrow-btn start-0" />
      <MdKeyboardArrowRight className="arrow-btn end-0" /> */}
      {sliderImg.map((img, index) => (
        <img
          key={index}
          src={img.url}
          alt="hero-image"
          className={`${currentSlide === index ? "block" : "hidden"} select-none`}
        />
      ))}
      </div>
      <div className=" flex items-center justify-center gap-8 pt-8">
        {
            [...Array(sliderImg.length)].map((_, index)=>{
                return <span key={index} className={`rounded-full  bg-white w-[6px] h-[6px] ${currentSlide === index ? "opacity-100" : "opacity-20"}`}></span>
            })
        }
      </div>
    </>
  );
};

export default Slider;
