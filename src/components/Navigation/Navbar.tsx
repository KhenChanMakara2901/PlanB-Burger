"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { TbHomeFilled } from "react-icons/tb";
import { FaUsers, FaHome } from "react-icons/fa";
import {
  MdRestaurantMenu,
  MdDeliveryDining,
  MdOutlineRestaurantMenu,
  MdBookmarkAdded,
  MdRealEstateAgent,
} from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import Link from "next/link";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 align-baseline">
      <div className="flex item-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer mt-2">
          <AiOutlineMenu
            size={30}
            className="text-white xl:hidden lg:hidden mt-2 mr-0"
          />
        </div>

        <IoFastFoodSharp className="mt-1 -ml-0 text-yellow-500 " size={40} />
        <h1 className="text-2xl xl:text-2xl sm:text-3xl lg:text-2xl px-2 mt-3 text-yellow-500 font-Logo animate-slide-in">
          Plan B <span className="font-Logo text-white">Burger </span>
        </h1>
        <div className="hidden lg:flex justify-center ml-40 animate-slide-in">
          <ul className="flex space-x-8 text-yellow-600 -mt-0">
            <li className="text-xl py-4 flex">
              <FaHome size={25} className="mr-2" />
              <Link
                className="hover:underline hover:scale-105 font-abc"
                href="/"
              >
                Home
              </Link>
            </li>

            <li className="text-xl py-4 flex ">
              <MdRestaurantMenu size={25} className="mr-2" />
              <Link
                className="hover:underline hover:scale-105  font-abc"
                href="/Menu"
              >
                Menu
              </Link>
            </li>

            <li className="text-xl py-4 flex ">
              <MdRealEstateAgent size={25} className="mr-2" />
              <Link
                className="hover:underline hover:scale-105  font-abc"
                href="/State"
              >
                State
              </Link>
            </li>
            <li className="text-xl py-4 flex ">
              <MdDeliveryDining size={27} className="mr-2" />
              <Link
                className="hover:underline hover:scale-105 font-abc"
                href="/"
              >
                Delivery
              </Link>
            </li>
            <li className="text-xl py-4 flex ">
              <IoIosContact size={27} className="mr-2" />
              <Link
                className="hover:underline hover:scale-105  font-abc"
                href="/Contact"
              >
                Contact
              </Link>
            </li>
            <li className="text-xl py-4 flex ">
              <RiCustomerService2Fill size={27} className="mr-2" />
              <Link
                className="hover:underline hover:scale-105  font-abc"
                href="/Service"
              >
                Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <button className=" border-x-white text-yellow-600 hidden md:flex items-center py-2 rounded-full font-abc  hover:bg-white underline underline-offset-2 animate-slide-in">
        <FaUsers size={20} className="mr-2" />
        <Link className="scale-105" href="/SignIn">
          User
        </Link>
      </button>
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        " "
      )}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={25}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-xl p-4 text-yellow-600  font-Logo">
          <span className="font-Logo">Food B Burger</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-yellow-600">
            <li className="text-xl py-4 flex ">
              <TbHomeFilled size={28} className="mr-2" />
              <Link
                className="hover:scale-95 hover:underline font-abc"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="text-xl py-4 flex ">
              <MdOutlineRestaurantMenu size={28} className="mr-2" />
              <Link
                className="hover:scale-95 hover:underline font-abc"
                href="/Menu"
              >
                Menu
              </Link>
            </li>
            <li className="text-xl py-4 flex ">
              <MdRealEstateAgent size={25} className="mr-2" />
              <Link
                className=" hover:scale-95 hover:underline font-abc"
                href="/State"
              >
                State
              </Link>
            </li>
            <li className="text-xl py-4 flex ">
              <MdDeliveryDining size={30} className="mr-2" />
              <Link
                className=" hover:scale-95 hover:underline font-abc"
                href="/"
              >
                Delivery
              </Link>
            </li>
            <li className="text-xl py-4 flex ">
              <IoIosContact size={30} className="mr-2" />
              <Link
                className="hover:scale-95 hover:underline font-abc"
                href="/Contact"
              >
                Contact Us
              </Link>
            </li>
            <li className="text-xl py-4 flex ">
              <RiCustomerService2Fill size={30} className="mr-2" />
              <Link
                className="hover:scale-95 hover:underline font-abc"
                href="/Service"
              >
                Service
              </Link>
            </li>
            <li className="text-xl py-4 flex ">
              <MdBookmarkAdded size={30} className="mr-2" />
              <Link
                className=" hover:scale-95 hover:underline font-abc"
                href="/Booking"
              >
                Booking
              </Link>
            </li>
            <li className="text-xl py-4 flex ">
              <FaUsers size={30} className="mr-2" />
              <Link
                className=" hover:scale-95 hover:underline font-abc"
                href="/SignIn"
              >
                User
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
