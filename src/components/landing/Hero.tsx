import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle,
  Zap,
} from "lucide-react";

const highlights = [
  "No credit card required",
  "14-day free trial",
  "Cancel anytime",
];

const stats = [
  { label: "Cost Reduction", value: "34%" },
  { label: "Faster Decisions", value: "10x" },
  { label: "ROI in 90 Days", value: "312%" },
  { label: "Enterprise Clients", value: "2,400+" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen animated-gradient flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/40 rounded-full px-4 py-1.5 mb-8">
          <Brain className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-indigo-300 text-xs font-medium tracking-wide uppercase">
            AI-Powered Supply Chain Platform
          </span>
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
          The{" "}
          <span className="relative">
            <span className="gradient-text">Smartest</span>
          </span>{" "}
          Supply Chain
          <br />
          Platform on Earth
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          DPX uses cutting-edge AI to predict disruptions, optimize inventory,
          and automate procurement — saving enterprises{" "}
          <span className="text-white font-semibold">millions every quarter</span>.
          Trusted by Fortune 500s worldwide.
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {highlights.map((h) => (
            <div key={h} className="flex items-center gap-1.5 text-slate-400 text-sm">
              <CheckCircle className="w-4 h-4 text-green-400" />
              {h}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            href="/dashboard"
            className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:shadow-lg hover:shadow-indigo-600/40 hover:-translate-y-0.5 pulse-glow"
          >
            <Zap className="w-5 h-5" />
            Start Free Trial
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#features"
            className="flex items-center gap-2 text-slate-300 hover:text-white border border-slate-600 hover:border-slate-400 font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200"
          >
            <BarChart3 className="w-4 h-4" />
            See Live Demo
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-5 flex flex-col items-center"
            >
              <span className="text-3xl font-black text-white mb-1">
                {stat.value}
              </span>
              <span className="text-slate-400 text-xs font-medium text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
