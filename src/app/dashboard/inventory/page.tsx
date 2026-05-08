"use client";

import { Search, Filter, AlertTriangle, TrendingDown, TrendingUp, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const inventoryItems = [
  {
    sku: "SKU-7829",
    name: "USB-C Power Adapters",
    category: "Electronics",
    onHand: 842,
    reorderPoint: 1200,
    maxStock: 5000,
    inTransit: 3000,
    daysOfStock: 12,
    trend: "down",
    status: "critical",
  },
  {
    sku: "SKU-3421",
    name: "Industrial Sensors Model X",
    category: "Electronics",
    onHand: 3210,
    reorderPoint: 800,
    maxStock: 6000,
    inTransit: 0,
    daysOfStock: 48,
    trend: "stable",
    status: "healthy",
  },
  {
    sku: "SKU-9104",
    name: "Polycarbonate Sheets 4mm",
    category: "Raw Materials",
    onHand: 1540,
    reorderPoint: 2000,
    maxStock: 8000,
    inTransit: 2000,
    daysOfStock: 21,
    trend: "up",
    status: "warning",
  },
  {
    sku: "SKU-2281",
    name: "Corrugated Packaging Box L",
    category: "Packaging",
    onHand: 12400,
    reorderPoint: 5000,
    maxStock: 20000,
    inTransit: 0,
    daysOfStock: 82,
    trend: "stable",
    status: "healthy",
  },
  {
    sku: "SKU-5540",
    name: "Copper Wire 12AWG",
    category: "Raw Materials",
    onHand: 2100,
    reorderPoint: 2500,
    maxStock: 10000,
    inTransit: 3000,
    daysOfStock: 28,
    trend: "up",
    status: "warning",
  },
  {
    sku: "SKU-6678",
    name: "HDPE Pellets Grade A",
    category: "Raw Materials",
    onHand: 4800,
    reorderPoint: 3000,
    maxStock: 12000,
    inTransit: 0,
    daysOfStock: 64,
    trend: "stable",
    status: "healthy",
  },
];

const categoryData = [
  { category: "Electronics", value: 4052, max: 11000 },
  { category: "Raw Materials", value: 8440, max: 30000 },
  { category: "Packaging", value: 12400, max: 20000 },
  { category: "Logistics", value: 1200, max: 5000 },
];

const statusConfig = {
  critical: { label: "Critical", class: "bg-red-50 text-red-700 border-red-200" },
  warning: { label: "Low Stock", class: "bg-amber-50 text-amber-700 border-amber-200" },
  healthy: { label: "Healthy", class: "bg-emerald-50 text-emerald-700 border-emerald-200" },
};

export default function InventoryPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Inventory Management</h1>
          <p className="text-slate-500 text-sm mt-1">
            24,391 active SKUs · 3 alerts require attention
          </p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
          <Package className="w-4 h-4" />
          Add Inventory
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total SKUs", value: "24,391", icon: Package, color: "text-indigo-600", bg: "bg-indigo-50" },
          { label: "Critical Items", value: "14", icon: AlertTriangle, color: "text-red-600", bg: "bg-red-50" },
          { label: "Inventory Value", value: "$8.4M", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Turnover Rate", value: "8.2x", icon: TrendingDown, color: "text-violet-600", bg: "bg-violet-50" },
        ].map((item) => (
          <div key={item.label} className="bg-white border border-slate-200 rounded-2xl p-5">
            <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center mb-3", item.bg)}>
              <item.icon className={cn("w-4 h-4", item.color)} />
            </div>
            <div className="text-2xl font-black text-slate-900">{item.value}</div>
            <div className="text-slate-500 text-xs mt-0.5">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Category Chart */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
        <h2 className="text-base font-bold text-slate-900 mb-4">
          Inventory by Category
        </h2>
        <ResponsiveContainer width="100%" height={140}>
          <BarChart data={categoryData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="category" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} />
            <Tooltip
              contentStyle={{ background: "#1e293b", border: "none", borderRadius: 8, color: "#f8fafc", fontSize: 12 }}
            />
            <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} name="On Hand" />
            <Bar dataKey="max" fill="#e2e8f0" radius={[4, 4, 0, 0]} name="Capacity" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center gap-3 p-4 border-b border-slate-100">
          <div className="flex-1 flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              className="bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none flex-1"
              placeholder="Search SKUs, products..."
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
              <tr className="border-b border-slate-100">
                <th className="text-left text-xs font-semibold text-slate-500 px-4 py-3">SKU / Product</th>
                <th className="text-left text-xs font-semibold text-slate-500 px-4 py-3">Category</th>
                <th className="text-right text-xs font-semibold text-slate-500 px-4 py-3">On Hand</th>
                <th className="text-right text-xs font-semibold text-slate-500 px-4 py-3">In Transit</th>
                <th className="text-right text-xs font-semibold text-slate-500 px-4 py-3">Days of Stock</th>
                <th className="text-center text-xs font-semibold text-slate-500 px-4 py-3">Trend</th>
                <th className="text-center text-xs font-semibold text-slate-500 px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item) => {
                const status = statusConfig[item.status as keyof typeof statusConfig];
                return (
                  <tr
                    key={item.sku}
                    className="border-b border-slate-50 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-4 py-3.5">
                      <div className="font-semibold text-slate-900">{item.name}</div>
                      <div className="text-xs text-slate-400">{item.sku}</div>
                    </td>
                    <td className="px-4 py-3.5 text-slate-600">{item.category}</td>
                    <td className="px-4 py-3.5 text-right">
                      <div className="font-semibold text-slate-900">
                        {item.onHand.toLocaleString()}
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1 mt-1 max-w-[80px] ml-auto">
                        <div
                          className={cn(
                            "h-1 rounded-full",
                            item.status === "critical" ? "bg-red-500" :
                            item.status === "warning" ? "bg-amber-500" : "bg-emerald-500"
                          )}
                          style={{ width: `${Math.min((item.onHand / item.maxStock) * 100, 100)}%` }}
                        />
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-right text-slate-600">
                      {item.inTransit.toLocaleString()}
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <span className={cn(
                        "font-semibold",
                        item.daysOfStock < 20 ? "text-red-600" :
                        item.daysOfStock < 30 ? "text-amber-600" : "text-emerald-600"
                      )}>
                        {item.daysOfStock}d
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      {item.trend === "up" ? (
                        <TrendingUp className="w-4 h-4 text-emerald-500 mx-auto" />
                      ) : item.trend === "down" ? (
                        <TrendingDown className="w-4 h-4 text-red-500 mx-auto" />
                      ) : (
                        <div className="w-4 h-0.5 bg-slate-300 mx-auto" />
                      )}
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <span className={cn(
                        "text-xs font-semibold px-2 py-1 rounded-full border",
                        status.class
                      )}>
                        {status.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
