import React from "react"
import Hero from "./Hero.jsx";
import CardSlider from "./CardSlider.jsx";
import games from "../lib/games.js";
import newGames from "../lib/newGames.js";

const Home = () => {
  return (
    <>
      <main className="max-w-[1280px] mx-auto lg:px-4 py-8 bg-[#1f2937] text-white ">
        
        <Hero />
         
        <CardSlider title={"Special Offers"} games={games} />

        <CardSlider title={"This Weeks Hits"} games={games} />

        <CardSlider title={"Top New Releases"} games={newGames} />

      </main>
    </>
  );
};

export default Home;
