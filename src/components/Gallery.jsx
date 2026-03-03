import React from "react";
import img1 from "../assets/gallery/gallery1.jpeg";
import img2 from "../assets/gallery/gallery2.png";
import img3 from "../assets/gallery/galler3.png";
import img4 from "../assets/gallery/gallery4.png";
import bg4 from "../assets/bg/4.png";

export default function Gallery() {
  const galleryItems = [
    { src: img1, name: "Niqadio" },
    { src: img2, name: "DeGods" },
    { src: img3, name: "Frogana" },
    { src: img4, name: "Retardio Cousins" },
  ];

  return (
    <section
      id="gallery"
      className="py-24 border-t border-[#1a1a1a] overflow-hidden relative"
    >
      {/* Background Decor */}
      <img
        src={bg4}
        alt=""
        className="absolute top-[30%] left-[-10%] md:left-[-5%] w-48 md:w-80 opacity-20 -rotate-12 pointer-events-none"
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="mb-16 border-b border-[#1a1a1a] pb-4 flex items-end justify-between">
          <h2 className="text-xl sm:text-2xl font-heading font-bold uppercase tracking-widest">
            GALLERY
          </h2>
          <span className="font-body text-[10px] tracking-widest uppercase hidden sm:block font-bold">
            DATABASE / ARCHIVE
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group border border-[#1a1a1a] bg-black/[0.02] hover:bg-[#1a1a1a] hover:text-[#e6e6e2] transition-colors duration-300 p-3 flex flex-col"
            >
              <div className="flex justify-between items-center mb-3 px-1">
                <span className="font-body text-[10px] font-bold tracking-widest uppercase">
                  ID: {item.name}
                </span>
                <span className="font-body text-[10px] font-bold tracking-widest uppercase opacity-50">
                  v1.0.{index}
                </span>
              </div>

              <div className="relative overflow-hidden aspect-square border border-[#1a1a1a] group-hover:border-[#e6e6e2] transition-colors bg-[#e6e6e2]">
                <img
                  src={item.src}
                  alt={`Generated output ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />

                {/* Crosshairs overlay */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#1a1a1a] group-hover:border-white transition-colors z-20"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#1a1a1a] group-hover:border-white transition-colors z-20"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#1a1a1a] group-hover:border-white transition-colors z-20"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#1a1a1a] group-hover:border-white transition-colors z-20"></div>
              </div>

              <div className="mt-4 flex justify-between items-end px-1">
                <div className="font-body text-[9px] uppercase tracking-widest opacity-80 leading-relaxed">
                  STATUS:{" "}
                  <span className="text-green-600 group-hover:text-green-400 font-bold">
                    OILED
                  </span>
                  <br />
                  VISCOSITY: {85 + index * 5}%
                </div>
                <div className="w-5 h-5 rounded-full border border-[#1a1a1a] group-hover:border-[#e6e6e2] flex items-center justify-center transition-colors">
                  <div className="w-2 h-2 bg-[#1a1a1a] group-hover:bg-[#e6e6e2] rounded-full transition-colors"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
