import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import Appartement from "./pages/Appartement";
import About from "./pages/About";
import Error from "./pages/Error";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appartement" element={<Appartement />} />
        <Route path="/appartement/:id" element={<Appartement />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
