import React from "react";

export default function Features() {
  const specs = [
    {
      id: "01",
      title: "ALGORITHM",
      text: "Our neural network applies hyper-reflective oil layering techniques to underlying bitmaps.",
    },
    {
      id: "02",
      title: "PRESERVATION",
      text: "Core facial geometry is accurately detected to preserve visibility of identity markers.",
    },
    {
      id: "03",
      title: "VISCOSITY",
      text: "Choose from parameters ranging from completely translucent to unreadably dense.",
    },
  ];

  return (
    <section id="features" className="py-24 border-t border-[#1a1a1a]">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="mb-16 border-b border-[#1a1a1a] pb-4 flex items-end justify-between">
          <h2 className="text-xl sm:text-2xl font-heading font-bold uppercase tracking-widest">
            DOCUMENTATION
          </h2>
          <span className="font-body text-[10px] tracking-widest uppercase hidden sm:block font-bold">
            SYSTEM / SPECS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#1a1a1a]">
          {specs.map((item, index) => (
            <div
              key={index}
              className={`p-8 hover:bg-black/5 transition-colors flex flex-col justify-between min-h-[250px] ${
                index !== specs.length - 1
                  ? "border-b md:border-b-0 md:border-r border-[#1a1a1a]"
                  : ""
              }`}
            >
              <div>
                <span className="font-body font-bold text-[10px] tracking-widest opacity-50 block mb-4">
                  [{item.id}]
                </span>
                <h3 className="font-body font-bold uppercase tracking-widest mb-4">
                  {item.title}
                </h3>
              </div>
              <p className="font-body text-xs leading-[2] tracking-wide opacity-80">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
