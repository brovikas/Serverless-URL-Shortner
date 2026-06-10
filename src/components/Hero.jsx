export default function Hero() {
  return (
    <section className="text-center mb-14">
      <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-6">
        🚀 Fast & Secure URL Shortener
      </span>

      <h1 className="text-4xl md:text-7xl font-bold text-white">
        Shorten Your
        <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Long URLs
        </span>
      </h1>

      <p className="max-w-2xl mx-auto mt-6 text-lg text-slate-400">
        Create clean, shareable links instantly.
        Manage and share links beautifully.
      </p>
    </section>
  );
}