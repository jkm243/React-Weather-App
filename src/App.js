import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home"
import NavBarComp from "./components/NavBarComp"
import Header from './components/Header';
import FooterComp from "./components/FooterComp"
import AboutComp from "./components/AboutComp"
import Weather from "./components/Weather"

function App() {
  return (
    <div>
      <Header />
      {<BrowserRouter>
        <NavBarComp />
        <Routes>
          <Route exact path="/weather" element={<Weather/>} />
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<AboutComp/>} />
          <Route path="/" element={<Navigate replace to="/" />} /> 
        </Routes>
        <FooterComp />
      </BrowserRouter>}
    </div>
  )
}

export default App
