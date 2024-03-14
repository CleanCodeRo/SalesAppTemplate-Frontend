import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";

const ProductReturnForm = () => {
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState("");

  const handleMethodChange = (event) => {
    setMethod(event.target.value);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formular trimis!");
  };

  return (
    <div>
      <Header />
      <div className="pt-28">
        <h1 className="text-lg font-bold text-black leading-tight text-center mt-12 mb-5">
          Product Return Form
        </h1>
        <form
          className="mx-auto max-w-screen-xl rounded-xl bg-white text-black shadow-lg sm:my-10 sm:border"
          onSubmit={handleSubmit}
        >
          <div className="container mx-auto flex flex-col flex-wrap px-5 pb-12">
            <div
              className="bg-white mx-auto mt-4 mb-10 flex w-full flex-wrap items-center space-x-4 py-4 md:mb-20 md:justify-center md:px-10 "
              action="#!"
            >
              <span
                className={`stepIndicator h-8 w-8 items-center justify-center rounded-full text-white shadow md:inline-flex ${
                  step === 1 ? "bg-primary-100" : "bg-gray-300"
                }`}
              >
                1
              </span>
              <span
                className={`text-primary-100 md:inline ${
                  step === 1 ? "font-bold" : ""
                }`}
              >
                Select the product to return
              </span>
              <span className="hidden h-0.5 w-10 bg-primary-100 md:inline"></span>
              <span
                className={`stepIndicator h-8 w-8 items-center justify-center rounded-full text-white shadow md:inline-flex ${
                  step === 2 ? "bg-primary-100" : "bg-gray-300"
                }`}
              >
                2
              </span>
              <span
                className={`text-primary-100 md:inline ${
                  step === 2 ? "font-bold" : ""
                }`}
              >
                Select the reason for the return
              </span>
              <span className="hidden h-0.5 w-10 bg-primary-100 md:inline"></span>
              <span
                className={`stepIndicator h-8 w-8 items-center justify-center rounded-full text-white shadow md:inline-flex ${
                  step === 3 ? "bg-primary-100" : "bg-gray-300"
                }`}
              >
                3
              </span>
              <span
                className={`text-primary-100 md:inline ${
                  step === 3 ? "font-bold" : ""
                }`}
              >
                Select the return method
              </span>
              <span className="hidden h-0.5 w-10 bg-primary-100 md:inline"></span>
              <span
                className={`stepIndicator h-8 w-8 items-center justify-center rounded-full text-white shadow md:inline-flex ${
                  step === 4 ? "bg-primary-100" : "bg-gray-300"
                }`}
              >
                4
              </span>
              <span
                className={`text-primary-100 md:inline ${
                  step === 4 ? "font-bold" : ""
                }`}
              >
                Select the return option
              </span>
              <span className="text-xl md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-3 w-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div className="step flex w-full flex-col ">
                <h1 className="text-2xl font-semibold">
                  Select the product you want to return.
                </h1>
                <div className="mt-4  items-center ">
                  <div className="flex flex-col sm:col-span-3">
                    <label className="mb-1 ml-3 font-semibold text-black">
                      Select Product
                    </label>
                    {/* Select from old orders */}
                    <select className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring">
                      <option>Shampoo</option>
                      <option>Conditioner</option>
                      <option>Body Wash</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="step flex w-full flex-col ">
                <h1 className="text-2xl font-semibold">
                  Select the reason for the return
                </h1>
                <div className="w-full h-40 border rounded-2xl m-4 grid grid-cols-5">
                  <div className="col-span-1">
                    <img
                      className="md:h-40 md:w-40 h-24 w-24 p-2 rounded-2xl relative "
                      src="/src/images/bg-login.png"
                      alt=""
                    />
                  </div>
                  <div className="col-span-3 grid grid-rows-4">
                    <span className="pt-2 font-semibold">Shampoo</span>
                    <span className="pt-2 row-span-3">Shampoo for raccoon</span>
                  </div>
                </div>
                <div className="mt-4  items-center ">
                  <div className="flex flex-col sm:col-span-3">
                    <label className="mb-1 ml-3 font-semibold text-black">
                      What is the reason for the return?
                    </label>
                    <select className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring">
                      <option>I ordered the wrong size</option>
                      <option>
                        The received product is defective or incomplete
                      </option>
                      <option>I received a damaged package</option>
                      <option>
                        The product does not match the description on the
                        website
                      </option>
                      <option>The size does not fit</option>
                      <option>The product does not meet expectations</option>
                      <option>
                        I received a different product than the one ordered
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="step flex w-full flex-col ">
                <h1 className="text-2xl font-semibold">
                  Select the method of product return.
                </h1>
                <div className="mt-4  items-center ">
                  <div className="flex flex-col sm:col-span-3">
                    <label className="mb-1 ml-3 font-semibold text-black">
                      Select method
                    </label>
                    <select
                      className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring"
                      value={method}
                      onChange={handleMethodChange}
                    >
                      <option value="">Select method</option>
                      <option value="delivery">Courier delivery</option>
                      <option value="pickup">Personal pickup</option>
                    </select>
                  </div>
                </div>

                {method === "delivery" && (
                  <div className="mt-4 ">
                    {/* Afișați un formular pentru adresa clientului */}
                    <label className="mb-1 ml-3 font-semibold text-black">
                      Enter delivery address:
                    </label>
                    <div className="step">
                      <div className="mb-6">
                        <input
                          type="text"
                          placeholder="Full name"
                          name="fullname"
                          className="w-full px-4 py-3 rounded-md text-black font-medium border-solid border-2 border-gray-200"
                          onInput="this.className = 'w-full px-4 py-3 rounded-md text-black font-medium border-solid border-2 border-gray-200'"
                        />
                      </div>
                      <div className="mb-6">
                        <input
                          type="text"
                          placeholder="Mobile"
                          name="mobile"
                          className="w-full px-4 py-3 rounded-md text-black font-medium border-solid border-2 border-gray-200"
                          onInput="this.className = 'w-full px-4 py-3 rounded-md text-black font-medium border-solid border-2 border-gray-200'"
                        />
                      </div>
                      <div className="mb-6">
                        <input
                          type="text"
                          placeholder="Address"
                          name="address"
                          className="w-full px-4 py-3 rounded-md text-black font-medium border-solid border-2 border-gray-200"
                          onInput="this.className = 'w-full px-4 py-3 rounded-md text-black font-medium border-solid border-2 border-gray-200'"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {method === "pickup" && (
                  <div className="mt-4">
                    {/* Afișați adresa de ridicare */}
                    <p className="ml-3 font-semibold text-black">
                      Address for pickup: Raccoonia no 21
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div className="step flex w-full flex-col ">
                <h1 className="text-2xl font-semibold">
                  Select the return option.
                </h1>
                <div className="mt-4  items-center ">
                  <div className="flex flex-col sm:col-span-3">
                    <label className="mb-1 ml-3 font-semibold text-black">
                      Select option
                    </label>
                    <select className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring">
                      <option>I want a Voucher</option>
                      <option>I want my money back</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
            <div className="flex flex-col justify-between sm:flex-row ">
              {step > 1 && (
                <button
                  className="group order-1 my-2 flex w-full items-center justify-center rounded-lg bg-gray-200 py-2 text-center font-bold text-gray-600 outline-none transition sm:w-40 focus:ring hover:bg-gray-300"
                  onClick={prevStep}
                >
                  Previous
                </button>
              )}
              {step < 4 && (
                <button
                  className="group my-2 flex w-full items-center justify-center rounded-lg bg-primary-100 py-2 text-center font-bold text-white outline-none transition sm:order-1 sm:w-40 focus:ring"
                  onClick={nextStep}
                >
                  Continue
                </button>
              )}
              {step === 4 && (
                <button
                  type="submit"
                  className="group my-2 flex w-full items-center justify-center rounded-lg bg-primary-100 py-2 text-center font-bold text-white outline-none transition sm:order-1 sm:w-40 focus:ring"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
     <Footer/>
    </div>
  );
};

export default ProductReturnForm;
