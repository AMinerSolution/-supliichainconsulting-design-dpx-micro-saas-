import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/landing/Footer";
import {
  ArrowRight,
  Play,
  Users,
  TrendingUp,
  Globe,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Connect Your Systems",
    description:
      "Integrate your ERP, WMS, TMS, and supplier portals in minutes using our pre-built connectors. Zero code required.",
    icon: Globe,
  },
  {
    step: "02",
    title: "AI Learns Your Business",
    description:
      "DPX's AI studies your historical patterns, seasonal rhythms, and unique demand signals to build a custom model for your operations.",
    icon: TrendingUp,
  },
  {
    step: "03",
    title: "Unlock Superpowers",
    description:
      "Receive actionable insights, automated recommendations, and real-time alerts that transform your team from reactive to proactive.",
    icon: Users,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <Hero />

        {/* Social Proof Bar */}
        <section className="bg-slate-900 border-y border-slate-800 py-10 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-slate-500 text-sm uppercase tracking-widest font-medium mb-6">
              Trusted by leading enterprises worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10">
              {["NVIDIA", "3M", "Honeywell", "Siemens", "Caterpillar", "Unilever"].map(
                (brand) => (
                  <span
                    key={brand}
                    className="text-slate-600 font-black text-lg tracking-tight hover:text-slate-400 transition-colors"
                  >
                    {brand}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* Features */}
        <Features />

        {/* How it Works */}
        <section
          id="how-it-works"
          className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-4">
                <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">
                  How It Works
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                Up and running in{" "}
                <span className="gradient-text">under 48 hours</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                Most enterprise software takes months to deploy. DPX is live in
                days, delivering value from week one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((s, idx) => (
                <div key={s.step} className="relative">
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-indigo-500/50 to-transparent z-0" />
                  )}
                  <div className="relative z-10 flex flex-col items-start gap-4 bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
                    <div className="flex items-center gap-3">
                      <span className="text-indigo-400 font-black text-4xl font-mono">
                        {s.step}
                      </span>
                    </div>
                    <s.icon className="w-8 h-8 text-indigo-400" />
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">
                        {s.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Pricing */}
        <Pricing />

        {/* Final CTA */}
        <section className="animated-gradient py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }} />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
              Ready to transform your supply chain?
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              Join 2,400+ enterprises already using DPX to predict disruptions,
              cut costs, and outperform the competition.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-indigo-600/40"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <button className="flex items-center gap-2 text-slate-300 hover:text-white font-semibold px-6 py-4 rounded-xl text-base transition-colors">
                <Play className="w-4 h-4" />
                Watch 3-min Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

