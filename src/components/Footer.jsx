import React from "react";
import dexscreener from "../assets/dexscreener.svg";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between font-body text-[10px] font-bold tracking-widest uppercase gap-4 text-center sm:text-left">
        <div>&copy; {new Date().getFullYear()} OILED PROTOCOL.</div>

        <div className="flex items-center gap-6">
          <a href="#generator" className="hover:border-b border-[#1a1a1a]">
            SYSTEM
          </a>
          <a href="#features" className="hover:opacity-50 transition-all">
            <img src={dexscreener} alt="Dexscreener" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
