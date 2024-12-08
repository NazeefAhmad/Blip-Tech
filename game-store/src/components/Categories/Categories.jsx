import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import categoryList from "../lib/categoryList.js";

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <main className="max-w-[1280px] mx-auto px-4 py-8 bg-[#1f2937] text-white min-h-[100vh]">
      <section className="lg:px-20">
        <h2 className="text-2xl font-bold mb-2">Categories</h2>
        <h3 className=" text-sm">Browse games by Category.</h3>
        <div className="my-4">
          <input
            type="text"
            value={searchQuery}
            placeholder="Search category"
            className="w-[100%] outline-none px-3 py-2 rounded-md bg-gray-900"
            onChange={handleChange}
          />
        </div>
        <div className=" p-2 flex flex-wrap gap-4">
          {categoryList.map((item) => {
            if (!searchQuery || item.name.toLowerCase().startsWith(searchQuery.toLowerCase())) {
              return (
                <CategoryItem
                  key={item.id}
                  category={item.name}
                  slug={item.slug}
                  startColor={item.startColor}
                  imgURL={item.imgURL}
                />
              );
            }
            return null;
          })}
        </div>
      </section>
    </main>
  );
};

export default Categories;
