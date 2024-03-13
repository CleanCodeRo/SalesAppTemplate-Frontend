import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="pt-36 w-full h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        <img
          src="/src/images/bg-about.png"
          className="absolute top-0 left-0 w-full min-h-full"
          alt=""
        />
        <div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
          <div className="col-span-6">
            <span className="uppercase text-white text-xs font-bold mb-2 block">
              About Us
            </span>
            <h1 className="text-white font-extrabold text-5xl mb-8">
              Welcome to Raccoon Market, where passion meets innovation.
            </h1>
            <p className="text-white text-base">
              We are more than just an e-commerce platform; we are a community
              driven by a shared love for raccoons.
            </p>
            <Link to="/">
              <button className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10">
                Buy now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-primary-100 py-20">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <div className="max-w-xl">
            <h2 className="font-black text-white text-3xl mb-4">
              Our Story Established in 2023
            </h2>
            <p className="text-base text-white">
              Raccoon Market was born out of a desire to sell raccoons. Since
              then, we have been on a journey to provide best raccoons that
              exceed expectations and redefine the way you see them.
            </p>
          </div>
          <Link to="/">
            <button className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10">
              Buy now
            </button>
          </Link>
        </div>
      </div>
      <div className="py-12 relative overflow-hidden bg-white">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="w-full flex flex-col items-end pr-16">
            <h2 className="text-primary-100 font-bold text-2xl max-w-xs text-right mb-12 mt-10">
              Whether you need Assistance
            </h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <img
                src="https://picsum.photos/800/600"
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
          </div>

          <div className="py-20 bg-primary-100 relative before:absolute before:h-full before:w-screen before:bg-primary-100 before:top-0 before:left-0">
            <div className="relative z-20 pl-12">
              <h2 className="text-white font-black text-5xl leading-snug mb-10">
                Finpoint is here <br />
                to help you
              </h2>
              <p className="text-white text-sm">
                Purus in massa tempor nec. Magna etiam tempor orci eu lobortis
                elementum nibh tellus molestie. Faucibus ornare suspendisse sed
                nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra
                nibh cras pulvinar.
              </p>
              <button className="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10">
                Talk with expert
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 relative overflow-hidden bg-white">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="py-20 bg-primary-100 relative before:absolute before:h-full before:w-screen before:bg-primary-100 before:top-0 before:right-0">
            <div className="relative z-20 pl-12">
              <h2 className="text-white font-black text-5xl leading-snug mb-10">
                Finpoint is here <br />
                to help you
              </h2>
              <p className="text-white text-sm">
                Purus in massa tempor nec. Magna etiam tempor orci eu lobortis
                elementum nibh tellus molestie. Faucibus ornare suspendisse sed
                nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra
                nibh cras pulvinar.
              </p>
              <button className="mt-8 text-white uppercase py-3 text-sm px-10 border border-black hover:bg-white hover:bg-opacity-10">
                Talk with expert
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col pl-16">
            <h2 className="text-primary-100 font-bold text-2xl max-w-xs text-left mb-12 mt-10">
              Whether you need Assistance
            </h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <img
                src="https://picsum.photos/800/600"
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 relative overflow-hidden bg-white">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="w-full flex flex-col items-end pr-16">
            <h2 className="text-primary-100 font-bold text-2xl max-w-xs text-right mb-12 mt-10">
              Whether you need Assistance
            </h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <img
                src="https://picsum.photos/800/600"
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
          </div>

          <div className="py-20 bg-primary-100 relative before:absolute before:h-full before:w-screen before:bg-primary-100 before:top-0 before:left-0">
            <div className="relative z-20 pl-12">
              <h2 className="text-white font-black text-5xl leading-snug mb-10">
                Finpoint is here <br />
                to help you
              </h2>
              <p className="text-white text-sm">
                Purus in massa tempor nec. Magna etiam tempor orci eu lobortis
                elementum nibh tellus molestie. Faucibus ornare suspendisse sed
                nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra
                nibh cras pulvinar.
              </p>
              <button className="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10">
                Talk with expert
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AboutUs;
