import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Box } from "@mui/material";
// Components
import Header from "./components/header/Header";
import Header2 from "./components/header/Header2";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Header2/>
   
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
