import React, { useState } from "react";
import axios from "axios";
import {
  Upload,
  ImageIcon,
  RefreshCw,
  Download,
  Settings2,
} from "lucide-react";

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
    <section id="generator" className="py-20 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-outfit font-extrabold mb-4 tracking-tight text-[#121212]">
            The Machine
          </h2>
          <p className="text-zinc-600 font-inter text-lg max-w-[600px] mx-auto">
            Give us an image, we give you oil. Simple as that.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-[1000px] mx-auto">
          {/* Controls Panel */}
          <div className="glass-panel p-8 flex flex-col gap-8">
            <div>
              <label className="flex items-center gap-2 font-outfit font-semibold text-lg mb-3 text-[#121212]">
                <Upload size={20} className="text-[#e5b800]" />
                1. Upload an Image
              </label>

              {!imagePreview ? (
                <div className="relative w-full h-56 border-2 border-dashed border-black/10 rounded-2xl flex flex-col items-center justify-center gap-3 transition-colors duration-300 cursor-pointer bg-black/[0.02] hover:bg-black/[0.04] hover:border-[#e5b800]/50 group">
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <ImageIcon
                    size={48}
                    className="text-zinc-400 group-hover:text-[#e5b800] transition-colors relative z-10 pointer-events-none"
                  />
                  <span className="text-zinc-500 font-medium relative z-10 pointer-events-none group-hover:text-[#121212] transition-colors">
                    Click to browse or drag image here
                  </span>
                </div>
              ) : (
                <div className="relative rounded-2xl overflow-hidden border border-black/10 group">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-auto max-h-[400px] block object-cover"
                  />
                  <div
                    className="absolute top-4 right-4 bg-white text-black text-sm px-4 py-2 rounded-lg border border-black/10 cursor-pointer hover:bg-gray-50 transition-colors z-10 shadow-sm font-medium"
                    onClick={clearSelection}
                  >
                    Replace Image
                  </div>
                </div>
              )}
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

            <div>
              <label className="flex items-center gap-2 font-outfit font-semibold text-lg mb-3 text-[#121212]">
                <Settings2 size={20} className="text-[#e5b800]" />
                2. Choose Viscosity
              </label>
              <div className="relative group">
                <select
                  className="w-full p-4 bg-white border border-black/10 text-[#121212] rounded-xl font-inter text-base appearance-none outline-none transition-colors duration-300 cursor-pointer focus:border-[#e5b800] hover:border-black/20 shadow-sm"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                >
                  <option value="very_light_crude">
                    Very Light (Almost Water)
                  </option>
                  <option value="light_crude">
                    Light Crude (Golden Syrup)
                  </option>
                  <option value="medium_crude">Medium Crude (Motor Oil)</option>
                  <option value="heavy_crude">Heavy Crude (Thick Tar)</option>
                  <option value="extra_heavy_crude">
                    Extra Heavy (The Abyss)
                  </option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 group-hover:text-[#e5b800] transition-colors">
                  ▼
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-100 p-4 rounded-xl text-red-600 font-medium text-sm">
                Oops: {error}
              </div>
            )}

            <button
              className="btn-primary w-full p-4 mt-2 flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none"
              onClick={handleUpload}
              disabled={loading || !image}
            >
              {loading ? (
                <>
                  <RefreshCw className="animate-spin" size={22} />
                  Pouring...
                </>
              ) : (
                "Make it Shiny"
              )}
            </button>
          </div>

          {/* Result Panel */}
          <div className="glass-panel p-8 min-h-[500px] flex flex-col items-center">
            <div className="w-full flex items-center justify-between mb-6">
              <h3 className="text-xl font-outfit font-semibold flex items-center gap-3 text-[#121212]">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${result ? "bg-emerald-500" : "bg-[#e5b800]"}`}
                />
                Output
              </h3>
            </div>

            <div className="flex-1 w-full border border-black/5 rounded-2xl bg-black/[0.02] flex items-center justify-center overflow-hidden relative">
              {loading ? (
                <div className="text-center w-full">
                  <div className="w-12 h-12 border-[3px] border-[#e5b800]/20 border-t-[#e5b800] rounded-full animate-spin mx-auto mb-6" />
                  <p className="text-zinc-500 font-inter text-sm animate-pulse">
                    Calculating fluid dynamics...
                  </p>
                </div>
              ) : result ? (
                <img
                  src={result}
                  alt="Generated"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center text-zinc-400 relative z-10 p-4 w-full flex flex-col items-center">
                  <ImageIcon size={48} className="mb-4 opacity-50" />
                  <p className="font-outfit text-sm">Result will appear here</p>
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
                    a.download = `oiled_transformation_${Date.now()}.png`;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                  } catch (error) {
                    console.error("Download failed:", error);
                    window.open(result, "_blank");
                  }
                }}
                className="mt-6 flex items-center w-full justify-center border border-black/10 cursor-pointer gap-2 bg-white p-4 rounded-xl text-[#121212] shadow-sm font-semibold transition-all hover:bg-gray-50"
              >
                <Download size={20} />
                Download Highly Speculative Asset
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
