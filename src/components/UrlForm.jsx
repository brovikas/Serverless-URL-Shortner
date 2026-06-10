import { useState } from "react";
import { Link2, Copy, Check } from "lucide-react";
import QRCodeCard from "./QRCodeCard.jsx";

import api from "../services/api";

export default function UrlForm() {
  const [url, setUrl] = useState("https://");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) return;
    try {
      setLoading(true);

      const res = await api.post("/shorten", {
        originalUrl: url,
      });
      console.log("Response:", res.data);
      
      setShortUrl(res.data.shortUrl);
      setUrl("");
      
    } catch (error) {
      console.error(error);
      alert("Failed to shorten URL");
    } finally {
      setLoading(false);
    }
  };

  const copyUrl = async () => {
    await navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        
        {/* Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
          
          {/* Heading */}
          <div className="text-center mb-8">
            <div className="inline-flex p-4 rounded-2xl bg-indigo-500/20 mb-4">
              <Link2 className="w-8 h-8 text-indigo-400" />
            </div>

            <h1 className="text-4xl font-bold text-white">
              URL Shortener
            </h1>

            <p className="text-slate-400 mt-2">
              Convert long URLs into clean, shareable links.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="url"
              placeholder="Put Your URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              className="
                flex-1
                bg-white/5
                border border-white/10
                text-white
                placeholder:text-slate-500
                rounded-xl
                px-5
                py-4
                outline-none
                focus:ring-2
                focus:ring-indigo-500
                transition
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                px-8
                py-4
                rounded-xl
                bg-indigo-600
                hover:bg-indigo-500
                text-white
                font-semibold
                transition-all
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {loading ? "Shortening..." : "Shorten"}
            </button>
            
            
          </form>

          {/* Result */}
         
         {shortUrl && (
  <div className="mt-8 p-5 rounded-2xl bg-white/5 border border-white/10">
    <p className="text-slate-400 text-sm mb-2">
      Your shortened URL
    </p>

    <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
      <a
        href={shortUrl}
        target="_blank"
        rel="noreferrer"
        className="text-indigo-400 hover:text-indigo-300 break-all font-medium"
      >
        {shortUrl}
      </a>

      <button
        type="button"
        onClick={copyUrl}
        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg text-white"
      >
        {copied ? (
          <>
            <Check size={18} />
            Copied
          </>
        ) : (
          <>
            <Copy size={18} />
            Copy
          </>
        )}
      </button>
    </div>

    {/* QR Code */}
    <QRCodeCard url={shortUrl} />
  </div>
)}
         
        </div>

        {/* Footer */}
        <p className="text-center text-slate-500 mt-6 text-sm">
          Fast • Secure • Simple
        </p>
      </div>
    </div>
  );
}