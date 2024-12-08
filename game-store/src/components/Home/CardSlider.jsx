import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CardSlider = ({ title , games }) => {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };
  return (
    <section className=" w-[100%] mb-32">
      <div className="w-[90%] mx-auto">
        <h2 className="mb-3 pl-0 text-center text-xl lg:pl-4 lg:text-left">
          {title}
        </h2>
        <div className="w-[100%]">
        <Slider {...settings}>
        {games.map((game) => {
            return (
              <Card
                key={uuidv4()}
                id={game.id}
                name={game.name}
                url={game.url}
                price={game.price}
              />
            );
          })}
        </Slider>
        </div>
      </div>
    </section>
  );
};

export default CardSlider;

