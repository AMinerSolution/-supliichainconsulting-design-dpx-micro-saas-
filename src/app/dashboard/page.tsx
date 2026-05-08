"use client";

import StatsCard from "@/components/dashboard/StatsCard";
import {
  DollarSign,
  Package,
  ShoppingCart,
  Truck,
  AlertTriangle,
  Brain,
  TrendingUp,
  Clock,
} from "lucide-react";
import Link from "next/link";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const stats = [
  {
    title: "Total Spend Under Management",
    value: "$142.8M",
    change: -12.4,
    changeLabel: "cost savings vs last year",
    icon: DollarSign,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    title: "Active SKUs",
    value: "24,391",
    change: 8.2,
    changeLabel: "vs last month",
    icon: Package,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Open Purchase Orders",
    value: "1,847",
    change: -5.1,
    changeLabel: "fewer backlogs",
    icon: ShoppingCart,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Supplier Performance",
    value: "97.3%",
    change: 2.8,
    changeLabel: "on-time delivery rate",
    icon: Truck,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
];

const demandData = [
  { month: "Nov", forecast: 4200, actual: 4100 },
  { month: "Dec", forecast: 5800, actual: 5650 },
  { month: "Jan", forecast: 3900, actual: 4050 },
  { month: "Feb", forecast: 4400, actual: 4380 },
  { month: "Mar", forecast: 4800, actual: 4830 },
  { month: "Apr", forecast: 5200, actual: 5180 },
  { month: "May", forecast: 5600, actual: null },
];

const categorySpend = [
  { name: "Electronics", value: 38.4 },
  { name: "Raw Materials", value: 29.1 },
  { name: "Packaging", value: 14.7 },
  { name: "Logistics", value: 11.2 },
  { name: "Other", value: 6.6 },
];

const alerts = [
  {
    level: "critical",
    title: "Supplier risk detected",
    description: "Tier-2 supplier Acme Corp (electronics) showing financial stress signals",
    time: "12 min ago",
    color: "bg-red-50 border-red-200 text-red-700",
    dot: "bg-red-500",
  },
  {
    level: "warning",
    title: "Demand spike forecast",
    description: "AI predicts +34% demand surge for SKU-7829 in next 3 weeks",
    time: "1 hr ago",
    color: "bg-amber-50 border-amber-200 text-amber-700",
    dot: "bg-amber-500",
  },
  {
    level: "info",
    title: "Reorder recommended",
    description: "15 SKUs approaching reorder point based on lead time analysis",
    time: "3 hr ago",
    color: "bg-indigo-50 border-indigo-200 text-indigo-700",
    dot: "bg-indigo-500",
  },
];

const recentOrders = [
  { id: "PO-29841", supplier: "NovaTech Components", amount: "$284,500", status: "In Transit", eta: "May 12" },
  { id: "PO-29840", supplier: "Eastern Alloys", amount: "$142,300", status: "Processing", eta: "May 18" },
  { id: "PO-29838", supplier: "Pacific Logistics", amount: "$67,800", status: "Delivered", eta: "May 7" },
  { id: "PO-29835", supplier: "Global Plastics Inc", amount: "$38,200", status: "Delivered", eta: "May 5" },
];

const statusColors: Record<string, string> = {
  "In Transit": "bg-blue-50 text-blue-700",
  Processing: "bg-amber-50 text-amber-700",
  Delivered: "bg-emerald-50 text-emerald-700",
};

export default function DashboardPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-900">
            Supply Chain Overview
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Wednesday, May 8, 2025 · Last updated 2 min ago
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-700 text-xs font-semibold">
              AI Active
            </span>
          </div>
          <Link
            href="/dashboard/ai-assistant"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <Brain className="w-4 h-4" />
            Ask AI
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-8">
        {/* Demand Forecast */}
        <div className="xl:col-span-2 bg-white border border-slate-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Demand Forecast vs Actual
              </h2>
              <p className="text-slate-500 text-xs mt-0.5">
                AI accuracy: 97.3%
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-indigo-500 inline-block rounded" />
                Forecast
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-emerald-500 inline-block rounded" />
                Actual
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={demandData}>
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
              />
              <Tooltip
                contentStyle={{
                  background: "#1e293b",
                  border: "none",
                  borderRadius: 8,
                  color: "#f8fafc",
                  fontSize: 12,
                }}
              />
              <Line
                type="monotone"
                dataKey="forecast"
                stroke="#6366f1"
                strokeWidth={2}
                dot={false}
                strokeDasharray="5 5"
              />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#10b981"
                strokeWidth={2.5}
                dot={{ fill: "#10b981", r: 3 }}
                connectNulls={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Spend by Category */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <h2 className="text-base font-bold text-slate-900 mb-6">
            Spend by Category
          </h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={categorySpend} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#94a3b8" }}
                tickFormatter={(v) => `$${v}M`}
              />
              <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#64748b" }}
                width={80}
              />
              <Tooltip
                contentStyle={{
                  background: "#1e293b",
                  border: "none",
                  borderRadius: 8,
                  color: "#f8fafc",
                  fontSize: 12,
                }}
                formatter={(v) => [`$${v}M`, "Spend"]}
              />
              <Bar dataKey="value" fill="#6366f1" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        {/* AI Alerts */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-slate-900">
              AI Alerts
            </h2>
            <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">
              3 new
            </span>
          </div>
          <div className="space-y-3">
            {alerts.map((alert, i) => (
              <div
                key={i}
                className={`border rounded-xl p-3 ${alert.color}`}
              >
                <div className="flex items-start gap-2">
                  <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${alert.dot}`} />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm">{alert.title}</div>
                    <div className="text-xs mt-0.5 opacity-80">
                      {alert.description}
                    </div>
                    <div className="flex items-center gap-1 mt-1.5 text-xs opacity-60">
                      <Clock className="w-3 h-3" />
                      {alert.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="xl:col-span-2 bg-white border border-slate-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-slate-900">
              Recent Purchase Orders
            </h2>
            <Link
              href="/dashboard/orders"
              className="text-indigo-600 hover:text-indigo-500 text-xs font-semibold"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-4 h-4 text-slate-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      {order.id}
                    </div>
                    <div className="text-xs text-slate-500">{order.supplier}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm font-semibold text-slate-900">
                      {order.amount}
                    </div>
                    <div className="text-xs text-slate-500">
                      ETA: {order.eta}
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-lg ${
                      statusColors[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insight Banner */}
      <div className="mt-6 bg-gradient-to-r from-indigo-950 to-violet-950 border border-indigo-800 rounded-2xl p-5 flex items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Brain className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-white font-semibold text-sm">
              AI Insight: Procurement Opportunity Detected
            </div>
            <div className="text-indigo-300 text-xs mt-0.5">
              Based on current commodity futures, locking in copper contracts
              now could save $2.3M over the next 6 months.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href="/dashboard/ai-assistant"
            className="text-indigo-300 hover:text-white text-xs font-semibold whitespace-nowrap transition-colors"
          >
            Explore with AI →
          </Link>
          <TrendingUp className="w-4 h-4 text-indigo-400" />
        </div>
      </div>
    </div>
  );
}
