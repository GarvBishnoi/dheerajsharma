import React, { useState } from 'react';
import { 
  MessageCircle, 
  Instagram, 
  Phone, 
  Mail, 
  Send, 
  MapPin, 
  ArrowUpRight, 
  Copy, 
  Check,
  Building2,
  Sparkles
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const CuratedChannels: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyDetail = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section className="flex flex-col gap-5">
      {/* Channels Section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between pb-1">
          <h2 className="font-serif-display text-xl sm:text-[22px] text-[#151c23] font-medium">
            Curated Channels
          </h2>
          <span className="text-[11px] font-semibold text-[#72787d] tracking-wider uppercase">
            Available via
          </span>
        </div>

        {/* Card 01: Instant Messaging & Direct Touchpoints */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/70 border border-[#e1e9f3]/70 backdrop-blur-md shadow-[0_4px_20px_rgba(74,82,90,0.03)] hover:shadow-[0_8px_24px_rgba(74,82,90,0.06)] transition-all">
          <div className="flex items-center justify-between mb-3.5">
            <span className="text-[11px] tracking-widest text-[#3e5f78] uppercase font-semibold">
              01 — Instant Messaging &amp; Social
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-[#42474c] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3e5f78] animate-pulse"></span>
              Active daily
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {/* WhatsApp */}
            <a
              href={PROFILE_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf4fe]/80 hover:bg-[#e1e9f3] text-[#151c23] text-sm font-medium transition-all group"
            >
              <MessageCircle className="w-4 h-4 text-[#3e5f78] group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#72787d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Instagram */}
            <a
              href={PROFILE_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf4fe]/80 hover:bg-[#e1e9f3] text-[#151c23] text-sm font-medium transition-all group"
            >
              <Instagram className="w-4 h-4 text-[#3e5f78] group-hover:scale-110 transition-transform" />
              <span>Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#72787d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Phone Call */}
            <a
              href={`tel:${PROFILE_DATA.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf4fe]/80 hover:bg-[#e1e9f3] text-[#151c23] text-sm font-medium transition-all group"
            >
              <Phone className="w-4 h-4 text-[#3e5f78] group-hover:scale-110 transition-transform" />
              <span>Direct Phone</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#72787d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf4fe]/80 hover:bg-[#e1e9f3] text-[#151c23] text-sm font-medium transition-all group"
            >
              <Mail className="w-4 h-4 text-[#3e5f78] group-hover:scale-110 transition-transform" />
              <span>gourhunny5@gmail.com</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#72787d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/dheerajsharxma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf4fe]/80 hover:bg-[#e1e9f3] text-[#151c23] text-sm font-medium transition-all group"
            >
              <Send className="w-4 h-4 text-[#3e5f78] group-hover:scale-110 transition-transform" />
              <span>Telegram</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#72787d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Base Location & Studio Presence (Zurich map completely removed) */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#edf4fe]/60 border border-[#dbe3ed]/60 backdrop-blur-md shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3e5f78] shadow-xs shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] tracking-widest text-[#3e5f78] uppercase font-semibold">
                Base of Operations
              </span>
              <span className="text-xs text-[#c2c7cd]">•</span>
              <span className="text-xs text-[#72787d]">Jaipur, India</span>
            </div>
            <p className="text-xs sm:text-sm text-[#151c23] font-medium mt-0.5">
              Available across Indian Standard Time &amp; Global Client Windows
            </p>
          </div>
        </div>

        <button
          onClick={() => copyDetail(PROFILE_DATA.email, 'email_copy')}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#151c23] text-xs font-semibold shadow-xs hover:bg-[#3e5f78] hover:text-white transition-all border border-[#dbe3ed] cursor-pointer"
        >
          {copiedKey === 'email_copy' ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Email Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
};
