import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, HashRouter, useLocation } from "react-router-dom";
import Header from "./components/jsx/Header.jsx";
import About from "./components/jsx/About.jsx";
import "./components/css/icon.css";
import "./components/css/index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
 function Main() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default Main;
