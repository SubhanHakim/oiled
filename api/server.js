const express = require("express");
const multer = require("multer");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const Replicate = require("replicate");
const path = require("path");
const os = require("os");

dotenv.config({ path: path.join(__dirname, "..", ".env") });

const app = express();
app.use(cors());
app.use(express.json());

/* =========================
   FILE UPLOAD CONFIG
========================= */
const upload = multer({ dest: os.tmpdir() });

/* =========================
   REPLICATE INIT
========================= */
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

/* =========================
   REALISTIC CRUDE OIL COLOR MAP
========================= */
const oilColorMap = {
  very_light_crude:
    "very light crude oil, pale yellow color, low viscosity, semi-transparent petroleum liquid, natural subtle reflections",

  light_crude:
    "light crude oil, golden yellow color, medium-low viscosity, slightly translucent petroleum fluid, natural soft shine",

  medium_crude:
    "medium crude oil, amber brown color, medium viscosity, thicker petroleum liquid, subtle natural gloss",

  heavy_crude:
    "heavy crude oil, dark brown to nearly black color, high viscosity, thick dense petroleum liquid, low transparency, realistic natural surface reflections",

  extra_heavy_crude:
    "extra heavy crude oil, deep black color, extremely high viscosity, very thick tar-like petroleum liquid, almost opaque, minimal light reflection",
};

/* =========================
   GENERATE ROUTE
========================= */
app.post("/api/generate", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    const selectedColor = req.body.color || "medium_crude";
    const oilDescription =
      oilColorMap[selectedColor] || oilColorMap.medium_crude;

    console.log("Selected color:", selectedColor);

    // Read uploaded image
    const imageBuffer = fs.readFileSync(req.file.path);
    const base64Image = imageBuffer.toString("base64");

    /* =========================
       SAFE PRODUCTION PROMPT
    ========================= */
    const prompt = `
Apply a realistic crude oil liquid overlay effect on the top surface of the character.

The liquid material should resemble ${oilDescription}.
It should appear as a smooth decorative petroleum coating
with soft rounded drips forming naturally.

The fluid must show realistic viscosity and natural light absorption.
Use natural surface reflections only.
No metallic shine.
No chrome effect.

This is a purely cosmetic artistic overlay.
Non-violent transformation.
No harm.

Preserve the original character identity exactly.
Do not alter facial structure.
Do not distort proportions.
Do not modify the background or clothing.
Maintain the original art style.
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

    // Clean temp file
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
  res.json({ status: "Oil PFP API Running 🚀" });
});

module.exports = app;

/* =========================
   VERCEL CONFIG
========================= */
module.exports.config = {
  api: {
    bodyParser: false,
  },
};

/* =========================
   LOCAL DEV MODE
========================= */
if (require.main === module) {
  app.listen(5000, () => console.log("Local API server running on port 5000"));
}
