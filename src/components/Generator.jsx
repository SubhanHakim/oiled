import React, { useState } from "react";
import axios from "axios";
import { Upload, RefreshCw } from "lucide-react";

export default function Generator() {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [result, setResult] = useState(null);
  const [color, setColor] = useState("light_golden_transparent");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const clearSelection = () => {
    setImage(null);
    setImagePreview(null);
    setResult(null);
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image first");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("color", color);

    try {
      setLoading(true);
      setError(null);
      const res = await axios.post("/api/generate", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(res.data.image);
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.error ||
          "Failed to generate image. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="generator"
      className="py-24 relative z-10 border-t border-[#1a1a1a]"
    >
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-20 flex flex-col items-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-heading font-bold mb-6 tracking-widest uppercase">
            WHAT ARE OILED?
          </h2>
          <p className="text-xs sm:text-sm font-body opacity-80 max-w-[600px] leading-[2] tracking-wide">
            Each fluid transformation is applied uniquely based on the
            underlying geometry. Upload an image to witness the computational
            process in real-time.
          </p>
        </div>

        <div className="flex justify-between font-body text-[10px] uppercase tracking-widest mb-2 font-bold px-1">
          <span>// YOUR PFP</span>
          <span>// OILED CONFIG</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#1a1a1a]">
          {/* Controls Panel */}
          <div className="p-6 md:p-10 flex flex-col gap-8 border-b md:border-b-0 md:border-r border-[#1a1a1a]">
            <div className="flex flex-col gap-3">
              <label className="font-body text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-[#1a1a1a] block"></span> BASE IMAGE
              </label>

              {!imagePreview ? (
                <div className="relative w-full h-48 border border-[#1a1a1a] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-black/5 transition-colors font-body">
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <Upload size={20} className="mb-2" />
                  <span className="text-[10px] uppercase tracking-wider text-center px-4">
                    [ CLICK OR DRAG & DROP ]
                  </span>
                </div>
              ) : (
                <div className="relative border border-[#1a1a1a] p-2">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-auto max-h-[300px] object-contain border border-[#1a1a1a]"
                  />
                  <div
                    className="absolute top-4 right-4 bg-[#e6e6e2] text-[#1a1a1a] font-body text-[10px] uppercase tracking-widest px-3 py-1 border border-[#1a1a1a] cursor-pointer hover:bg-[#1a1a1a] hover:text-[#e6e6e2] transition-colors z-10 font-bold"
                    onClick={clearSelection}
                  >
                    CLR
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 font-body">
              <label className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-[#1a1a1a] block"></span> OIL TYPE
              </label>
              <select
                className="w-full p-4 bg-transparent border border-[#1a1a1a] text-sm uppercase tracking-wider outline-none focus:bg-black/5 cursor-pointer rounded-none"
                style={{ appearance: "none" }}
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                <option value="very_light_crude">
                  V_LIGHT_CR (TRANSLUCENT)
                </option>
                <option value="light_crude">L_CRUDE (GOLDEN)</option>
                <option value="medium_crude">M_CRUDE (MOTOR)</option>
                <option value="heavy_crude">H_CRUDE (VISCOUS)</option>
                <option value="extra_heavy_crude">X_HEAVY (ABYSS)</option>
              </select>
            </div>

            {error && (
              <div className="font-body border border-[#1a1a1a] border-l-4 border-l-black bg-black/5 p-4 text-[11px] uppercase tracking-wider text-[#1a1a1a] font-bold">
                ERR: {error}
              </div>
            )}

            <button
              className="btn-primary w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleUpload}
              disabled={loading || !image}
            >
              {loading ? (
                <span className="flex items-center gap-3">
                  <RefreshCw className="animate-spin" size={16} />
                  EXECUTING...
                </span>
              ) : (
                "INITIALIZE_ENGINE"
              )}
            </button>
          </div>

          {/* Result Panel */}
          <div className="p-6 md:p-10 flex flex-col justify-between min-h-[400px] font-body">
            <label className="text-xs font-bold uppercase tracking-widest flex items-center justify-between mb-8">
              <span className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 ${result ? "bg-green-600" : "bg-zinc-400"} block border border-[#1a1a1a]`}
                ></span>
                OUTPUT_RENDER
              </span>
              {loading && (
                <span className="text-[10px] animate-pulse">PROCESSING_</span>
              )}
            </label>

            <div className="flex-1 w-full border border-[#1a1a1a] p-2 flex items-center justify-center relative bg-transparent overflow-hidden">
              {loading ? (
                <div className="text-center w-full">
                  <div className="w-8 h-8 border-2 border-[#1a1a1a] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-[10px] tracking-widest uppercase font-bold">
                    COMPUTING_VECTORS
                  </p>
                </div>
              ) : result ? (
                <img
                  src={result}
                  alt="Generated"
                  className="w-full h-full object-contain border border-[#1a1a1a]"
                />
              ) : (
                <div className="text-center opacity-40">
                  <p className="text-[10px] uppercase tracking-widest font-bold">
                    [ NO DATA ]
                  </p>
                </div>
              )}
            </div>

            {result && (
              <button
                onClick={async () => {
                  try {
                    const response = await fetch(result);
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.style.display = "none";
                    a.href = url;
                    a.download = `oiled_${Date.now()}.png`;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                  } catch (error) {
                    console.error("Download failed:", error);
                    window.open(result, "_blank");
                  }
                }}
                className="mt-6 btn-primary w-full !bg-[#1a1a1a] !text-[#e6e6e2] hover:!bg-transparent hover:!text-[#1a1a1a]"
              >
                DOWNLOAD_ASSET
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
