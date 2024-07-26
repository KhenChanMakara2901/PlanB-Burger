"use client";
import React from "react";
export default function Footer() {
  return (
    <div className="max-w-full mx-auto p-4 py-2">
      <footer className="bg-gray-950 dark:bg-gray-950 rounded-3xl">
        <div className="container p-6 mx-auto">
          <div className="lg:flex">
            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                  <h3 className="uppercase text-yellow-500 font-Text text-2xl">
                    COMPANY—
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-white hover:scale-110 font-Pro"
                  >
                    ➤ Contact US
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-white  hover:scale-110 font-Pro"
                  >
                    ➤ Reservation
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-white  hover:scale-110 font-Pro"
                  >
                    ➤ Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-white  hover:scale-110 font-Pro"
                  >
                    ➤ Terms & Condition
                  </a>
                </div>

                <div>
                  <h3 className="uppercase text-yellow-500 font-Text text-2xl">
                    Contact—
                  </h3>

                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-white hover:scale-110 font-Pro"
                  >
                    ⚲ 123 Street,Sen Sok,PP
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-white hover:scale-110 font-Pro"
                  >
                    📞 (+855) 71 345 67890
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-white hover:scale-110 font-Pro"
                  >
                    ✉️ info@example.com
                  </a>
                </div>

                <div>
                  <h3 className="uppercase text-yellow-500 font-Text text-2xl">
                    Opening—
                  </h3>
                  <p className="text-white font-Pro">Monday - Saturday</p>
                  <p className="text-white font-Pro">09AM - 09PM</p>
                  <p className="text-white font-Pro">Sunday</p>
                  <p className="text-white font-Pro">10AM - 08PM</p>
                </div>

                <div>
                  <h3 className="uppercase text-yellow-500 font-Text text-2xl">
                    Newsletter—
                  </h3>
                  <p className="text-white font-Pro">
                    Far far away, behind the word mountains, far from the
                    countries
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />
          <div>
            <p className="text-center text-gray-500 dark:text-gray-400 font-Pro">
              © 2024 All Rights Reserved By
              <a
                className="underline underline-offset-2 hover:text-white"
                target="-blank"
                href="https://nextjs.org/"
              >
                Next JS
              </a>
            </p>
            <p className="text-center text-gray-500 dark:text-gray-400 font-Pro">
              © Teaching by Teacher
              <a
                className="underline underline-offset-2 hover:text-white"
                target="-blank"
                href="https://t.me/Kongsun"
              >
                KONGSON
              </a>
            </p>
            <p className="text-center text-gray-500 dark:text-gray-400 font-Pro">
              © Create By
              <a
                className="underline underline-offset-2 hover:text-white"
                target="-blank"
                href="https://t.me/RupidSeVen"
              >
                KHEN CHANNMAKARA
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
