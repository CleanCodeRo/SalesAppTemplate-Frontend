import React, { Component } from "react";
import { useState } from "react";
import Header from "../Header/Header";

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
    <div>
      <Header></Header>
      <div className="bg-white">
        {/* <header>
            <div className="container mx-auto px-6 py-3">
              <div className="flex items-center justify-between">
                <div className="hidden w-full text-gray-600 md:flex md:items-center">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="mx-1 text-sm">NY</span>
                </div>
                <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                  Brand
                </div>
                <div className="flex items-center justify-end w-full">
                  <button
                    onClick={() => setCartOpen(!cartOpen)}
                    className="text-gray-600 focus:outline-none mx-4 sm:mx-0"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </button>

                  <div className="flex sm:hidden">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      type="button"
                      className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M4 6h16M4 12h16m-7 6h7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <nav
                className={`${
                  isOpen ? "block" : "hidden"
                } sm:flex sm:items-center sm:justify-between mt-4`}
              >
                <div className="flex flex-col sm:flex-row">
                  <a
                    href="/"
                    className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                  >
                    Home
                  </a>
                  <a
                    href="/"
                    className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                  >
                    Shop
                  </a>
                  <a
                    href="/"
                    className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                  >
                    Categories
                  </a>
                  <a
                    href="/"
                    className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                  >
                    Contact
                  </a>
                </div>
                <div className="mt-4 sm:mt-0">
                  <a href="/" className="text-gray-600 hover:underline mr-4">
                    Account
                  </a>
                  <a href="/" className="text-gray-600 hover:underline">
                    Logout
                  </a>
                </div>
              </nav>
            </div>
          </header> */}

        {/* <div
          className={`${
            cartOpen ? "translate-x-0 ease-out" : "translate-x-full ease-in"
          } fixed inset-0 overflow-hidden transition-transform duration-300 ease-in-out`}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div
              onClick={() => setCartOpen(false)}
              className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"
            ></div>

            <section className="absolute inset-y-0 right-0 flex max-w-full pl-10">
              <div className="relative w-screen max-w-md">
                <div className="flex flex-col h-full bg-white border-l-8 border-gray-200 shadow-xl">
                  <header className="flex-shrink-0 items-center justify-between p-4 border-b border-gray-200">
                    <h1 className="text-lg font-medium">Your cart</h1>
                    <button
                      onClick={() => setCartOpen(false)}
                      className="text-gray-600"
                    >
                      <span className="sr-only">Close panel</span>
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </header>
                  <div className="flex-1 overflow-y-auto p-4"> */}
        {/* Cart items go here */}
        {/* <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <img
                          className="h-16 w-16 rounded-full object-cover"
                          src="https://via.placeholder.com/150"
                          alt="Product"
                        />
                        <div className="mx-3">
                          <h3 className="text-sm text-gray-600">
                            Product Title
                          </h3>
                          <div className="flex items-center mt-2">
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                              <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20 12H4"></path>
                              </svg>
                            </button>
                            <span className="text-gray-700 mx-2">2</span>
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                              <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 6v12"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <span className="text-gray-600">$24.99</span>
                    </div>
                  </div>
                  <footer className="flex-shrink-0 p-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">$99.96</span>
                      <button className="bg-gray-900 text-white px-4 py-2 rounded-md">
                        Checkout
                      </button>
                    </div>
                  </footer>
                </div>
              </div>
            </section>
          </div>
        </div> */}
        <main class="my-8">
          <div class="container mx-auto px-6">
            <div class="bg-[url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')] h-64 rounded-md overflow-hidden bg-cover bg-center">
              <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div class="px-10 max-w-xl">
                  <h2 class="text-2xl text-white font-semibold">Sport Shoes</h2>
                  <p class="mt-2 text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore facere provident molestias ipsam sint voluptatum
                    pariatur.
                  </p>
                  <button class="flex items-center mt-4 px-3 py-2 bg-primary-200 text-white text-sm uppercase font-medium rounded hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                    <span>Shop Now</span>
                    <svg
                      class="h-5 w-5 mx-2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="md:flex mt-8 md:-mx-4">
              <div class="bg-[url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')] w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2">
                <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                  <div class="px-10 max-w-xl">
                    <h2 class="text-2xl text-white font-semibold">Back Pack</h2>
                    <p class="mt-2 text-gray-400">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Tempore facere provident molestias ipsam sint voluptatum
                      pariatur.
                    </p>
                    <button class="flex items-center mt-4 px-3 py-2 bg-primary-200 text-white text-sm uppercase font-medium rounded hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <span>Shop Now</span>
                      <svg
                        class="h-5 w-5 mx-2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="bg-[url('https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')] w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2">
                <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                  <div class="px-10 max-w-xl">
                    <h2 class="text-2xl text-white font-semibold">Games</h2>
                    <p class="mt-2 text-gray-400">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Tempore facere provident molestias ipsam sint voluptatum
                      pariatur.
                    </p>
                    <button class="flex items-center mt-4 px-3 py-2 bg-primary-200 text-white text-sm uppercase font-medium rounded hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <span>Shop Now</span>
                      <svg
                        class="h-5 w-5 mx-2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
            <div class="mt-16">
              <h3 class="text-gray-600 text-2xl font-medium">Fashions</h3>
              <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div class="bg-[url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')] flex items-end justify-end h-56 w-full bg-cover">
                    <button class="p-2 rounded-full bg-primary-200 text-white mx-5 -mb-4 hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <svg
                        class="h-5 w-5"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="px-5 py-3">
                    <h3 class="text-gray-700 uppercase">Chanel</h3>
                    <span class="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div class="bg-[url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')] flex items-end justify-end h-56 w-full bg-cover">
                    <button class="p-2 rounded-full bg-primary-200 text-white mx-5 -mb-4 hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <svg
                        class="h-5 w-5"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="px-5 py-3">
                    <h3 class="text-gray-700 uppercase">Man Mix</h3>
                    <span class="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div class="bg-[url('https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')] flex items-end justify-end h-56 w-full bg-cover">
                    <button class="p-2 rounded-full bg-primary-200 text-white mx-5 -mb-4 hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <svg
                        class="h-5 w-5"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="px-5 py-3">
                    <h3 class="text-gray-700 uppercase">Classic watch</h3>
                    <span class="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div class="bg-[url('https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80')] flex items-end justify-end h-56 w-full bg-cover">
                    <button class="p-2 rounded-full bg-primary-200 text-white mx-5 -mb-4 hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <svg
                        class="h-5 w-5"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="px-5 py-3">
                    <h3 class="text-gray-700 uppercase">woman mix</h3>
                    <span class="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-16">
              <h3 class="text-gray-600 text-2xl font-medium">Fashions</h3>
              <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div class="bg-[url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')] flex items-end justify-end h-56 w-full bg-cover">
                    <button class="p-2 rounded-full bg-primary-200 text-white mx-5 -mb-4 hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <svg
                        class="h-5 w-5"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="px-5 py-3">
                    <h3 class="text-gray-700 uppercase">Chanel</h3>
                    <span class="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div class="bg-[url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')] flex items-end justify-end h-56 w-full bg-cover">
                    <button class="p-2 rounded-full bg-primary-200 text-white mx-5 -mb-4 hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <svg
                        class="h-5 w-5"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="px-5 py-3">
                    <h3 class="text-gray-700 uppercase">Man Mix</h3>
                    <span class="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div class="bg-[url('https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')] flex items-end justify-end h-56 w-full bg-cover">
                    <button class="p-2 rounded-full bg-primary-200 text-white mx-5 -mb-4 hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <svg
                        class="h-5 w-5"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="px-5 py-3">
                    <h3 class="text-gray-700 uppercase">Classic watch</h3>
                    <span class="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div class="bg-[url('https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80')] flex items-end justify-end h-56 w-full bg-cover">
                    <button class="p-2 rounded-full bg-primary-200 text-white mx-5 -mb-4 hover:bg-primary-100 focus:outline-none focus:bg-primary-300">
                      <svg
                        class="h-5 w-5"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="px-5 py-3">
                    <h3 class="text-gray-700 uppercase">woman mix</h3>
                    <span class="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div class="grid grid-cols-6 gap-5 p-20 ">
          <div class="col-span-6 mt-5 bg-opacity-50 border bg-primary-500 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
            <div class="flex justify-center pt-4 px-2 mx-3 my-2 text-sm font-medium text-gray-400">
              <img
                class="w-[300px] h-[300px] object-cover"
                src="/src/images/carLogo.png"
              />
            </div>

            <div class="mb-5 border-t border-gray-50 text-black text-center text-3xl  pt-8">
              Free delivery on orders over $100
            </div>
          </div>
          <div class="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
            <div class="flex justify-center pt-4 px-2 mx-3 my-2 text-sm font-medium text-gray-400">
              <img
                class="w-[300px] h-[300px] object-cover"
                src="/src/images/returnLogo.png"
              />
            </div>

            <div class="mb-5 border-t border-gray-50 text-black text-center text-3xl  pt-8">
              Enjoy a 100-day return policy
            </div>
          </div>
          <div class="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
            <div class="flex justify-center pt-4 px-2 mx-3 my-2 text-sm font-medium text-gray-400">
              <img
                class="w-[300px] h-[300px] object-cover"
                src="/src/images/waletLogo.png"
              />
            </div>

            <div class="mb-5 border-t border-gray-50 text-black text-center text-3xl  pt-8">
              Convenient and secure payments
            </div>
          </div>
        </div>

        <footer class="pt-5 bg-primary-100 font-sans ">
          <div class="container px-6 py-12 mx-auto">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
              <div class="sm:col-span-2">
                <h1 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                  Subscribe our newsletter to get an update.
                </h1>

                <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                  <input
                    id="email"
                    type="text"
                    class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                    placeholder="Email Address"
                  />

                  <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    Subscribe
                  </button>
                </div>
              </div>

              <div>
                <p class="font-semibold text-gray-800 dark:text-white">
                  Quick Link
                </p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                  <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Home
                  </p>
                  <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Who We Are
                  </p>
                  <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Our Philosophy
                  </p>
                </div>
              </div>

              <div>
                <p class="font-semibold text-gray-800 dark:text-white">
                  Industries
                </p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                  <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Retail & E-Commerce
                  </p>
                  <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Information Technology
                  </p>
                  <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Finance & Insurance
                  </p>
                </div>
              </div>
            </div>

            <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

            <div class="sm:flex sm:items-center sm:justify-between">
              {/* <div class="flex flex-1 gap-4 hover:cursor-pointer">
                <img
                  src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                  width="130"
                  height="110"
                  alt=""
                />
                <img
                  src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                  width="130"
                  height="110"
                  alt=""
                />
              </div> */}

              <div class="flex gap-4 hover:cursor-pointer">
                <img
                  src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                  width="30"
                  height="30"
                  alt="fb"
                />
                <img
                  src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                  width="30"
                  height="30"
                  alt="tw"
                />
                <img
                  src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                  width="30"
                  height="30"
                  alt="inst"
                />
                <img
                  src="https://www.svgrepo.com/show/94698/github.svg"
                  class=""
                  width="30"
                  height="30"
                  alt="gt"
                />
                <img
                  src="https://www.svgrepo.com/show/22037/path.svg"
                  width="30"
                  height="30"
                  alt="pn"
                />
                <img
                  src="https://www.svgrepo.com/show/28145/linkedin.svg"
                  width="30"
                  height="30"
                  alt="in"
                />
                <img
                  src="https://www.svgrepo.com/show/22048/dribbble.svg"
                  class=""
                  width="30"
                  height="30"
                  alt="db"
                />
              </div>
            </div>
            <p class="font-sans p-8 text-start md:text-center md:text-lg md:p-4">
              © 2023 You Company Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Homepage;
