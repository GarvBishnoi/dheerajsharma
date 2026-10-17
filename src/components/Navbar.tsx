import React, { useState } from 'react';
import { Copy, Check, QrCode } from 'lucide-react';
import { PROFILE_DATA, HOTLINK_IMAGES } from '../data/profile';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSchedule: () => void;
  onOpenWorkingTogether: () => void;
  onOpenShareModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSchedule,
  onOpenWorkingTogether,
  onOpenShareModal,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PROFILE_DATA.phoneFormatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f7f9ff]/80 backdrop-blur-2xl border-b border-[#e1e9f3]/60 shadow-[0_1px_16px_rgba(74,82,90,0.03)] transition-all">
      <div className="h-20 max-w-[960px] mx-auto px-5 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <div 
          onClick={() => setActiveTab('contact')}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <img
            alt="Aura Breeze Emblem"
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src={HOTLINK_IMAGES.emblem}
          />
          <div className="flex flex-col">
            <span className="font-serif-display text-xl text-[#151c23] font-medium tracking-tight">
              {PROFILE_DATA.name}
            </span>
          </div>
        </div>

        {/* Navigation pill */}
        <nav className="hidden md:flex items-center gap-1 p-1 bg-[#edf4fe]/70 border border-[#dbe3ed]/50 rounded-full backdrop-blur-md shadow-inner">
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
              activeTab === 'contact'
                ? 'bg-white text-[#151c23] shadow-[0_2px_10px_rgba(107,140,166,0.12)] font-semibold'
                : 'text-[#42474c] hover:bg-white/60 hover:text-[#151c23]'
            }`}
          >
            Contact &amp; Channels
          </button>
          <button
            onClick={() => {
              setActiveTab('working');
              onOpenWorkingTogether();
            }}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
              activeTab === 'working'
                ? 'bg-white text-[#151c23] shadow-[0_2px_10px_rgba(107,140,166,0.12)] font-semibold'
                : 'text-[#42474c] hover:bg-white/60 hover:text-[#151c23]'
            }`}
          >
            Working Together
          </button>
          <button
            onClick={onOpenSchedule}
            className="px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-[#42474c] hover:bg-white/60 hover:text-[#151c23] transition-all duration-300 cursor-pointer"
          >
            Schedule Call
          </button>
        </nav>

        {/* Right action controls - pfp removed as requested */}
        <div className="flex items-center gap-2">
          {/* Quick Copy Phone */}
          <button
            onClick={handleCopyPhone}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#e1e9f3] text-[#42474c] hover:text-[#151c23] hover:border-[#c2c7cd] text-xs font-medium shadow-[0_2px_8px_rgba(107,140,166,0.06)] hover:shadow-[0_4px_12px_rgba(107,140,166,0.1)] transition-all duration-200 cursor-pointer"
            title="Copy direct phone number"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 animate-in zoom-in" />
                <span className="text-emerald-700 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#3e5f78]" />
                <span className="hidden sm:inline">Copy Phone</span>
                <span className="sm:hidden">Copy</span>
              </>
            )}
          </button>

          {/* Quick Share / QR Modal button */}
          <button
            onClick={onOpenShareModal}
            className="p-1.5 rounded-full bg-white border border-[#e1e9f3] text-[#42474c] hover:text-[#3e5f78] hover:border-[#c2c7cd] transition-all shadow-[0_2px_6px_rgba(0,0,0,0.03)] cursor-pointer"
            title="Share & QR Code"
          >
            <QrCode className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
