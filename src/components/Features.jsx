import React from "react";
import { Sparkles, Layers, Zap } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-[#e5b800]" />,
      title: "Hyper-Reflective Output",
      description:
        "Our proprietary algorithm ensures maximum light scattering. The oil isn't just dark, it's irresponsibly shiny.",
    },
    {
      icon: <Layers className="w-8 h-8 text-[#e5b800]" />,
      title: "Non-Destructive Process",
      description:
        "We preserve your core facial geometry while hopelessly covering it in thick, digital crude. Your eyes remain visible.",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#e5b800]" />,
      title: "Real-time Viscosity",
      description:
        "From light translucent syrup to the densest black tar. You choose how ruined your picture gets.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative z-10 border-y border-black/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-outfit font-extrabold mb-4 tracking-tight text-[#121212]">
            Why are we doing this?
          </h2>
          <p className="text-zinc-500 font-inter text-base sm:text-lg max-w-[600px] mx-auto">
            We spent millions developing a state-of-the-art AI, and this is what
            we decided to use it for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#fafafa] p-6 sm:p-8 rounded-2xl border border-black/5 hover:border-[#e5b800]/30 transition-colors duration-300 flex flex-col items-center text-center group"
            >
              <div className="p-4 bg-white rounded-xl shadow-sm mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-outfit font-bold text-xl text-[#121212] mb-3">
                {feature.title}
              </h3>
              <p className="font-inter text-zinc-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
