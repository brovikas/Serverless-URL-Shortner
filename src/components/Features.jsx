const features = [
  {
    title: "⚡ Fast",
    desc: "Generate shortened links instantly."
  },
  {
    title: "🔒 Secure",
    desc: "Safe and reliable URL redirection."
  },
  {
    title: "🌍 Share Anywhere",
    desc: "Perfect for social media and marketing."
  }
];

export default function Features() {
  return (
    <section className="grid md:grid-cols-3 gap-6 mt-16">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="p-6 rounded-3xl bg-white/5 border border-white/10"
        >
          <h3 className="text-xl font-semibold text-white mb-3">
            {feature.title}
          </h3>

          <p className="text-slate-400">
            {feature.desc}
          </p>
        </div>
      ))}
    </section>
  );
}