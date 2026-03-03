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
      const res = await axios.post("/api/server/generate", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(res.data.image);
    } catch (err) {
      console.error(err);
      setError("Failed to generate image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="generator" className="py-20 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-outfit font-extrabold mb-4">
            Generator Hub
          </h2>
          <p className="text-zinc-400">
            Upload your target, select an oil preset, and hit generate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-[1000px] mx-auto">
          {/* Controls Panel */}
          <div className="glass-panel p-8 flex flex-col gap-6 rounded-3xl">
            <div>
              <label className="flex items-center gap-2 font-semibold mb-3 text-white">
                <Upload size={18} className="text-[#ffaa00]" />
                Upload Image
              </label>

              {!imagePreview ? (
                <div className="relative w-full h-48 border-2 border-dashed border-[#ffaa00]/40 rounded-2xl flex flex-col items-center justify-center gap-3 transition-colors duration-300 cursor-pointer bg-[#ffaa00]/[0.02] hover:bg-[#ffaa00]/[0.05] hover:border-[#ffaa00]">
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <ImageIcon
                    size={48}
                    className="text-white/20 relative z-10 pointer-events-none"
                  />
                  <span className="text-zinc-400 font-medium relative z-10 pointer-events-none">
                    Click or drag image here
                  </span>
                </div>
              ) : (
                <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-auto block object-cover"
                  />
                  <div
                    className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 cursor-pointer text-sm hover:bg-black/80 transition-colors z-10"
                    onClick={clearSelection}
                  >
                    Change Image
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 font-semibold mb-3 text-white">
                <Settings2 size={18} className="text-[#ffaa00]" />
                Oil Viscosity & Color
              </label>
              <div className="relative">
                <select
                  className="w-full p-3.5 bg-black/50 border border-white/10 text-white rounded-xl font-inter text-base appearance-none outline-none transition-colors duration-300 cursor-pointer focus:border-[#ffaa00]"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                >
                  <option value="light_golden_transparent">
                    Liquid Gold (Translucent)
                  </option>
                  <option value="amber_orange_translucent">
                    Amber Honey (Warm)
                  </option>
                  <option value="dark_brown_crude_oil">
                    Dark Crude (Medium)
                  </option>
                  <option value="black_heavy_crude_oil">
                    Heavy Crude (Thick)
                  </option>
                  <option value="neon_green_slime">Neon Slime (Bright)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-[10px]">
                  ▼
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl text-red-500 text-sm">
                {error}
              </div>
            )}

            <button
              className="btn-primary w-full p-4 text-lg mt-2 flex items-center justify-center gap-2 rounded-full font-semibold transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed border-0"
              onClick={handleUpload}
              disabled={loading || !image}
            >
              {loading ? (
                <>
                  <RefreshCw className="animate-spin" size={20} />
                  Processing...
                </>
              ) : (
                "Generate PFP"
              )}
            </button>
          </div>

          {/* Result Panel */}
          <div className="glass-panel p-8 min-h-[400px] flex flex-col rounded-3xl">
            <h3 className="text-2xl mb-6 flex items-center gap-3 font-outfit font-bold relative z-10 m-0">
              <span
                className={`w-2.5 h-2.5 rounded-full ${result ? "bg-emerald-500" : "bg-[#ffaa00] inline-block"}`}
              />
              Output Preview
            </h3>

            <div className="flex-1 border border-white/10 rounded-2xl bg-black/30 flex items-center justify-center overflow-hidden relative">
              {loading ? (
                <div className="text-center w-full">
                  <div className="w-12 h-12 border-4 border-[#ffaa00]/20 border-t-[#ffaa00] rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-zinc-400 animate-pulse">
                    Applying neural oil effects...
                  </p>
                </div>
              ) : result ? (
                <img
                  src={result}
                  alt="Generated"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center text-zinc-400 opacity-50 relative z-10 p-4 w-full">
                  <ImageIcon size={64} className="mx-auto mb-4" />
                  <p>Your masterpiece will appear here</p>
                </div>
              )}
            </div>

            {result && (
              <a
                href={result}
                download="oiled_pfp.png"
                className="mt-6 flex items-center justify-center gap-2 bg-white/10 p-4 rounded-xl text-white font-semibold no-underline hover:bg-white/20 transition-colors"
              >
                <Download size={20} />
                Download HD Image
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
