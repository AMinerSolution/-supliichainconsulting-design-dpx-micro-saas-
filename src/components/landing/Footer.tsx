import Link from "next/link";
import { Zap, Globe, Mail, Share2 } from "lucide-react";

const footerLinks = {
  Product: [
    "Features",
    "Pricing",
    "Changelog",
    "Roadmap",
    "Status",
  ],
  Solutions: [
    "Manufacturing",
    "Retail",
    "Healthcare",
    "Automotive",
    "Aerospace",
  ],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "GDPR"],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg">DPX</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              The world&apos;s most intelligent supply chain platform, powered by AI.
            </p>
            <div className="flex gap-3">
              {[Globe, Mail, Share2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © 2025 DPX Supply Intelligence, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-slate-500 text-xs">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
