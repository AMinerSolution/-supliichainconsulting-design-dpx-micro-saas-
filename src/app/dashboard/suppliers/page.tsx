"use client";

import { Search, Filter, Plus, Truck, Star, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const suppliers = [
  {
    id: "SUP-001",
    name: "NovaTech Components",
    country: "Taiwan",
    flag: "🇹🇼",
    category: "Electronics",
    spend: 42800000,
    onTime: 98.4,
    quality: 99.1,
    risk: "Low",
    status: "Active",
    since: "2018",
    contacts: 3,
  },
  {
    id: "SUP-002",
    name: "Eastern Alloys Ltd",
    country: "South Korea",
    flag: "🇰🇷",
    category: "Raw Materials",
    spend: 28400000,
    onTime: 95.2,
    quality: 97.8,
    risk: "Low",
    status: "Active",
    since: "2020",
    contacts: 2,
  },
  {
    id: "SUP-003",
    name: "Acme Corp Electronics",
    country: "USA",
    flag: "🇺🇸",
    category: "Electronics",
    spend: 18200000,
    onTime: 84.7,
    quality: 91.2,
    risk: "Critical",
    status: "Watch",
    since: "2015",
    contacts: 4,
  },
  {
    id: "SUP-004",
    name: "Global Plastics Inc",
    country: "Germany",
    flag: "🇩🇪",
    category: "Raw Materials",
    spend: 12900000,
    onTime: 97.3,
    quality: 98.6,
    risk: "Low",
    status: "Active",
    since: "2021",
    contacts: 2,
  },
  {
    id: "SUP-005",
    name: "Apex Semiconductor",
    country: "Netherlands",
    flag: "🇳🇱",
    category: "Electronics",
    spend: 58900000,
    onTime: 91.8,
    quality: 99.4,
    risk: "Medium",
    status: "Active",
    since: "2019",
    contacts: 5,
  },
  {
    id: "SUP-006",
    name: "Nordic Steel Works",
    country: "Sweden",
    flag: "🇸🇪",
    category: "Raw Materials",
    spend: 9800000,
    onTime: 99.1,
    quality: 99.8,
    risk: "Low",
    status: "Active",
    since: "2022",
    contacts: 1,
  },
  {
    id: "SUP-007",
    name: "Sunrise Packaging Co",
    country: "China",
    flag: "🇨🇳",
    category: "Packaging",
    spend: 4200000,
    onTime: 88.4,
    quality: 94.1,
    risk: "Medium",
    status: "Review",
    since: "2020",
    contacts: 2,
  },
];

const riskConfig: Record<string, string> = {
  Low: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Medium: "bg-amber-50 text-amber-700 border-amber-200",
  Critical: "bg-red-50 text-red-700 border-red-200",
};

const statusConfig: Record<string, { class: string; icon: React.ElementType }> = {
  Active: { class: "bg-emerald-50 text-emerald-700", icon: CheckCircle },
  Watch: { class: "bg-red-50 text-red-700", icon: AlertTriangle },
  Review: { class: "bg-amber-50 text-amber-700", icon: AlertTriangle },
  Inactive: { class: "bg-slate-50 text-slate-700", icon: XCircle },
};

function ScoreBar({ value, max = 100 }: { value: number; max?: number }) {
  const pct = (value / max) * 100;
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-slate-100 rounded-full h-1.5">
        <div
          className={cn(
            "h-1.5 rounded-full",
            pct >= 95 ? "bg-emerald-500" : pct >= 88 ? "bg-amber-500" : "bg-red-500"
          )}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs font-semibold text-slate-600 w-10 text-right">
        {value}%
      </span>
    </div>
  );
}

export default function SuppliersPage() {
  const totalSpend = suppliers.reduce((s, sup) => s + sup.spend, 0);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Supplier Management</h1>
          <p className="text-slate-500 text-sm mt-1">
            {suppliers.length} active suppliers · $
            {(totalSpend / 1000000).toFixed(0)}M total spend managed
          </p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
          Add Supplier
        </button>
      </div>

      {/* Risk Summary */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Low Risk", count: suppliers.filter(s => s.risk === "Low").length, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
          { label: "Medium Risk", count: suppliers.filter(s => s.risk === "Medium").length, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" },
          { label: "Critical Risk", count: suppliers.filter(s => s.risk === "Critical").length, color: "text-red-600", bg: "bg-red-50", border: "border-red-200" },
        ].map((item) => (
          <div key={item.label} className={cn("border rounded-2xl p-5 flex items-center gap-3", item.bg, item.border)}>
            <div className={cn("text-3xl font-black", item.color)}>{item.count}</div>
            <div className={cn("text-sm font-semibold", item.color)}>{item.label}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center gap-3 p-4 border-b border-slate-100">
          <div className="flex-1 flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              className="bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none flex-1"
              placeholder="Search suppliers..."
            />
          </div>
          <button className="flex items-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-medium px-3 py-2 rounded-lg transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="text-left text-xs font-semibold text-slate-500 px-4 py-3">Supplier</th>
                <th className="text-left text-xs font-semibold text-slate-500 px-4 py-3">Category</th>
                <th className="text-right text-xs font-semibold text-slate-500 px-4 py-3">Annual Spend</th>
                <th className="text-left text-xs font-semibold text-slate-500 px-4 py-3 min-w-[120px]">On-Time %</th>
                <th className="text-left text-xs font-semibold text-slate-500 px-4 py-3 min-w-[120px]">Quality %</th>
                <th className="text-center text-xs font-semibold text-slate-500 px-4 py-3">Risk Level</th>
                <th className="text-center text-xs font-semibold text-slate-500 px-4 py-3">Status</th>
                <th className="text-center text-xs font-semibold text-slate-500 px-4 py-3">Score</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((sup) => {
                const statusCfg = statusConfig[sup.status] || statusConfig["Active"];
                const score = Math.round((sup.onTime * 0.5 + sup.quality * 0.5));
                return (
                  <tr
                    key={sup.id}
                    className="border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-base">
                          {sup.flag}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{sup.name}</div>
                          <div className="text-xs text-slate-400">{sup.country} · Since {sup.since}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-slate-600">{sup.category}</td>
                    <td className="px-4 py-3.5 text-right font-semibold text-slate-900">
                      ${(sup.spend / 1000000).toFixed(1)}M
                    </td>
                    <td className="px-4 py-3.5">
                      <ScoreBar value={sup.onTime} />
                    </td>
                    <td className="px-4 py-3.5">
                      <ScoreBar value={sup.quality} />
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <span className={cn(
                        "text-xs font-semibold px-2 py-0.5 rounded-full border",
                        riskConfig[sup.risk]
                      )}>
                        {sup.risk}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <span className={cn(
                        "flex items-center justify-center gap-1 text-xs font-semibold px-2 py-1 rounded-lg",
                        statusCfg.class
                      )}>
                        <statusCfg.icon className="w-3 h-3" />
                        {sup.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <div className="flex items-center justify-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "w-3 h-3",
                              i < Math.round(score / 20)
                                ? "text-amber-400 fill-amber-400"
                                : "text-slate-200 fill-slate-200"
                            )}
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Network Map Placeholder */}
      <div className="mt-6 bg-slate-900 rounded-2xl p-6 border border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Truck className="w-8 h-8 text-indigo-400" />
          <div>
            <div className="text-white font-semibold">Global Supplier Map</div>
            <div className="text-slate-400 text-xs mt-0.5">
              Interactive map with 1.2M+ suppliers across 180 countries
            </div>
          </div>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
          Explore Network
        </button>
      </div>
    </div>
  );
}
