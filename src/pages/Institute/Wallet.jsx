import React from "react";
import { Copy, CheckCircle2 } from "lucide-react";

const WalletPage = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-5 animate-in fade-in duration-500 pb-10">
      {/* 1. Header Banner - Increased Height & Padding */}
      <div className="bg-white rounded-2xl border border-gray-300 px-6 py-8 md:py-10 flex items-center gap-5 shadow-sm min-h-[120px]">
        <div className="text-3xl bg-orange-50 p-3 rounded-xl flex items-center justify-center shrink-0">
          <span role="img" aria-label="wallet">
            👛
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 leading-tight">
            Wallet & Balance Management
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-medium mt-1">
            View your prepaid balance and manage certificate issuance funds
          </p>
        </div>
      </div>

      {/* 2. Current Balance Gradient Card - Slimmer & Smaller Font */}
      <div className="bg-gradient-to-r from-[#9366E4] to-[#7C3AED] rounded-2xl p-5 md:p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center md:items-start">
          <p className="text-[10px] md:text-xs font-bold opacity-80 uppercase tracking-wider mb-1">
            Current Balance
          </p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              0.573
            </h3>
            <span className="text-[10px] md:text-xs font-bold opacity-70 uppercase">
              POL
            </span>
          </div>
        </div>
        <div className="absolute -right-5 -bottom-5 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      </div>

      {/* 3. Wallet Address Section - Compact */}
      <div className="bg-[#DBEAFE]/40 rounded-xl p-4 border border-[#BFDBFE]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex flex-col">
            <h4 className="text-[10px] uppercase font-bold text-[#1E42AF] mb-1">
              Wallet Address
            </h4>
            <p className="text-xs font-mono text-gray-600 break-all bg-white/40 p-2 rounded">
              0x0000000000000000000000000000000000000000
            </p>
          </div>
          <button className="bg-[#8B5CF6] text-white text-[10px] font-bold px-4 py-2 rounded-lg hover:bg-[#7C3AED] flex items-center gap-2 w-max h-max">
            <Copy size={12} /> Copy Address
          </button>
        </div>
      </div>

      {/* 4. Balance Breakdown Cards - Reduced Height */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold text-gray-800 mb-4 px-1">
          Balance Breakdown
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl border-l-4 border-blue-400 shadow-sm border border-gray-50 flex flex-col justify-center min-h-[90px]">
            <p className="text-[11px] font-bold text-gray-500 mb-1">
              Prepaid Balance
            </p>
            <p className="text-2xl font-extrabold text-black">0.5730</p>
          </div>
          <div className="bg-white p-4 rounded-xl border-l-4 border-blue-400 shadow-sm border border-gray-50 flex flex-col justify-center min-h-[90px]">
            <p className="text-[11px] font-bold text-gray-500 mb-1">
              Total GAS spent
            </p>
            <p className="text-2xl font-extrabold text-black">0.0000</p>
          </div>
        </div>
      </div>

      {/* 5. Top-Up Section - Compact */}
      <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 space-y-4">
        <h3 className="text-base font-bold text-gray-800">
          Top-Up Your Balance
        </h3>

        <div className="bg-[#DBEAFE] border-l-4 border-[#3B82F6] p-4 rounded-r-lg">
          <p className="text-[#1E42AF] text-[11px] leading-tight font-medium">
            Connect MetaMask and deposit POL. Gas fees are deducted per
            issuance.
          </p>
        </div>

        <div className="bg-[#DCFCE7] border border-[#BBF7D0] p-2.5 rounded-lg flex items-center gap-2">
          <CheckCircle2 size={14} className="text-green-600" />
          <p className="text-[#15803D] font-bold text-[11px]">
            MetaMask Status :{" "}
            <span className="font-medium text-gray-600 ml-1">Connected</span>
          </p>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-gray-700">
            Amount (POL)
          </label>
          <input
            type="text"
            placeholder="0.00"
            className="w-full p-2.5 rounded-lg border-2 border-gray-100 focus:border-[#9366E4] outline-none text-sm font-medium"
          />
        </div>

        <button className="w-full bg-[#A78BFA] hover:bg-[#8B5CF6] text-white font-bold py-3 rounded-lg text-sm shadow-md active:scale-95 transition-all">
          Deposit POL
        </button>
      </div>

      {/* 6. Cost Estimation - Original Blue Style with Reduced Height */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-50">
        <h3 className="text-center text-lg font-bold text-gray-800 mb-4">
          Certificate Cost Estimation
        </h3>
        <hr className="mb-5 border-gray-100" />

        {/* The container below keeps your original blue theme but is now much slimmer */}
        <div className="bg-[#DBEAFE] border-l-4 border-[#3B82F6] px-6 py-4 rounded-r-xl max-w-2xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <p className="text-[#1E42AF] font-bold text-sm">Average GAS cost</p>
            <p className="text-[10px] text-[#1E42AF] opacity-70 font-medium hidden md:block">
              Based on current network congestion
            </p>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-black">0.009000</span>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
              POL per certificate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
