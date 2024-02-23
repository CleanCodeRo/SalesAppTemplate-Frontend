import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import reportWebVitals from '../reportWebVitals';
import Header from './Components/Header/Header'
import "./index.css"
import Homepage from './Components/Homepage/Homepage';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/home" element={<Homepage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main />);
reportWebVitals();
// I want shampoo shampoo I want shampoo shampoo
// I want shampoo shampoo
// You want shampoopoo
// pam pam pam parapampam pam pam pam pam pam