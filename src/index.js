import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {APropos} from "./Pages/APropos/APropos";
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {Logement} from "./Pages/Logement/Logement";
import {Error} from "./Components/Error/Error";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="a-propos" element={<APropos />} />
              <Route path="/logement/:logementTitle" element={<Logement />}  />
              <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
      </BrowserRouter>


  </React.StrictMode>
);

