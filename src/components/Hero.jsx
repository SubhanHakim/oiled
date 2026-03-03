import React from "react";
import { Sparkles, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] pt-20 text-center relative px-4">
      <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-black/5 border border-black/10 py-2 px-4 rounded-full mb-8 text-[#121212] font-semibold tracking-wide transition-colors cursor-default">
          <Sparkles size={16} className="text-[#e5b800]" />
          Actually just an AI that makes things shiny
        </div>

        <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] mb-6 font-outfit font-extrabold tracking-tight text-[#121212]">
          Digital Oil <br />
          <span className="text-gradient">For Your PFP</span>
        </h1>

        <p className="text-[clamp(1.1rem,1.5vw,1.2rem)] text-zinc-600 max-w-[650px] mx-auto mb-10 leading-relaxed font-inter">
          It's exactly what it sounds like. Upload a perfectly normal picture,
          and our highly-trained neural networks will expertly dump highly
          reflective, physically accurate digital oil all over it. Oddly
          satisfying, surprisingly shiny.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <a
            href="#generator"
            className="btn-primary flex items-center justify-center gap-2 py-3.5 px-8 text-lg w-full sm:w-auto"
          >
            Slippery slope <ArrowDown size={18} className="fill-current" />
          </a>
        </div>
      </div>

      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle,rgba(229,184,0,0.06)_0%,transparent_60%)] z-0 pointer-events-none blur-3xl opacity-80" />
    </section>
  );
}
