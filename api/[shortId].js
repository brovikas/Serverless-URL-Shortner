import { connectDB } from "../config/db.js";
import URLschema from "../models/Url.js";

export default async function handler(req, res) {
  try {
    await connectDB();

    const { shortId } = req.query;

    const url = await URLschema.findOne({
      shortId,
    });

    if (!url) {
      return res.status(404).json({
        message: "URL not found",
      });
    }

    url.clicks += 1;
    await url.save();

    return res.redirect(url.originalUrl);
  } catch (error) {
    console.log("Got Error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}