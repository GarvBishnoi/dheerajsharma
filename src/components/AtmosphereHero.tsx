import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Sparkles } from 'lucide-react';

export const AtmosphereHero: React.FC = () => {
  return (
    <header className="flex flex-col items-start gap-4 pt-2">
      {/* Ambient Status Pill */}
      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#e1e9f3]/80 backdrop-blur-md shadow-[0_2px_14px_rgba(107,140,166,0.08)]">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3e5f78] opacity-60"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3e5f78]"></span>
        </span>
        <span className="text-[11px] font-semibold text-[#42474c] tracking-wider uppercase">
          {PROFILE_DATA.location} · Founder of Systemo &amp; Winzy
        </span>
      </div>

      {/* Identity & Statement */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full mt-2">
        <div className="max-w-xl">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
            <span className="text-xs font-semibold tracking-widest text-[#3e5f78] uppercase">
              {PROFILE_DATA.name}
            </span>
            <span className="text-[#c2c7cd] text-xs">•</span>
            <div className="inline-flex items-center gap-1.5 text-xs text-[#151c23] font-semibold bg-[#edf4fe] px-2.5 py-0.5 rounded-full border border-[#dbe3ed]">
              <Sparkles className="w-3 h-3 text-[#3e5f78]" />
              <span>Founder, Systemo &amp; Winzy</span>
            </div>
          </div>
          <h1 className="font-serif-display text-3xl sm:text-4xl md:text-[44px] text-[#151c23] tracking-tight font-normal leading-[1.18]">
            A quiet channel to reach me, collaborate, or say hello.
          </h1>
        </div>

        {/* Ambient Emblem Badge */}
        <div className="relative shrink-0 flex items-center justify-center p-3.5 rounded-full bg-white/75 border border-[#e1e9f3]/60 backdrop-blur-lg shadow-[0_12px_32px_-8px_rgba(74,82,90,0.08)]">
          <svg
            className="w-14 h-14 md:w-16 md:h-16 text-[#3e5f78]"
            fill="none"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="44"
              stroke="currentColor"
              strokeDasharray="3 4"
              strokeOpacity="0.25"
              strokeWidth="1.5"
            />
            <path
              d="M28 45C35 43 54 38 66 40C72 41 74 47 70 53C66 59 48 64 45 68C42 72 45 77 56 77C65 77 71 73 72 71"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            />
            <circle cx="68" cy="36" fill="currentColor" r="3.5" />
          </svg>
        </div>
      </div>

      {/* Subtle Editorial Bio Note */}
      <p className="text-base text-[#42474c] max-w-2xl leading-relaxed mt-1 font-normal">
        Founder and owner of <strong className="text-[#151c23] font-semibold">Systemo</strong> (custom websites, apps, software platforms, and e-commerce) &amp; <strong className="text-[#151c23] font-semibold">Winzy</strong> (modern digital solutions). Reach out through whatever frequency feels most natural to you.
      </p>
    </header>
  );
};
