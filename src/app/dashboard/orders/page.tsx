"use client";

import { Search, Filter, Plus, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

const orders = [
  {
    id: "PO-29841",
    supplier: "NovaTech Components",
    items: 14,
    amount: 284500,
    status: "In Transit",
    created: "May 1, 2025",
    eta: "May 12, 2025",
    category: "Electronics",
  },
  {
    id: "PO-29840",
    supplier: "Eastern Alloys Ltd",
    items: 3,
    amount: 142300,
    status: "Processing",
    created: "Apr 29, 2025",
    eta: "May 18, 2025",
    category: "Raw Materials",
  },
  {
    id: "PO-29838",
    supplier: "Pacific Logistics",
    items: 8,
    amount: 67800,
    status: "Delivered",
    created: "Apr 25, 2025",
    eta: "May 7, 2025",
    category: "Logistics",
  },
  {
    id: "PO-29835",
    supplier: "Global Plastics Inc",
    items: 6,
    amount: 38200,
    status: "Delivered",
    created: "Apr 22, 2025",
    eta: "May 5, 2025",
    category: "Raw Materials",
  },
  {
    id: "PO-29830",
    supplier: "Sunrise Packaging",
    items: 2,
    amount: 22100,
    status: "Cancelled",
    created: "Apr 18, 2025",
    eta: "—",
    category: "Packaging",
  },
  {
    id: "PO-29828",
    supplier: "Apex Semiconductor",
    items: 1,
    amount: 589000,
    status: "Approved",
    created: "Apr 15, 2025",
    eta: "May 28, 2025",
    category: "Electronics",
  },
  {
    id: "PO-29820",
    supplier: "Nordic Steel Works",
    items: 5,
    amount: 198400,
    status: "In Transit",
    created: "Apr 10, 2025",
    eta: "May 14, 2025",
    category: "Raw Materials",
  },
];

const statusConfig: Record<string, string> = {
  "In Transit": "bg-blue-50 text-blue-700 border-blue-200",
  Processing: "bg-amber-50 text-amber-700 border-amber-200",
  Delivered: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Cancelled: "bg-red-50 text-red-700 border-red-200",
  Approved: "bg-violet-50 text-violet-700 border-violet-200",
};

const summaryStats = [
  { label: "Open POs", value: "1,847", color: "text-indigo-600", bg: "bg-indigo-50" },
  { label: "Total Value", value: "$142.8M", color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Avg Lead Time", value: "14.2d", color: "text-amber-600", bg: "bg-amber-50" },
  { label: "On-Time Rate", value: "97.3%", color: "text-violet-600", bg: "bg-violet-50" },
];

export default function OrdersPage() {
  const total = orders.reduce((sum, o) => sum + o.amount, 0);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Purchase Orders</h1>
          <p className="text-slate-500 text-sm mt-1">
            1,847 open orders · ${(total / 1000000).toFixed(1)}M total value shown
          </p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
          New Order
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {summaryStats.map((s) => (
          <div key={s.label} className="bg-white border border-slate-200 rounded-2xl p-5">
            <div className={cn("text-2xl font-black mb-1", s.color)}>{s.value}</div>
            <div className="text-slate-500 text-xs">{s.label}</div>
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
              placeholder="Search PO number, supplier..."
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
                <th className="text-left text-xs font-semibold text-slate-500 px-4 py-3">PO Number</th>
                <th className="text-left text-xs font-semibold text-slate-500 px-4 py-3">Supplier</th>
                <th className="text-left text-xs font-semibold text-slate-500 px-4 py-3">Category</th>
                <th className="text-right text-xs font-semibold text-slate-500 px-4 py-3">Items</th>
                <th className="text-right text-xs font-semibold text-slate-500 px-4 py-3">Amount</th>
                <th className="text-left text-xs font-semibold text-slate-500 px-4 py-3">Created</th>
                <th className="text-left text-xs font-semibold text-slate-500 px-4 py-3">ETA</th>
                <th className="text-center text-xs font-semibold text-slate-500 px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-slate-100 rounded-lg flex items-center justify-center">
                        <ShoppingCart className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                      <span className="font-semibold text-indigo-600">{order.id}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 font-medium text-slate-900">{order.supplier}</td>
                  <td className="px-4 py-3.5 text-slate-500">{order.category}</td>
                  <td className="px-4 py-3.5 text-right text-slate-700">{order.items}</td>
                  <td className="px-4 py-3.5 text-right font-semibold text-slate-900">
                    ${order.amount.toLocaleString()}
                  </td>
                  <td className="px-4 py-3.5 text-slate-500">{order.created}</td>
                  <td className="px-4 py-3.5 text-slate-500">{order.eta}</td>
                  <td className="px-4 py-3.5 text-center">
                    <span
                      className={cn(
                        "text-xs font-semibold px-2.5 py-1 rounded-full border",
                        statusConfig[order.status] || "bg-slate-50 text-slate-700 border-slate-200"
                      )}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
