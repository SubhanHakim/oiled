import React from "react";
import { Sparkles, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen pt-24 text-center relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#ffaa00]/10 backdrop-blur-sm border border-[#ffaa00]/20 py-2 px-4 rounded-full mb-8 text-[#ffaa00] text-sm font-semibold uppercase tracking-wider">
          <Sparkles size={16} />
          The Ultimate PFP Transformation
        </div>

        <h1 className="text-[clamp(3rem,8vw,5.5rem)] leading-[1.1] mb-6 uppercase font-outfit font-extrabold">
          Drip Your Identity in <br />
          <span className="text-gradient">Liquid Gold</span>
        </h1>

        <p className="text-[clamp(1.1rem,2vw,1.3rem)] text-zinc-400 max-w-[700px] mx-auto mb-12 leading-relaxed">
          Transform your profile pictures instantly. Our advanced AI applies
          realistic, viscous oil effects to your existing avatars while
          preserving your original identity.
        </p>

        <div className="flex gap-4 justify-center mb-20">
          <a
            href="#generator"
            className="btn-primary flex items-center justify-center gap-2 font-semibold py-4 px-10 rounded-full text-lg transition-transform duration-300 hover:-translate-y-0.5"
          >
            Start Generating <Zap size={20} />
          </a>
        </div>
      </div>

      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(255,170,0,0.08)_0%,transparent_60%)] z-0 pointer-events-none" />
    </section>
  );
}
