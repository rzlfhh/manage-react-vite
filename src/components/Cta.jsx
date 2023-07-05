import React from "react";
import Button from "./Button";

function Cta() {
  return (
    <section className="bg-bright-red text-center py-[102px]">
      <h2 className="text-4xl font-bold text-vl-gray leading-tight mb-6 w-[85%] mx-auto">
        Simplify how your team works today.
      </h2>
      <Button color="white">Get Started</Button>
    </section>
  );
}

export default Cta;
