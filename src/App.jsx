import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Testi from "./components/Testi";
import Cta from "./components/Cta";

function App() {
  return (
    <div className="container-app">
      <Header />
      <Hero />
      <About />
      <Testi />
      <Cta />
    </div>
  );
}

export default App;
