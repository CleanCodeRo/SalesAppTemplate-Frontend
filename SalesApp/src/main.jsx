import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import reportWebVitals from '../reportWebVitals';
import Header from './Components/Header/Header'
import "./index.css"
import Homepage from './Components/Homepage/Homepage';
import SignIn from './Components/SignIn/SignIn';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import Product from './Components/Products/ProductPage/ProductPage';
import AboutUs from './Components/AboutUs/AboutUs';
import CartCheckout from './Components/CartCheckout/CartCheckout';
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';
import ProductReturnForm from './Components/ProductReturnForm/ProductReturnForm';
import ContactForm from './Components/ContactForm/ContactForm';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
      <Routes>
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
      <Routes>
        <Route path="/product" element={<Product />} />
      </Routes>
      <Routes>
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
      <Routes>
        <Route path="/checkout" element={<CartCheckout />} />
      </Routes>
      <Routes>
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
      </Routes>
      <Routes>
        <Route path="/returnForm" element={<ProductReturnForm />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main />);
reportWebVitals();
