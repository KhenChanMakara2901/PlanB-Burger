"use client";
import React from "react";
export default function Book() {
  return (
    <div className="max-w-[1640px] px-4 py-1">
      <section className="bg-white dark:bg-white rounded-3xl">
        <div className="container px-6 py-12 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-6">
            <div className="lg:w-1/2 lg:mx-6">
              <h1 className="text-5xl font-Text text-yellow-500 capitalize lg:text-5xl">
                RESERVATION——
                <span className="font-Text text-gray-950">
                  <br /> Book A Table Online
                </span>
              </h1>
              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <span className="mx-2 text-white text-xl truncate w-72 dark:text-gray-950 font-Pro">
                    📍 Sen Sok Tek Tla Phnum Penh 711-2880 Nulla St. Mankato
                    Mississippi 96522
                  </span>
                </p>
                <p className="flex items-start -mx-2">
                  <span className="mx-2 text-gray-700 text-xl truncate w-72 dark:text-gray-950 font-Pro">
                    ☎︎ (+855) 71-325 9328
                  </span>
                </p>
                <p className="flex items-start -mx-2">
                  <span className="mx-2 text-gray-700 text-xl truncate w-72 dark:text-gray-950 font-Pro">
                    📩 khenchannmakara@example.com
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                <form className="mt-6">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200 font-Text">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-gray-900 dark:border-gray-700 focus:border-yellow-500 dark:focus:border-yellow-500 focus:ring-yellow-500 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200 font-Text">
                      Date & Time
                    </label>

                    <input
                      type="datetime-local"
                      placeholder="Date"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-white bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-gray-900 dark:border-gray-700 focus:border-yellow-500 dark:focus:border-yellow-500 focus:ring-yellow-500 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200 font-Text">
                      No.
                    </label>

                    <select
                      id="People"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-yellow-500 dark:text-gray-900 dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                    >
                      <option>Choose a People</option>
                      <option value="text">People 1</option>
                      <option value="text">People 2</option>
                      <option value="text">People 3</option>
                      <option value="Text">More People</option>
                    </select>
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200 font-Text">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email@example.com"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200 font-Text">
                      Special Request
                    </label>
                    <textarea
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-white dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder=" Special Request"
                    ></textarea>
                  </div>

                  <button className="w-full px-6 py-3 mt-6 text-sm font-Pro tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    BOOK NOW
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
