import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Header";
import Home from "./pages/Home";
import Library from "./pages/Library";
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
