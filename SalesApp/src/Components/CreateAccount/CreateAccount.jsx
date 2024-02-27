import React from "react";
import Header from "../Header/Header";

const CreateAccount = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        {/* <!-- Left: Image --> */}
        <div className="w-1/2 h-screen hidden lg:block">
          <img
            src="/src/images/bg-login.png"
            className="object-cover w-full h-full top-16 border-primary-100"
          />
        </div>
        {/* <!-- Right: Login Form --> */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Create Account</h1>
          <form action="#" method="POST">
            {/* <!-- email Input --> */}

            <label className="block text-black">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              name="First Name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none "
              autocomplete="off"
            />

            <label className="block text-black">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              name="Last Name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none "
              autocomplete="off"
            />
            <div className="mb-4">
              <label for="email" className="block text-black">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none "
                autocomplete="off"
              />
            </div>
            {/* <!-- Password Input --> */}
            <div className="mb-4">
              <label for="password" className="block text-black">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                autocomplete="off"
              />
            </div>

            {/* <!-- Login Button --> */}
            <button
              type="submit"
              className="bg-primary-100 hover:bg-primary-200 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Create Account
            </button>
          </form>
          {/* <!-- Sign in  Link --> */}
          <div className="mt-6 text-black  underline text-center">
            <a href="/signIn" className="hover:underline">
              Already have an account?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
