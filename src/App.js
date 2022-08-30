import React from "react";
import "./App.css";
import {
  Footer,
  Blog,
  Posibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./componets";

function App() {
  return (
    <div className="App">
      <div className="gradiend__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
