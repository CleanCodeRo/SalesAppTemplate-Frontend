import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./CartCheckout.css";
import productList from "/products.json";
import { Button } from "flowbite-react";
import { useAtom } from "jotai";
import state from "../Atom/Atom";

const CartCheckout = () => {
  const products = productList.products;
  const [totalCartPrice, setTotalCartPrice] = useAtom(state.totalPrice);

  return (
    <div>
      <Header />
      <div className="cartCheckoutMargin">
        <section>
          <div className="grid 3xl:grid-cols-4 xl:grid-cols-6 px-20 mx-auto">
            <div className="col-span-1"></div>
            <div className="3xl:col-span-2 xl:col-span-4">
              <div className="3xl:grid 3xl:grid-cols-4 3xl:gap-4 h-2/3">
                <div className="3xl:col-span-3">
                  <span className="block mb-2 m-4 font-semibold text-2xl">
                    Coșul meu
                  </span>
                  {products.map((product) => (
                    <div className="relative">
                      <div className="w-full h-40 border rounded-2xl m-4 grid grid-cols-5">
                        <div className="col-span-1">
                          <img
                            className="md:h-40 md:w-40 h-24 w-24 p-2 rounded-2xl relative "
                            src="/src/images/bg-login.png"
                            alt=""
                          />
                        </div>
                        <div className="col-span-3 grid grid-rows-4">
                          <span className="pt-2 font-semibold">
                            {product.name}
                          </span>
                          <span className="pt-2 row-span-3">
                            {product.description}
                          </span>
                        </div>
                        <div className="pt-2 col-span-1 md:col-start-5 col-start-1 text-end pr-2 grid grid-rows-5">
                          {product.price} $z
                          <div class="flex md:relative absolute md:left-0 md:bottom-0 left-6 bottom-7 h-8 md:justify-end items-stretch z-10">
                            <button class="flex items-center justify-center rounded-l-md bg-primary-100 px-4 transition hover:bg-primary-200 hover:text-white w-2 text-white">
                              -
                            </button>
                            <div class="flex items-center justify-center text black bg-gray-100 px-4 text-xs uppercase transition w-2">
                              1
                            </div>
                            <button class="flex items-center justify-center rounded-r-md bg-primary-100 px-4 transition hover:bg-primary-200 hover:text-white w-2 text-white">
                              +
                            </button>
                          </div>
                          <button className="right-0 absolute bottom-0">
                          <svg
                            fill="#000000"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20px"
                            height="50px"
                            viewBox="0 0 408.483 408.483"
                            xml:space="preserve"
                          >
                            <g>
                              <g>
                                <path
                                  d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316
            H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293
            c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329
            c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355
            c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356
            c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z"
                                />
                                <path
                                  d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916
            c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z"
                                />
                              </g>
                            </g>
                          </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-span-1 border ml-4 p-4 h-60 w-full grid grid-rows-10 gap-2">
                  <div className="row-span-1 font-semibold">Sumar Comanda</div>
                  <div className="row-span-1 row-start-3 text-xs grid grid-cols-2 w-full">
                    <span className="pb-1"> Cost Produse: </span>
                    <span className="text-end"> {totalCartPrice}$</span>
                    <span className="col-span-1"> Cost Livrare: </span>
                    <span className="text-end text-green-500 font-bold">
                      GRATUIT
                    </span>
                  </div>
                  <span className="row-span-1 row-start-7 font-bold text-xl">
                    Total: {totalCartPrice}$
                  </span>
                  <div className="row-span-1 row-start-9 w-full">
                    <Button
                      gradientMonochrome="white"
                      className=" w-full text-white hover:bg-primary-200 bg-primary-100"
                    >
                      Continuă
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-1"></div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CartCheckout;
