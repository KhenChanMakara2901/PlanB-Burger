"use client";
import React from "react";
import { categories } from "../Data/data.js";
export default function Category() {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-white font-Pro text-5xl text-center">
        ✳ Traditional Food Cuisine ✳
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 mt-8">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white  p-4 flex justify-between items-center rounded-3xl"
          >
            <h2 className="font-abc sm:text-xl">{item.name}</h2>
            <picture>
              <img src={item.image} alt={item.name} className="w-20" />
            </picture>
          </div>
        ))}
      </div>
    </div>
  );
}
