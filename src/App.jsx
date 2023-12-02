import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Datas from "./data/datas";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import Appartement from "./pages/Appartement";
import About from "./pages/About";
import Error from "./pages/Error";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState(null);

  return (
    <BrowserRouter>
      <Banner />
      <Datas setData={setData} />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/home" element={<Home data={data} />} />
        <Route path="/appartement" element={<Appartement data={data} />} />
        <Route path="/appartement/:id" element={<Appartement data={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
