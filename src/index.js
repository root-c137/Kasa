import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {APropos} from "./Components/APropos/APropos";
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="a-propos" element={<APropos />} />
          </Routes>
          <Footer />
      </BrowserRouter>


  </React.StrictMode>
);

