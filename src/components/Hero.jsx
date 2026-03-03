import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[100vh] text-center px-4 relative">
      <div className="max-w-[1000px] w-full mx-auto flex flex-col items-center">
        <h1 className="text-[clamp(3rem,12vw,9rem)] leading-[0.9] mb-12 font-heading font-bold tracking-widest uppercase text-[#1a1a1a]">
          OILED
        </h1>

        <div className="uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-8 pb-2 border-b border-[#1a1a1a] inline-block px-4 font-body font-bold">
          On-chain generative fluid
        </div>

        <p className="text-xs sm:text-sm max-w-[500px] mx-auto mb-10 leading-[2] font-body text-center text-[#1a1a1a] opacity-80 tracking-wide">
          10,000 algorithmic, interoperable, highly reflective pixel-perfect
          faces covered in thick digital viscosity.
        </p>

        <a href="#generator" className="btn-primary">
          VIEW GENERATOR &rarr;
        </a>
      </div>
    </section>
  );
}
