"use client";

import { useState, useRef, useEffect } from "react";
import { Brain, Send, Sparkles, RefreshCw, Copy, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestedPrompts = [
  "What are my top 3 supply chain risks this week?",
  "Which suppliers have the highest on-time delivery rate?",
  "Forecast demand for electronics category Q3",
  "Recommend reorder quantities for top 10 SKUs",
  "Identify cost savings opportunities in logistics",
  "Analyze my inventory turnover ratio",
];

const mockResponses: Record<string, string> = {
  default: `Based on your current supply chain data, here's what I've identified:

**Key Findings:**
- Your on-time delivery rate is **97.3%**, up 2.8% from last month
- Inventory turnover has improved to **8.2x** annually
- 3 critical risk signals detected in your Tier-2 supplier network

**Immediate Recommendations:**
1. **Diversify electronics sourcing** — Acme Corp shows financial stress signals. I recommend pre-qualifying 2 backup suppliers from our network in Taiwan and South Korea.
2. **Accelerate reorder on SKU-7829** — Demand surge predicted (+34%). Current safety stock will be depleted in ~18 days.
3. **Lock copper contracts** — Based on commodity futures analysis, forward contracts could save $2.3M over 6 months.

Would you like me to deep-dive into any of these areas?`,
  risk: `**Supply Chain Risk Analysis — May 8, 2025**

I've analyzed your entire supplier network and identified the following risks:

🔴 **Critical**
- Acme Corp (electronics): Negative cash flow signals in SEC filings. 3 late payments to sub-suppliers in past 90 days. Recommend: Reduce single-source dependency to <40%.

🟡 **Medium Risk**
- Eastern Alloys: Operating in geopolitical hotspot (Region III). +18% probability of disruption in next 60 days.
- Pacific Logistics: Port congestion at LAX adding 4–7 day delays. Impact: 23 active POs.

🟢 **Low Risk**
- All other Tier-1 suppliers performing within normal parameters.

**DPX Mitigation Playbook:**
1. Activate backup supplier protocol for Acme Corp
2. Pre-position 3-week safety stock for electronics
3. Route Pacific orders through Long Beach until congestion clears

Risk score: **6.2/10** (improving from 7.1 last month)`,
  forecast: `**Demand Forecast: Electronics Category — Q3 2025**

Using our transformer-based forecasting model (97.3% accuracy):

| Month | Forecast Units | vs Q3 2024 | Confidence |
|-------|---------------|------------|-----------|
| July  | 48,200        | +12.4%     | 96.8%     |
| Aug   | 52,800        | +18.2%     | 95.1%     |
| Sept  | 61,400        | +23.7%     | 92.3%     |

**Key Drivers:**
- Back-to-school season effect (+15%)
- New product launch (SKU-9210) expected August
- Competitor supply constraints creating demand shift

**Inventory Recommendation:**
Start building safety stock in June. Required buffer: **+8,400 units** above current plan.

Procurement budget impact: **+$2.1M** (recoverable via Q3 revenue uplift of **~$8.4M**)`,
};

function getResponse(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("risk") || lower.includes("supplier")) return mockResponses.risk;
  if (lower.includes("forecast") || lower.includes("demand")) return mockResponses.forecast;
  return mockResponses.default;
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 bg-indigo-400 rounded-full typing-dot`}
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
}

function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";
  return (
    <div
      className={cn(
        "flex gap-3",
        isUser ? "flex-row-reverse msg-user" : "flex-row msg-ai"
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-1",
          isUser ? "bg-indigo-600" : "bg-slate-800"
        )}
      >
        {isUser ? (
          <span className="text-white text-xs font-bold">JD</span>
        ) : (
          <Brain className="w-4 h-4 text-indigo-400" />
        )}
      </div>

      {/* Bubble */}
      <div className="max-w-[75%]">
        <div
          className={cn(
            "rounded-2xl px-4 py-3 text-sm leading-relaxed",
            isUser
              ? "bg-indigo-600 text-white rounded-tr-sm"
              : "bg-white border border-slate-200 text-slate-800 rounded-tl-sm shadow-sm"
          )}
        >
          {/* Render markdown-style bold text */}
          {msg.content.split("\n").map((line, i) => {
            const parts = line.split(/\*\*(.+?)\*\*/g);
            return (
              <p key={i} className={i > 0 ? "mt-1.5" : ""}>
                {parts.map((part, j) =>
                  j % 2 === 1 ? (
                    <strong key={j} className={isUser ? "text-indigo-100" : "text-slate-900"}>
                      {part}
                    </strong>
                  ) : (
                    part
                  )
                )}
              </p>
            );
          })}
        </div>
        <div
          className={cn(
            "text-[10px] text-slate-400 mt-1",
            isUser ? "text-right" : "text-left"
          )}
        >
          {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>

        {/* Actions (AI messages only) */}
        {!isUser && (
          <div className="flex gap-2 mt-1">
            <button className="p-1 rounded hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600">
              <Copy className="w-3 h-3" />
            </button>
            <button className="p-1 rounded hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600">
              <ThumbsUp className="w-3 h-3" />
            </button>
            <button className="p-1 rounded hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600">
              <RefreshCw className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi, I'm DPX AI — your intelligent supply chain co-pilot. I have real-time access to your inventory, supplier data, demand signals, and risk indicators. What would you like to explore today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      role: "user",
      content: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    await new Promise((r) => setTimeout(r, 1500 + Math.random() * 1000));
    setTyping(false);

    const aiMsg: Message = {
      role: "assistant",
      content: getResponse(text),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, aiMsg]);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
          <Brain className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-base font-bold text-slate-900 flex items-center gap-2">
            DPX AI Assistant
            <span className="flex items-center gap-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Live
            </span>
          </h1>
          <p className="text-slate-500 text-xs">
            Powered by DPX Intelligence Engine · Access to all your supply chain data
          </p>
        </div>
        <div className="ml-auto flex items-center gap-1.5 text-xs text-slate-500">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          GPT-4 + Supply Chain Domain Model
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {messages.map((msg, i) => (
          <MessageBubble key={i} msg={msg} />
        ))}
        {typing && (
          <div className="flex gap-3 msg-ai">
            <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
              <Brain className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm shadow-sm">
              <TypingIndicator />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggested Prompts */}
      {messages.length <= 1 && (
        <div className="px-6 pb-4">
          <p className="text-xs text-slate-500 mb-2 font-medium">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => sendMessage(prompt)}
                className="text-xs bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="bg-white border-t border-slate-200 px-6 py-4">
        <div className="flex items-end gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage(input);
              }
            }}
            placeholder="Ask anything about your supply chain..."
            rows={1}
            className="flex-1 bg-transparent resize-none outline-none text-sm text-slate-900 placeholder-slate-400 max-h-32"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || typing}
            className="w-8 h-8 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-300 text-white rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
        <p className="text-[10px] text-slate-400 mt-2 text-center">
          DPX AI can make mistakes. Always verify critical decisions with your team.
        </p>
      </div>
    </div>
  );
}
