const express = require("express");
const multer = require("multer");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const Replicate = require("replicate");

const path = require("path");
dotenv.config({ path: path.join(__dirname, "..", ".env") });

const app = express();
app.use(cors());
app.use(express.json());

const os = require("os");
const upload = multer({ dest: os.tmpdir() });

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

/* =========================
   COLOR PRESET MAP
========================= */
const oilColorMap = {
  light_golden_transparent:
    "light golden transparent oil with semi-translucent glossy texture",
  amber_orange_translucent:
    "amber orange translucent oil with warm golden reflections",
  dark_brown_crude_oil:
    "dark brown crude oil with medium viscosity and slight gloss",
  black_heavy_crude_oil:
    "thick black heavy crude oil with very high viscosity and deep shine",
  neon_green_slime:
    "bright neon green slime-like oil with strong glossy highlights",
};

/* =========================
   GENERATE ROUTE
========================= */
app.post("/api/generate", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    const selectedColor = req.body.color || "light_golden_transparent";
    const oilDescription =
      oilColorMap[selectedColor] || "metallic gold oil with glossy reflections";

    console.log("Selected color:", selectedColor);

    // Read uploaded image
    const imageBuffer = fs.readFileSync(req.file.path);
    const base64Image = imageBuffer.toString("base64");

    // Dynamic prompt
    const prompt = `Add very thick heavy ${oilDescription} pouring from the top of the character's head. The oil must be clearly visible and dominant. Large rounded dripping streams flowing down the forehead, cheeks and shoulders. Strong glossy reflections and bright white highlights. The oil should look dense and viscous. Keep the original character identity and face proportions exactly the same. Do not distort facial features. Do not modify the background or clothing. This is an additive overlay effect only.`;

    const output = await replicate.run("openai/gpt-image-1.5", {
      input: {
        prompt,
        input_images: [`data:image/png;base64,${base64Image}`],
        aspect_ratio: "1:1",
        quality: "high",
        output_format: "png",
      },
    });

    // delete uploaded temp file
    if (fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    const imageUrl = output[0].url();

    res.json({
      success: true,
      image: imageUrl,
    });
  } catch (error) {
    console.error("Generation Error:", error);
    res.status(500).json({
      success: false,
      error: "Generation failed",
    });
  }
});

/* =========================
   HEALTH CHECK
========================= */
app.get("/api", (req, res) => {
  res.json({ status: "Oil PFP API Running on Vercel 🚀" });
});

module.exports = app;

if (require.main === module) {
  app.listen(5000, () => console.log("Local API server running on port 5000"));
}
