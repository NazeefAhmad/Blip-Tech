import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item.jsx";
import axios from "axios";
import Loading from "../Loading/Loading.jsx";

const CategoryPage = () => {
  const { category } = useParams();
  const [gamesByGenre, setGamesByGenre] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
  const API_URL = `https://api.rawg.io/api/games?key=${API_KEY}&genres=${category}`;

//* If data has not been received from the api, then loading state is true
//* After receiving the data, loading state is set to false.

  const getGamesByGenre = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(API_URL);
      setGamesByGenre(response.data.results);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGamesByGenre();
  }, [category]);

  return (
    <main className="container mx-auto px-4 py-8 bg-[#1f2937] text-white min-h-[100vh]">
      <section className="lg:px-20">
        <h2 className="text-2xl font-bold capitalize">{category} Games</h2>
        <hr className="my-4 border-none bg-gray-600 h-0.5" />
        <div>
          {isLoading && <Loading />}
          {gamesByGenre.map((game) => {
            return (
              <Item
                key={game.id}
                id={game.id}
                name={game.name}
                price={404}
                imgSrc={game.background_image}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
