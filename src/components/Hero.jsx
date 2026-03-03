import React from "react";
import bg2 from "../assets/bg/2.png";
import bg4 from "../assets/bg/4.png";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[100vh] text-center px-4 relative overflow-hidden">
      {/* Background Decor */}
      <img
        src={bg2}
        alt=""
        className="absolute top-[15%] left-[5%] md:left-[15%] w-20 md:w-28 opacity-70 -rotate-12 pointer-events-none animate-pulse-slow"
      />
      <img
        src={bg4}
        alt=""
        className="absolute bottom-[10%] right-[5%] md:right-[15%] w-32 md:w-48 opacity-50 rotate-[15deg] pointer-events-none"
      />

      <div className="max-w-[1000px] w-full mx-auto flex flex-col items-center relative z-10">
        <h1 className="text-[clamp(3rem,12vw,9rem)] leading-[0.9] mb-12 font-heading font-bold tracking-widest uppercase text-[#1a1a1a]">
          OILED
        </h1>

        <div className="uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-8 pb-2 border-b border-[#1a1a1a] inline-block px-4 font-body font-bold">
          Turn your PFP into oiled version.
        </div>

        <p className="text-xs sm:text-sm max-w-[500px] mx-auto mb-10 leading-[2] font-body text-center text-[#1a1a1a] opacity-80 tracking-wide">
          Upload any perfectly normal picture and our neural networks will
          expertly dump highly-reflective, glossy digital fluid all over it.
          Oddly satisfying.
        </p>

        <a href="#generator" className="btn-primary">
          VIEW GENERATOR &rarr;
        </a>
      </div>
    </section>
  );
}
