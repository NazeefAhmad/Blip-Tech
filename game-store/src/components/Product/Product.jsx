import React, { useState, useEffect } from "react";
import AddToCart from "../Buttons/AddToCart";
import AddToWishList from "../Buttons/AddToWishList";
import parse from "html-react-parser";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading.jsx";

const Product = () => {
  const { id } = useParams();
  const [gameInfo, setGameInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
  const API_URL = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;

  const getGameInfo = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(API_URL);
      setGameInfo(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGameInfo();
  }, []);

  //* Gradient style for background where price is displayed
  const bgGradientStyle = {
    background: "linear-gradient(to left, #64748b, #373d4e)",
  };
  
  //* Gradient style for underline
  const underLineGradient = {
    background: "linear-gradient(to right, #0c4a6e, transparent)",
  };


  let r,
    number,
    afterDecimal,
    remaining,
    cleanDescription,
    pcRequirements,
    minimum,
    recommended;

  //* Do the following after receiving response i.e. after loading is finished

  if (!isLoading) {
    r = gameInfo.rating;
    number = Math.floor(r);
    afterDecimal = Math.round((r - number) * 10) / 10;
    remaining = Math.floor(5 - r);
    cleanDescription = gameInfo.description.replace(/\n/g, "<br />");

    //? Check if game is available for PC
    pcRequirements = gameInfo.platforms.filter(
      (platformItem) => platformItem.platform.name === "PC"
    );

    //? Check if PC requirements are mentioned for the game otherwise display that requirements are not available
    if (pcRequirements.length !== 0) {

      //? The requirements key should not be empty
      minimum =
        Object.keys(pcRequirements[0].requirements).length === 0
          ? "Minimum requirements not available"
          : pcRequirements[0].requirements.minimum;
      recommended =
        Object.keys(pcRequirements[0].requirements).length === 0
          ? "Recommended requirements not available"
          : pcRequirements[0].requirements.recommended;
    } else {
      minimum = "Minimum requirements not available";
      recommended = "Recommended requirements not available";
    }
  }

  return (
    <main className="max-w-[1280px] mx-auto px-4 py-8 bg-[#1f2937] text-white min-h-[100vh]">
      <section className="lg:px-20">
        <h2 className="text-2xl font-bold mb-2">
          {!isLoading && gameInfo.name}
        </h2>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <div className=" flex flex-col items-center gap-6 lg:flex-row bg-[rgba(0,0,0,0.35)]">
              <div className="lg:w-[50%]">
                <img
                  src={gameInfo.background_image}
                  className="w-[100%]"
                  alt="game-image"
                />
              </div>
              <div className=" flex flex-col gap-2 justify-between p-2 w-[100%] lg:w-[45%] ">
                <div>
                  <p className="flex justify-between">
                    <span>Developer:</span>
                    <span>
                      {gameInfo.developers !== null
                        ? gameInfo.developers.map((dev) => dev.name).join(", ")
                        : "Unknown"}
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span>Publisher:</span>
                    <span>
                      {gameInfo.publishers !== null
                        ? gameInfo.publishers.map((pub) => pub.name).join(", ")
                        : "Unknown"}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="flex justify-between">
                    <span>Release Date:</span>
                    <span>{gameInfo.released}</span>
                  </p>
                </div>
                <div>
                  <p className="flex justify-between">
                    <span>Audience Rating:</span>
                    <span className="flex text-orange-500 ">
                      {[...Array(number)].map((_, index) => (
                        <FaStar key={index} />
                      ))}
                      {afterDecimal != 0 && <FaStarHalfAlt />}
                      {remaining > 0 &&
                        [...Array(remaining)].map((_, index) => (
                          <FaRegStar key={index} />
                        ))}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="flex justify-between">
                    <span>ESRB Rating:</span>
                    <span>
                      {gameInfo.esrb_rating &&
                      gameInfo.esrb_rating.name !== null
                        ? gameInfo.esrb_rating.name
                        : "Rating Not Available"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="py-4 px-2 mb-8 bg-[rgba(0,0,0,0.1)]">
              <AddToWishList
                id={gameInfo.id}
                name={gameInfo.name}
                price={404}
                imgSrc={gameInfo.background_image}
              />
            </div>

            <div
              style={bgGradientStyle}
              className=" px-3 py-4 rounded-md flex items-center justify-between mb-8"
            >
              <p className="lg:text-xl">Buy {gameInfo.name}</p>
              <div className="flex items-center gap-4 bg-black p-1 rounded-sm">
                <p className="ml-2 min-w-fit text-xs text-gray-100 lg:text-sm">
                  &#8377; 404
                </p>
                <AddToCart
                  id={gameInfo.id}
                  name={gameInfo.name}
                  price={404}
                  imgSrc={gameInfo.background_image}
                />
              </div>
            </div>

            <div className="mb-8">
              <h3 className="uppercase">About This Game</h3>
              <hr
                style={underLineGradient}
                className="mt-1 mb-4 border-none bg-gray-600 h-0.5"
              />
              {parse(cleanDescription)}
            </div>
            <div>
              <h3 className="uppercase">PC Requirements</h3>
              <hr
                style={underLineGradient}
                className="mt-1 mb-4 border-none bg-gray-600 h-0.5"
              />
              <p className="mb-4">{minimum}</p>
              <p>{recommended}</p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Product;
