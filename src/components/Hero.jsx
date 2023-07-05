import React from "react";
import heroimg from "../assets/illustration-intro.svg";
import Button from "./Button";

function Hero() {
  return (
    <section className="border mt-[52px] mb-[102px] text-center">
      <img src={heroimg} alt="hero img" />

      <div>
        <h1 className="text-4xl font-bold text-dark-blue leading-tight mb-4 mt-2">
          Bring everyone together to build better product
        </h1>
        <p className="text-base text-dark-gray-blue leading-relaxed mb-6 px-10">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view
        </p>
        <Button>Get Started</Button>
      </div>
    </section>
  );
}

export default Hero;
