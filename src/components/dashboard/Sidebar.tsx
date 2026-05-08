"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Brain,
  Package,
  ShoppingCart,
  Truck,
  BarChart3,
  Settings,
  Zap,
  ChevronLeft,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/ai-assistant", label: "AI Assistant", icon: Brain },
  { href: "/dashboard/inventory", label: "Inventory", icon: Package },
  { href: "/dashboard/orders", label: "Orders", icon: ShoppingCart },
  { href: "/dashboard/suppliers", label: "Suppliers", icon: Truck },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="flex items-center gap-2 px-5 h-16 border-b border-slate-800">
        <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
          <Zap className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="text-white font-bold text-lg">DPX</span>
        <span className="text-indigo-400 text-xs font-medium">Intelligence</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <div className="px-3 space-y-0.5">
          {navItems.map((item) => {
            const active =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150",
                  active
                    ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                )}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                {item.label}
                {item.label === "AI Assistant" && (
                  <span className="ml-auto bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    AI
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Separator */}
        <div className="mx-3 my-4 border-t border-slate-800" />

        <div className="px-3">
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-all"
          >
            <Bell className="w-4 h-4" />
            Alerts
            <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              3
            </span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-all"
          >
            <Settings className="w-4 h-4" />
            Settings
          </Link>
        </div>
      </nav>

      {/* User */}
      <div className="border-t border-slate-800 p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-bold">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white text-sm font-medium truncate">
              Jane Doe
            </div>
            <div className="text-slate-500 text-xs truncate">
              Growth Plan
            </div>
          </div>
          <Link href="/">
            <ChevronLeft className="w-4 h-4 text-slate-500 hover:text-slate-300 transition-colors" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
