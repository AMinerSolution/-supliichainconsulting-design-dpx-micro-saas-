"use client";

import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { TrendingUp, TrendingDown, DollarSign, Package, Truck, BarChart3 } from "lucide-react";

const savingsData = [
  { month: "Jun 24", savings: 1.2 },
  { month: "Jul 24", savings: 1.8 },
  { month: "Aug 24", savings: 2.1 },
  { month: "Sep 24", savings: 2.4 },
  { month: "Oct 24", savings: 3.1 },
  { month: "Nov 24", savings: 2.8 },
  { month: "Dec 24", savings: 3.6 },
  { month: "Jan 25", savings: 4.2 },
  { month: "Feb 25", savings: 3.9 },
  { month: "Mar 25", savings: 4.8 },
  { month: "Apr 25", savings: 5.1 },
  { month: "May 25", savings: 5.4 },
];

const serviceLevel = [
  { month: "Nov", target: 98, actual: 97.1 },
  { month: "Dec", target: 98, actual: 96.8 },
  { month: "Jan", target: 98, actual: 97.4 },
  { month: "Feb", target: 98, actual: 98.1 },
  { month: "Mar", target: 98, actual: 98.4 },
  { month: "Apr", target: 98, actual: 97.9 },
  { month: "May", target: 98, actual: 99.1 },
];

const spendDistribution = [
  { name: "Electronics", value: 48.2, color: "#6366f1" },
  { name: "Raw Materials", value: 28.4, color: "#10b981" },
  { name: "Packaging", value: 12.1, color: "#f59e0b" },
  { name: "Logistics", value: 8.2, color: "#8b5cf6" },
  { name: "Other", value: 3.1, color: "#94a3b8" },
];

const kpis = [
  {
    label: "Total Cost Savings",
    value: "$41.3M",
    change: "+23.4%",
    positive: true,
    icon: DollarSign,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    sub: "vs prior year",
  },
  {
    label: "Inventory Turns",
    value: "8.2x",
    change: "+1.4x",
    positive: true,
    icon: Package,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    sub: "annual rate",
  },
  {
    label: "Supplier OTIF",
    value: "97.3%",
    change: "+2.8%",
    positive: true,
    icon: Truck,
    color: "text-violet-600",
    bg: "bg-violet-50",
    sub: "on-time in-full",
  },
  {
    label: "Forecast Accuracy",
    value: "97.3%",
    change: "+3.1%",
    positive: true,
    icon: BarChart3,
    color: "text-amber-600",
    bg: "bg-amber-50",
    sub: "AI model v4.2",
  },
];

export default function AnalyticsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Analytics & Insights</h1>
          <p className="text-slate-500 text-sm mt-1">
            12-month performance overview · Last updated: May 8, 2025
          </p>
        </div>
        <div className="flex gap-2">
          {["3M", "6M", "12M", "YTD"].map((p, i) => (
            <button
              key={p}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                i === 2
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="bg-white border border-slate-200 rounded-2xl p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${kpi.bg}`}>
                <kpi.icon className={`w-4 h-4 ${kpi.color}`} />
              </div>
              <span
                className={`flex items-center gap-1 text-xs font-semibold ${
                  kpi.positive ? "text-emerald-600" : "text-red-600"
                }`}
              >
                {kpi.positive ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {kpi.change}
              </span>
            </div>
            <div className="text-2xl font-black text-slate-900 mb-0.5">{kpi.value}</div>
            <div className="text-slate-600 text-sm font-medium">{kpi.label}</div>
            <div className="text-slate-400 text-xs">{kpi.sub}</div>
          </div>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-5">
        {/* Savings Trend */}
        <div className="xl:col-span-2 bg-white border border-slate-200 rounded-2xl p-6">
          <div className="mb-4">
            <h2 className="text-base font-bold text-slate-900">Monthly Cost Savings</h2>
            <p className="text-slate-500 text-xs mt-0.5">AI-driven savings vs baseline ($M)</p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={savingsData}>
              <defs>
                <linearGradient id="savingsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#94a3b8" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#94a3b8" }}
                tickFormatter={(v) => `$${v}M`}
              />
              <Tooltip
                contentStyle={{
                  background: "#1e293b",
                  border: "none",
                  borderRadius: 8,
                  color: "#f8fafc",
                  fontSize: 12,
                }}
                formatter={(v) => [`$${v}M`, "Savings"]}
              />
              <Area
                type="monotone"
                dataKey="savings"
                stroke="#6366f1"
                strokeWidth={2.5}
                fill="url(#savingsGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Spend Donut */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <h2 className="text-base font-bold text-slate-900 mb-4">Spend Mix</h2>
          <div className="flex flex-col items-center">
            <PieChart width={180} height={160}>
              <Pie
                data={spendDistribution}
                cx={90}
                cy={75}
                innerRadius={50}
                outerRadius={75}
                paddingAngle={3}
                dataKey="value"
              >
                {spendDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
            <div className="space-y-1.5 w-full mt-2">
              {spendDistribution.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: item.color }}
                    />
                    <span className="text-xs text-slate-600">{item.name}</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-900">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Level */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <div className="mb-4">
          <h2 className="text-base font-bold text-slate-900">Service Level Performance</h2>
          <p className="text-slate-500 text-xs mt-0.5">Target (98%) vs Actual</p>
        </div>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={serviceLevel}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              domain={[94, 100]}
              tickFormatter={(v) => `${v}%`}
            />
            <Tooltip
              contentStyle={{
                background: "#1e293b",
                border: "none",
                borderRadius: 8,
                color: "#f8fafc",
                fontSize: 12,
              }}
              formatter={(v) => [`${v}%`]}
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke="#e2e8f0"
              strokeWidth={1.5}
              dot={false}
              strokeDasharray="4 4"
            />
            <Line
              type="monotone"
              dataKey="actual"
              stroke="#10b981"
              strokeWidth={2.5}
              dot={{ fill: "#10b981", r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
