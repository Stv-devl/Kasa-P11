import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Rent from "./pages/Rent";
import Error from "./pages/Error";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Api from "./components/Api";

const App = () => {
  const [data, setData] = useState(null);

  return (
    <BrowserRouter>
      <Banner />
      <Api setData={setData} />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/home" element={<Home data={data} />} />
        <Route path="/rent" element={<Rent data={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
