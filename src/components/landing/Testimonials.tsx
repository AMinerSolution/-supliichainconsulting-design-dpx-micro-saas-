import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Supply Chain, GlobalTech Industries",
    avatar: "SC",
    rating: 5,
    text: "DPX reduced our inventory carrying costs by 31% in the first quarter. The AI forecasting is genuinely uncanny — it predicted a supplier disruption in Vietnam three weeks before we heard about it through any other channel.",
  },
  {
    name: "Marcus Rodriguez",
    role: "CPO, Apex Manufacturing Group",
    avatar: "MR",
    rating: 5,
    text: "We evaluated 12 supply chain platforms. DPX wasn't even close — it was in a different league. The ROI was evident within 60 days. Our procurement team went from firefighting to strategic planning overnight.",
  },
  {
    name: "Priya Nair",
    role: "Director of Operations, NovaBiomed",
    avatar: "PN",
    rating: 5,
    text: "Running clinical supply chains demands zero tolerance for error. DPX's risk intelligence caught a critical API shortage before it could impact patient care. This platform literally saves lives.",
  },
  {
    name: "James Whitfield",
    role: "COO, Summit Retail Group",
    avatar: "JW",
    rating: 5,
    text: "Stock-outs are retail's biggest nightmare. Since deploying DPX, our service levels have been at 99.8%. The AI demand sensing during peak season is nothing short of miraculous.",
  },
  {
    name: "Lena Hoffmann",
    role: "Head of Logistics, EuroDistrib AG",
    avatar: "LH",
    rating: 5,
    text: "The ERP integration took under 2 hours. We were generating value on day one. The analytics dashboard alone is worth the subscription — we've retired four legacy BI tools because of it.",
  },
  {
    name: "David Park",
    role: "CEO, Horizon Electronics",
    avatar: "DP",
    rating: 5,
    text: "DPX helped us navigate the chip shortage better than any of our competitors. While others were scrambling, we had already diversified our supplier base based on DPX's recommendations. It's our greatest competitive advantage.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-4">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
              Customer Stories
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Loved by <span className="gradient-text">2,400+ enterprises</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it. Here&apos;s what supply chain leaders say about DPX.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-slate-700 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
                <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{t.avatar}</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
