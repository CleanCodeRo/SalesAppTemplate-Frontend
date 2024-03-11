import React, { Component } from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import state from "../Atom/Atom";
import { useAtom } from "jotai";

const Homepage = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className=" pt-24"
      id="container">
      <Header />
      <div className="flex-1 bg-white">
        <main className="my-8">
          <div className="container mx-auto px-6">
            <div className="bg-[url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')] h-64 rounded-md overflow-hidden bg-cover bg-center">
              <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div className="px-10 max-w-xl">
                  <h2 className="text-2xl text-white font-semibold">
                    Sport Shoes
                  </h2>
                  <p className="mt-2 text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore facere provident molestias ipsam sint voluptatum
                    pariatur.
                  </p>
                  <button className="flex items-center mt-4 px-3 py-2 bg-primary-200 text-white text-sm uppercase font-medium rounded hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                    <span>Shop Now</span>
                    <svg
                      className="h-5 w-5 mx-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex mt-8 md:-mx-4">
              <div className="bg-[url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')] w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2">
                <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                  <div className="px-10 max-w-xl">
                    <h2 className="text-2xl text-white font-semibold">
                      Back Pack
                    </h2>
                    <p className="mt-2 text-gray-400">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Tempore facere provident molestias ipsam sint voluptatum
                      pariatur.
                    </p>
                    <button className="flex items-center mt-4 px-3 py-2 bg-primary-200 text-white text-sm uppercase font-medium rounded hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <span>Shop Now</span>
                      <svg
                        className="h-5 w-5 mx-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[url('https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')] w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2">
                <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                  <div className="px-10 max-w-xl">
                    <h2 className="text-2xl text-white font-semibold">Games</h2>
                    <p className="mt-2 text-gray-400">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Tempore facere provident molestias ipsam sint voluptatum
                      pariatur.
                    </p>
                    <button className="flex items-center mt-4 px-3 py-2 bg-primary-200 text-white text-sm uppercase font-medium rounded hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <span>Shop Now</span>
                      <svg
                        className="h-5 w-5 mx-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <h3 className="text-gray-600 text-2xl font-medium">Fashions</h3>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div className="bg-[url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')] flex items-end justify-end h-56 w-full bg-cover">
                    <button className="p-2 rounded-full bg-primary-200 text-white mx-5 -mb-4 hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">Chanel</h3>
                    <span className="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div className="bg-[url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')] flex items-end justify-end h-56 w-full bg-cover">
                    <button className="p-2 rounded-full bg-primary-200 text-white mx-5 -mb-4 hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">Man Mix</h3>
                    <span className="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div className="bg-[url('https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')] flex items-end justify-end h-56 w-full bg-cover">
                    <button className="p-2 rounded-full bg-primary-200 text-white mx-5 -mb-4 hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">Classic watch</h3>
                    <span className="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div className="bg-[url('https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80')] flex items-end justify-end h-56 w-full bg-cover">
                    <button className="p-2 rounded-full bg-primary-200 text-white mx-5 -mb-4 hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">woman mix</h3>
                    <span className="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <h3 className="text-gray-600 text-2xl font-medium">Fashions</h3>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div className="bg-[url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')] flex items-end justify-end h-56 w-full bg-cover">
                    <button className="p-2 rounded-full bg-primary-200 text-white mx-5 -mb-4 hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">Chanel</h3>
                    <span className="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div className="bg-[url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')] flex items-end justify-end h-56 w-full bg-cover">
                    <button className="p-2 rounded-full bg-primary-200 text-white mx-5 -mb-4 hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">Man Mix</h3>
                    <span className="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div className="bg-[url('https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')] flex items-end justify-end h-56 w-full bg-cover">
                    <button className="p-2 rounded-full bg-primary-200 text-white mx-5 -mb-4 hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">Classic watch</h3>
                    <span className="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div className="bg-[url('https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80')] flex items-end justify-end h-56 w-full bg-cover">
                    <button className="p-2 rounded-full bg-primary-200 text-white mx-5 -mb-4 hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">woman mix</h3>
                    <span className="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="grid grid-cols-6 gap-5 p-20 ">
          <div className="col-span-6 mt-5 bg-opacity-50 border bg-primary-500 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
            <div className="flex justify-center pt-4 px-2 mx-3 my-2 text-sm font-medium text-gray-400">
              <img
                className="w-[300px] h-[300px] object-cover"
                src="/src/images/carLogo.png"
              />
            </div>

            <div className="mb-5 border-t border-gray-50 text-black text-center text-3xl  pt-8">
              Free delivery on orders over $100
            </div>
          </div>
          <div className="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
            <div className="flex justify-center pt-4 px-2 mx-3 my-2 text-sm font-medium text-gray-400">
              <img
                className="w-[300px] h-[300px] object-cover"
                src="/src/images/returnLogo.png"
              />
            </div>

            <div className="mb-5 border-t border-gray-50 text-black text-center text-3xl  pt-8">
              Enjoy a 100-day return policy
            </div>
          </div>
          <div className="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
            <div className="flex justify-center pt-4 px-2 mx-3 my-2 text-sm font-medium text-gray-400">
              <img
                className="w-[300px] h-[300px] object-cover"
                src="/src/images/waletLogo.png"
              />
            </div>

            <div className="mb-5 border-t border-gray-50 text-black text-center text-3xl  pt-8">
              Convenient and secure payments
            </div>
          </div>
        </div>

<Footer/>       
      </div>
    </div>
  );
};
export default Homepage;
