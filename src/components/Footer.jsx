import React from "react";
import { Droplet, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]/80 pt-16 pb-10 mt-24">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
        <div className="flex items-center gap-2.5 mb-6">
          <Droplet className="text-[#ffaa00]" size={32} />
          <h2 className="text-3xl m-0 font-outfit font-extrabold">
            <span className="text-white">OIL</span>
            <span className="text-gradient">ED</span>
          </h2>
        </div>

        <p className="text-zinc-400 max-w-md mb-8 leading-relaxed">
          The premium neural network platform for transforming avatars into
          liquid gold masterpieces.
        </p>

        <div className="flex gap-4 mb-12">
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-[#ffaa00] hover:text-[#ffaa00] transition-colors duration-300"
          >
            <Twitter size={20} />
          </a>
        </div>

        <div className="w-full h-[1px] bg-white/10 mb-8" />

        <p className="text-zinc-400 text-sm">
          © {new Date().getFullYear()} Oiled App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
