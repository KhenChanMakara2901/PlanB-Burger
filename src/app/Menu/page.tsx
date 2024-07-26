"use client";
import Team from "@/src/components/Team-sections/Team";
import { data } from "./data.js";
import React, { useState } from "react";
import Link from "next/link";
import Book from "@/src/components/Booking/Book";
export default function Page() {
  const [food, setFoods] = useState(data);
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-white font-bold font-Pro text-xl text-center -mt-12  ">
        ☆ FULL LUNCH AND DINNER MENU ☆ <br />
        <span className="text-yellow-500 text-3xl">
          ✘Traditional Food Cuisine✘
        </span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-between animate-slide-in">
        <div>
          <p className="font-bold text-zinc-300 font-Pro">Category</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 bg-white border-yellow-900 text-yellow-900 hover:bg-yellow-600 hover:text-gray-900 font-Pro"
            >
              All
            </button>
            <button
              onClick={() => filterType("drink")}
              className="m-1 bg-white border-yellow-900 text-yellow-900 hover:bg-yellow-600 hover:text-gray-900 font-Pro"
            >
              Drink
            </button>
            <button
              onClick={() => filterType("food")}
              className="m-1 bg-white border-yellow-900 text-yellow-900 hover:bg-yellow-600 hover:text-gray-900 font-Pro"
            >
              Food
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 bg-white border-yellow-900 text-yellow-900 hover:bg-yellow-600 hover:text-gray-900 font-Pro"
            >
              Burger
            </button>
            <button
              onClick={() => filterType("khmer food")}
              className="m-1 bg-white border-yellow-900 text-yellow-900 hover:bg-yellow-600 hover:text-gray-900 font-Pro"
            >
              Other
            </button>
          </div>
        </div>
        <div>
          <p className="font-bold text-zinc-300 font-Pro">Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 bg-white border-yellow-900 text-yellow-900 hover:bg-yellow-600 hover:text-gray-900 font-Pro"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 bg-white border-yellow-900 text-yellow-900 hover:bg-yellow-600 hover:text-gray-900 font-Pro"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 bg-white border-yellow-900 text-yellow-900 hover:bg-yellow-600 hover:text-gray-900 font-Pro"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 bg-white border-yellow-900 text-yellow-900 hover:bg-yellow-600 hover:text-gray-900 font-Pro"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      <Link href="/AddCard">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {food.map((item, index) => (
            <div
              key={index}
              className="border bg-white text-yellow-800 shadow-lg hover:scale-110 duration-300 rounded-3xl"
            >
              <picture>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[200px] object-cover rounded-t-3xl"
                />
              </picture>
              <div className="flex justify-between px-2 py-4">
                <p className="font-abc">{item.name}</p>
                <p>
                  <span className="bg-black text-white p-1 rounded-full">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Link>
      <Team />
      <Book />
    </div>
  );
}
