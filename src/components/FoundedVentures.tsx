import React from 'react';
import { Sparkles, Code2, Cpu, CheckCircle2 } from 'lucide-react';
import { COMPANIES_DATA } from '../data/profile';

export const FoundedVentures: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between pb-0.5">
        <div>
          <span className="text-[11px] tracking-widest text-[#3e5f78] uppercase font-semibold block">
            02 — Founded Ventures &amp; Ownership
          </span>
          <h2 className="font-serif-display text-xl sm:text-[22px] text-[#151c23] font-medium mt-0.5">
            Founded by Dheeraj Sharma
          </h2>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#dbe3ed] text-[11px] font-semibold text-[#3e5f78] shadow-xs">
          <Sparkles className="w-3 h-3 text-[#3e5f78]" />
          <span>Active Operations</span>
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {COMPANIES_DATA.map((company) => {
          const isSystemo = company.name === 'Systemo';
          return (
            <div
              key={company.name}
              className="p-5 sm:p-6 rounded-3xl bg-white/80 border border-[#e1e9f3]/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(74,82,90,0.04)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Tag & Role */}
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#edf4fe] border border-[#dbe3ed] text-[#3e5f78] text-[11px] font-semibold">
                    {isSystemo ? <Code2 className="w-3 h-3" /> : <Cpu className="w-3 h-3" />}
                    <span>{company.role}</span>
                  </div>
                  <span className="text-[11px] font-medium text-[#72787d] tracking-wide">
                    {company.badge}
                  </span>
                </div>

                {/* Company Name */}
                <h3 className="font-serif-display text-2xl sm:text-[26px] text-[#151c23] font-medium tracking-tight">
                  {company.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#42474c] mt-2 leading-relaxed">
                  {company.description}
                </p>

                {/* Offerings Pills */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[#edf4fe]">
                  {company.offerings.map((offering) => (
                    <span
                      key={offering}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#edf4fe]/70 text-[#151c23] text-[11px] font-medium border border-[#dbe3ed]/50"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#3e5f78]" />
                      <span>{offering}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
