import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Testi from "./components/Testi";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-app">
      <Header />
      <Hero />
      <About />
      <Testi />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
