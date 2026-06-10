import { nanoid } from "nanoid";
import { connectDB } from "../config/db.js";
import URLschema from "../models/Url.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "This Method is Not Allowed for the URL",
    });
  }

  try {
    await connectDB();

    const { originalUrl } = req.body;
    if (!originalUrl) {
      
      console.log("Nhi mila Orginal Url")
      
      return res.status(400).json({
        message: "URL Required!",
      });
    }

    const shortId = nanoid(8);
    const data = await URLschema.create({
      originalUrl,
      shortId,
    });
    
    return res.status(201).json({
      shortUrl: `${req.headers.origin}/${shortId}`,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}