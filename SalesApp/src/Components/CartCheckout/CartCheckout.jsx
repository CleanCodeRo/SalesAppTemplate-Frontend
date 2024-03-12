import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const CartCheckout = () => {
  return (
    <div>
      <Header />
      <div className="mt-28 py-4">
        <section>
          <div className="grid grid-cols-3 h-screen">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CartCheckout;
