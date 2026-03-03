import React from "react";
import dexscreener from "../assets/dexscreener.svg";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between font-body text-[10px] font-bold tracking-widest uppercase gap-4 text-center sm:text-left">
        <div>&copy; {new Date().getFullYear()} OILED PFP CULT.</div>

        <div className="flex items-center gap-6">
          <a href="#generator" className="hover:border-b border-[#1a1a1a]">
            GENERATOR
          </a>
          <a
            href="https://pump.fun/coin/HvPVZYoCZfq4mDC8FGSeQZys8uQZ91SozCaYnEsZpump"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 transition-all"
          >
            <img src={dexscreener} alt="Dexscreener" className="h-4 w-4" />
          </a>
          <a
            href="https://x.com/i/communities/2028893662080565475/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 transition-all flex items-center"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
