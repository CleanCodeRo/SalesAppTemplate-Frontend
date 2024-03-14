import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ContactForm = () => {
  return (
    <div>
      <Header />
      <div className="pt-28">
        <section className="text-black body-font relative ">
          <div className="absolute inset-0 bg-gray-300">
            <iframe
              className="absolute inset-0 w-full h-full overflow-hidden"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.892223591635!2d-74.63871527340922!3d40.961939821357085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c37481b033b5df%3A0x7e6081961dc18d38!2sRaccoon%20Island!5e0!3m2!1sro!2sro!4v1710406156659!5m2!1sro!2sro"
            ></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h1 className="my-3 text-3xl font-semibold text-black text-center">
                Contact Us
              </h1>
              <p className="text-black text-center">
                Fill up the form below to send us a message.
              </p>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-primary-100 focus:ring-2 focus:ring-primary-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-black">
                  Full name
                </label>
                <input
                  type="text"
                  id="text"
                  name="text"
                  className="w-full bg-white rounded border border-gray-300 focus:border-primary-100 focus:ring-2 focus:ring-primary-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="message" className="leading-7 text-sm text-black">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-primary-100 focus:ring-2 focus:ring-primary-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-primary-100 border-0 py-2 px-6 focus:outline-none hover:bg-primary-200 rounded text-lg">
                Sent
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
