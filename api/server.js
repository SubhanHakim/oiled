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
  very_light_crude:
    "very light crude oil, pale yellow color, low viscosity, semi-transparent liquid, natural subtle reflections",

  light_crude:
    "light crude oil, golden yellow color, medium-low viscosity, slightly translucent fluid, natural soft shine",

  medium_crude:
    "medium crude oil, amber brown color, medium viscosity, thicker fluid, subtle natural gloss",

  heavy_crude:
    "heavy crude oil, dark brown to nearly black color, high viscosity, thick dense liquid, low transparency, realistic natural surface reflections",

  extra_heavy_crude:
    "extra heavy crude oil, deep black color, extremely high viscosity, very thick tar-like liquid, almost opaque, minimal light reflection",
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
    const prompt = `
Add a thick shiny liquid texture pouring from the top of the character's head.
The effect must look like a ${oilDescription} fluid layer.
Thick fluid streams flowing down the top and sides.
Realistic glossy liquid behavior.
No metallic shine.
Natural surface reflections only.
Preserve the original character identity and proportions.
Do not modify background or clothing.
This is an additive liquid overlay effect only.
`;

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
      error: error.message || "Generation failed",
      details: error.response?.data || error.toString(),
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

// Vercel Serverless Function configuration to allow Multer file uploads
module.exports.config = {
  api: {
    bodyParser: false,
  },
};

if (require.main === module) {
  app.listen(5000, () => console.log("Local API server running on port 5000"));
}
