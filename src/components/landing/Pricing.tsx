import { CheckCircle, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: 299,
    period: "month",
    description: "Perfect for small teams getting started with AI-driven supply chain optimization.",
    features: [
      "Up to 5 users",
      "AI demand forecasting",
      "Real-time inventory tracking",
      "Basic analytics dashboard",
      "Email support",
      "2 ERP integrations",
      { label: "Risk intelligence", included: false },
      { label: "Automated procurement", included: false },
    ],
    cta: "Start Free Trial",
    popular: false,
    color: "border-slate-700",
  },
  {
    name: "Growth",
    price: 999,
    period: "month",
    description: "The full platform for growing enterprises ready to scale operations globally.",
    features: [
      "Up to 50 users",
      "Advanced AI forecasting",
      "Real-time analytics",
      "Risk intelligence",
      "Automated procurement",
      "10 ERP integrations",
      "Priority 24/7 support",
      "Custom dashboards",
    ],
    cta: "Start Free Trial",
    popular: true,
    color: "border-indigo-500",
  },
  {
    name: "Enterprise",
    price: null,
    period: null,
    description: "Unlimited power for Fortune 500 supply chains with custom AI models and SLAs.",
    features: [
      "Unlimited users",
      "Custom AI models",
      "White-label option",
      "Unlimited integrations",
      "Dedicated success team",
      "On-prem deployment",
      "Custom SLA (99.99%)",
      "Executive reporting",
    ],
    cta: "Contact Sales",
    popular: false,
    color: "border-slate-700",
  },
];

type Feature = string | { label: string; included: boolean };

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-indigo-400 text-xs font-semibold uppercase tracking-widest">
              Transparent Pricing
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Simple, <span className="gradient-text">value-driven</span> plans
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Our customers average a 312% ROI within 90 days. We&apos;re so
            confident, we offer a 30-day money-back guarantee.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl border-2 p-8 flex flex-col",
                plan.color,
                plan.popular
                  ? "bg-indigo-950/60 shadow-2xl shadow-indigo-900/40"
                  : "bg-slate-800/50"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-2">
                  {plan.name}
                </h3>
                <div className="mb-3">
                  {plan.price !== null ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white">
                        ${plan.price.toLocaleString()}
                      </span>
                      <span className="text-slate-400 text-sm">
                        /{plan.period}
                      </span>
                    </div>
                  ) : (
                    <span className="text-4xl font-black text-white">
                      Custom
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature: Feature, idx) => {
                  const isObj = typeof feature === "object";
                  const label = isObj ? feature.label : feature;
                  const included = isObj ? feature.included : true;
                  return (
                    <li key={idx} className="flex items-center gap-2.5">
                      {included ? (
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      ) : (
                        <Minus className="w-4 h-4 text-slate-600 flex-shrink-0" />
                      )}
                      <span
                        className={cn(
                          "text-sm",
                          included ? "text-slate-200" : "text-slate-600"
                        )}
                      >
                        {label}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/dashboard"
                className={cn(
                  "group flex items-center justify-center gap-2 rounded-xl py-3 font-bold text-sm transition-all duration-200",
                  plan.popular
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white hover:shadow-lg hover:shadow-indigo-600/30"
                    : "bg-slate-700 hover:bg-slate-600 text-white"
                )}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-slate-500 text-sm">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            SOC 2 Type II Certified
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            GDPR Compliant
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            ISO 27001 Certified
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            30-Day Money Back Guarantee
          </span>
        </div>
      </div>
    </section>
  );
}
