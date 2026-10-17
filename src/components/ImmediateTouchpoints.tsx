import React, { useState } from 'react';
import { Phone, Instagram, MessageCircle, Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const ImmediateTouchpoints: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 w-full">
      {/* Action 1: Direct Phone Call & Copy */}
      <div 
        onClick={() => window.open(`tel:${PROFILE_DATA.phone}`, '_self')}
        className="group relative flex flex-col justify-between text-left p-4 rounded-2xl bg-white/75 hover:bg-white/95 border border-[#e1e9f3]/80 backdrop-blur-xl shadow-[0_6px_24px_-4px_rgba(74,82,90,0.05)] hover:shadow-[0_12px_32px_-4px_rgba(74,82,90,0.09)] transition-all duration-300 cursor-pointer"
      >
        <div className="flex items-center justify-between w-full">
          <div className="w-8 h-8 rounded-full bg-[#e1e9f3]/60 flex items-center justify-center text-[#3e5f78] group-hover:bg-[#3e5f78] group-hover:text-white transition-colors duration-300">
            <Phone className="w-4 h-4" />
          </div>
          <button
            onClick={(e) => copyToClipboard(PROFILE_DATA.phoneFormatted, 'phone', e)}
            className="inline-flex items-center gap-1 text-[11px] font-medium text-[#42474c] hover:text-[#3e5f78] px-2 py-0.5 rounded-full hover:bg-[#edf4fe] transition-colors"
            title="Copy phone number"
          >
            {copiedKey === 'phone' ? (
              <>
                <Check className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <div className="mt-4">
          <span className="text-[11px] font-medium text-[#72787d] uppercase tracking-wider block">
            Direct Line
          </span>
          <span className="text-sm sm:text-[15px] font-medium text-[#151c23] block mt-0.5 tracking-tight group-hover:text-[#3e5f78] transition-colors truncate">
            {PROFILE_DATA.phoneFormatted}
          </span>
        </div>
      </div>

      {/* Action 2: Instagram Channel (@dheerajsharxma_) */}
      <div 
        onClick={() => window.open(PROFILE_DATA.instagramUrl, '_blank', 'noopener,noreferrer')}
        className="group relative flex flex-col justify-between text-left p-4 rounded-2xl bg-white/75 hover:bg-white/95 border border-[#e1e9f3]/80 backdrop-blur-xl shadow-[0_6px_24px_-4px_rgba(74,82,90,0.05)] hover:shadow-[0_12px_32px_-4px_rgba(74,82,90,0.09)] transition-all duration-300 cursor-pointer"
      >
        <div className="flex items-center justify-between w-full">
          <div className="w-8 h-8 rounded-full bg-[#e1e9f3]/60 flex items-center justify-center text-[#3e5f78] group-hover:bg-[#3e5f78] group-hover:text-white transition-colors duration-300">
            <Instagram className="w-4 h-4" />
          </div>
          <button
            onClick={(e) => copyToClipboard(PROFILE_DATA.instagramHandle, 'ig', e)}
            className="inline-flex items-center gap-1 text-[11px] font-medium text-[#42474c] hover:text-[#3e5f78] px-2 py-0.5 rounded-full hover:bg-[#edf4fe] transition-colors"
            title="Copy Instagram handle"
          >
            {copiedKey === 'ig' ? (
              <>
                <Check className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-[#72787d] uppercase tracking-wider block">
              Instagram
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#72787d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <span className="text-sm sm:text-[15px] font-medium text-[#151c23] block mt-0.5 tracking-tight group-hover:text-[#3e5f78] transition-colors truncate">
            {PROFILE_DATA.instagramHandle}
          </span>
        </div>
      </div>

      {/* Action 3: Direct WhatsApp Quick Connect */}
      <div 
        onClick={() => window.open(PROFILE_DATA.whatsappUrl, '_blank', 'noopener,noreferrer')}
        className="group relative flex flex-col justify-between text-left p-4 rounded-2xl bg-white/75 hover:bg-white/95 border border-[#e1e9f3]/80 backdrop-blur-xl shadow-[0_6px_24px_-4px_rgba(74,82,90,0.05)] hover:shadow-[0_12px_32px_-4px_rgba(74,82,90,0.09)] transition-all duration-300 cursor-pointer"
      >
        <div className="flex items-center justify-between w-full">
          <div className="w-8 h-8 rounded-full bg-[#e1e9f3]/60 flex items-center justify-center text-[#3e5f78] group-hover:bg-[#3e5f78] group-hover:text-white transition-colors duration-300">
            <MessageCircle className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded-full border border-emerald-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active</span>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-[#72787d] uppercase tracking-wider block">
              WhatsApp
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#72787d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <span className="text-sm sm:text-[15px] font-medium text-[#151c23] block mt-0.5 tracking-tight group-hover:text-[#3e5f78] transition-colors truncate">
            Chat on WhatsApp
          </span>
        </div>
      </div>

      {/* Action 4: Email Direct (gourhunny5@gmail.com) */}
      <div 
        onClick={() => window.open(`mailto:${PROFILE_DATA.email}`, '_self')}
        className="group relative flex flex-col justify-between text-left p-4 rounded-2xl bg-white/75 hover:bg-white/95 border border-[#e1e9f3]/80 backdrop-blur-xl shadow-[0_6px_24px_-4px_rgba(74,82,90,0.05)] hover:shadow-[0_12px_32px_-4px_rgba(74,82,90,0.09)] transition-all duration-300 cursor-pointer"
      >
        <div className="flex items-center justify-between w-full">
          <div className="w-8 h-8 rounded-full bg-[#e1e9f3]/60 flex items-center justify-center text-[#3e5f78] group-hover:bg-[#3e5f78] group-hover:text-white transition-colors duration-300">
            <Mail className="w-4 h-4" />
          </div>
          <button
            onClick={(e) => copyToClipboard(PROFILE_DATA.email, 'email', e)}
            className="inline-flex items-center gap-1 text-[11px] font-medium text-[#42474c] hover:text-[#3e5f78] px-2 py-0.5 rounded-full hover:bg-[#edf4fe] transition-colors"
            title="Copy email address"
          >
            {copiedKey === 'email' ? (
              <>
                <Check className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-[#72787d] uppercase tracking-wider block">
              Direct Mail
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#72787d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <span className="text-sm sm:text-[15px] font-medium text-[#151c23] block mt-0.5 tracking-tight group-hover:text-[#3e5f78] transition-colors truncate">
            {PROFILE_DATA.email}
          </span>
        </div>
      </div>
    </section>
  );
};
