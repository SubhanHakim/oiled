import React from "react";
import { Send, Twitter, Users } from "lucide-react";

export default function Community() {
  return (
    <section className="py-16 sm:py-24 bg-[#fafafa] relative z-10">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#e5b800]/10 border border-[#e5b800]/20 py-1.5 sm:py-2 px-3 sm:px-4 rounded-full mb-6 sm:mb-8 text-[#ccaa00] text-xs sm:text-sm font-semibold tracking-wider cursor-default">
          <Users size={16} />
          Board of Directors (Community)
        </div>

        <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-outfit font-extrabold mb-4 sm:mb-6 tracking-tight text-[#121212] leading-[1.1]">
          Join the exclusive circle of <br className="hidden sm:block" />
          <span className="text-gradient">extremely oily people</span>
        </h2>

        <p className="text-zinc-500 font-inter text-base sm:text-lg max-w-[600px] mx-auto mb-10 sm:mb-12">
          Discuss viscosity, share your highly reflective PFPs, and pretend you
          understand what the algorithm actually does. It's totally not a cult.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#121212] text-white py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl font-outfit font-semibold hover:bg-[#202020] transition-all shadow-md group w-full sm:w-auto"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>Follow us on X</span>
          </a>
        </div>
      </div>
    </section>
  );
}
