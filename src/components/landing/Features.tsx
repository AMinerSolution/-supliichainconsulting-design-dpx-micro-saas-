import {
  Brain,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Bell,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Demand Forecasting",
    description:
      "Our transformer-based models analyze 200+ signals to predict demand with 97.3% accuracy — up to 18 months ahead.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Analytics",
    description:
      "Instant visibility across your entire supply chain. Monitor KPIs, spot bottlenecks, and act before issues escalate.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Shield,
    title: "Risk Intelligence",
    description:
      "Proactively identify supplier risks, geopolitical disruptions, and climate events before they impact your operations.",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: Zap,
    title: "Automated Procurement",
    description:
      "AI negotiates and places purchase orders automatically based on your policies — saving 20+ hours per buyer per week.",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    icon: Globe,
    title: "Global Supplier Network",
    description:
      "Access 1.2M+ pre-vetted suppliers across 180 countries. Diversify sourcing with one click.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    icon: BarChart3,
    title: "Financial Optimization",
    description:
      "Dynamic inventory positioning reduces carrying costs by up to 28% while maintaining 99.9% service levels.",
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/20",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Intelligent notification engine surfaces only what matters, when it matters — reducing alert fatigue by 89%.",
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/20",
  },
  {
    icon: RefreshCw,
    title: "ERP Integration",
    description:
      "Connect to SAP, Oracle, NetSuite, and 50+ systems in minutes with our no-code integration engine.",
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/20",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-indigo-400 text-xs font-semibold uppercase tracking-widest">
              Platform Features
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Everything you need to{" "}
            <span className="gradient-text">dominate</span> your supply chain
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Built by supply chain veterans and AI researchers, DPX covers every
            dimension of modern supply chain management.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${feature.bg}`}
            >
              <div className="mb-4">
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-white font-bold text-base mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
