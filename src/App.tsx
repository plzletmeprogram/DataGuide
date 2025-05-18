import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Library from "./pages/Library";
import About from "./pages/About";



const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="overflow-hidden inset-0 pt-1 px-12 h-screen w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
