import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change: number;
  changeLabel?: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
}

export default function StatsCard({
  title,
  value,
  change,
  changeLabel = "vs last month",
  icon: Icon,
  iconBg,
  iconColor,
}: StatsCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", iconBg)}>
          <Icon className={cn("w-5 h-5", iconColor)} />
        </div>
        <div
          className={cn(
            "flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full",
            isPositive
              ? "bg-emerald-50 text-emerald-600"
              : "bg-red-50 text-red-600"
          )}
        >
          {isPositive ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          {Math.abs(change)}%
        </div>
      </div>
      <div className="text-2xl font-black text-slate-900 mb-1">{value}</div>
      <div className="text-slate-500 text-sm font-medium">{title}</div>
      <div className="text-slate-400 text-xs mt-0.5">{changeLabel}</div>
    </div>
  );
}
