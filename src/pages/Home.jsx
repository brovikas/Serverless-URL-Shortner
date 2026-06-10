import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UrlForm from "../components/UrlForm";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Background from "../components/Background";

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">

      <Background />

      <div className="relative z-10">
        <Navbar />

        <main className="max-w-6xl mx-auto px-6 py-12">
          <Hero />

          <div className="max-w-3xl mx-auto">
            <UrlForm />
          </div>

          <Features />
        </main>

        <Footer />
      </div>

    </div>
  );
}