import React from "react";
import bg2 from "../assets/bg/2.png";

export default function Community() {
  return (
    <section className="py-24 border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Background Decor */}
      <img
        src={bg2}
        alt=""
        className="absolute bottom-[-5%] right-[5%] md:right-[15%] w-24 md:w-32 opacity-30 rotate-[20deg] pointer-events-none"
      />

      <div className="max-w-[700px] mx-auto px-6 text-center relative z-10">
        <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-heading font-bold tracking-widest mb-6 uppercase text-[#1a1a1a]">
          JOIN THE NETWORK
        </h2>

        <p className="font-body text-xs sm:text-sm leading-[2] tracking-wide max-w-[500px] mx-auto mb-10 opacity-80">
          Sync with other nodes. Understand the protocol. Maintain the fluid
          system. Open access restricted to authorized personnel.
        </p>

        <a
          href="https://x.com/i/communities/2028893662080565475/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center justify-center gap-4"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          ACCESS X.COM SYSTEM
        </a>
      </div>
    </section>
  );
}
