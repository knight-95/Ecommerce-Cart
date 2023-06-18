"use client";
import Link from "next/link";
import React from "react";
import useCart from "../(store)/store";
import Modal from "../Modal";
import Slider from "./Slider";

export default function Header() {
  const cartItems = useCart((state) => state.cart);
  const openModal = useCart((state) => state.openModal);
  const setOpenModal = useCart((state) => state.setOpenModal);
  console.log(cartItems);
  return (
    <div>
      <header className="sticky top-0 z-10">
        {openModal && <Modal />}
        <div class="flex flex-wrap">
          <section class="relative mx-auto">
            {/* <!-- navbar --> */}
            <nav class="flex justify-between bg-black text-white w-screen">
              <div class="px-5 xl:px-12 py-6 flex w-full items-center">
                <Link class="text-3xl font-bold font-heading" href="#products">
                  Ecommerce Cart
                </Link>
                {/* <!-- Nav Links --> */}
                <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                  <li>
                    <Link href="#products" class="hover:text-gray-400">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#products" class="hover:text-gray-400">
                      Category
                    </Link>
                  </li>
                  <li>
                    <Link href="#products" class="hover:text-gray-400">
                      Collections
                    </Link>
                  </li>
                  <li>
                    <Link href="#products" class="hover:text-gray-400">
                      Contact Us
                    </Link>
                  </li>
                </ul>
                {/* <!-- Header Icons --> */}
                <div class="hidden xl:flex items-center space-x-5 items-center">
                  <div class="flex items-center hover:text-gray-200">
                    {/* Cart Button */}
                    <div className="relative cursor-pointer group grid place-items-center">
                      {cartItems.length > 0 && (
                        <div className="absolute aspect-square pointer-events-none h-5 sm:h-6 grid place-items-center top-0 bg-blue-400 text-white rounded-full right-0 -translate-y-1/2 translate-x-1/2">
                          <p className="text-xs sm:text-sm">
                            {cartItems.length}
                          </p>
                        </div>
                      )}

                      <i
                        className="fa-solid cursor-pointer group-hover:text-slate-500 fa-cart-shopping px-2"
                        onClick={setOpenModal}
                      ></i>
                    </div>
                    {cartItems.length < 1 && (
                      <span
                        class="flex absolute -mt-5 ml-4"
                        onClick={setOpenModal}
                      >
                        <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75 hover:cursor-pointer"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500 hover:cursor-pointer"></span>
                      </span>
                    )}
                  </div>
                  {/* <!-- Sign In / Register      --> */}
                  <a class="flex items-center hover:text-gray-200" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 hover:text-gray-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* <!-- Responsive navbar --> */}
              <a class="xl:hidden flex mr-6 items-center" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span class="flex absolute -mt-5 ml-4">
                  <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span>
              </a>
              <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </a>
            </nav>
          </section>
        </div>
      </header>
      <Slider/>
    </div>
  );
}
