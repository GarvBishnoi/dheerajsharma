import React, { useState } from 'react';
import { X, Copy, Check, QrCode, Phone, Instagram, MessageCircle, Mail, MapPin, Share2, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface QuickShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickShareModal: React.FC<QuickShareModalProps> = ({ isOpen, onClose }) => {
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopyAll = () => {
    const text = [
      `Dheeraj Sharma`,
      `Founder & Owner of Systemo & Winzy`,
      `Phone: ${PROFILE_DATA.phoneFormatted}`,
      `Email: ${PROFILE_DATA.email}`,
      `Instagram: ${PROFILE_DATA.instagramUrl}`,
      `WhatsApp: ${PROFILE_DATA.whatsappUrl}`,
      `Location: ${PROFILE_DATA.location}`
    ].join('\n');

    navigator.clipboard.writeText(text);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2400);
  };

  const handleCopySingle = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white/95 rounded-3xl p-6 sm:p-7 shadow-[0_24px_64px_rgba(74,82,90,0.18)] border border-[#e1e9f3]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#72787d] hover:text-[#151c23] hover:bg-[#edf4fe] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3e5f78] uppercase mb-1">
          <Share2 className="w-3.5 h-3.5" />
          <span>Take Contacts</span>
        </div>

        <h3 className="font-serif-display text-2xl text-[#151c23] font-medium">
          Dheeraj Sharma
        </h3>
        <p className="text-xs text-[#42474c] mt-0.5 mb-4">
          Founder of Systemo &amp; Winzy · Jaipur, India
        </p>

        {/* QR Code Graphic Box */}
        <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#f7f9ff] border border-[#e1e9f3] mb-4">
          <div className="p-3 bg-white rounded-xl shadow-xs border border-[#e1e9f3]">
            {/* SVG representation of QR code */}
            <svg
              className="w-36 h-36 text-[#151c23]"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <rect x="10" y="10" width="24" height="24" rx="3" fill="#151c23" />
              <rect x="14" y="14" width="16" height="16" rx="2" fill="#ffffff" />
              <rect x="18" y="18" width="8" height="8" rx="1" fill="#151c23" />

              <rect x="66" y="10" width="24" height="24" rx="3" fill="#151c23" />
              <rect x="70" y="14" width="16" height="16" rx="2" fill="#ffffff" />
              <rect x="74" y="18" width="8" height="8" rx="1" fill="#151c23" />

              <rect x="10" y="66" width="24" height="24" rx="3" fill="#151c23" />
              <rect x="14" y="70" width="16" height="16" rx="2" fill="#ffffff" />
              <rect x="18" y="74" width="8" height="8" rx="1" fill="#151c23" />

              <rect x="42" y="14" width="6" height="6" rx="1" />
              <rect x="52" y="14" width="6" height="14" rx="1" />
              <rect x="42" y="24" width="6" height="6" rx="1" />
              <rect x="42" y="34" width="16" height="6" rx="1" />
              <rect x="14" y="44" width="16" height="6" rx="1" />
              <rect x="34" y="44" width="8" height="8" rx="1" />
              <rect x="46" y="44" width="8" height="8" rx="1" />
              <rect x="66" y="44" width="20" height="6" rx="1" />
              <rect x="14" y="54" width="8" height="6" rx="1" />
              <rect x="26" y="54" width="16" height="6" rx="1" />
              <rect x="46" y="56" width="12" height="6" rx="1" />
              <rect x="62" y="54" width="8" height="8" rx="1" />
              <rect x="74" y="54" width="12" height="6" rx="1" />
              <rect x="42" y="68" width="8" height="8" rx="1" />
              <rect x="54" y="68" width="14" height="6" rx="1" />
              <rect x="72" y="68" width="14" height="8" rx="1" />
              <rect x="42" y="80" width="18" height="6" rx="1" />
              <rect x="64" y="80" width="22" height="6" rx="1" />
            </svg>
          </div>
          <span className="text-[11px] text-[#72787d] mt-2 font-medium">
            Scan with camera to open contacts &amp; links
          </span>
        </div>

        {/* Master Copy Button */}
        <button
          onClick={handleCopyAll}
          className="w-full py-2.5 px-4 rounded-full bg-[#3e5f78] hover:bg-[#284a61] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all mb-3.5 cursor-pointer"
        >
          {copiedAll ? (
            <>
              <Check className="w-4 h-4 text-emerald-300" />
              <span>All Contacts Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy All Contacts in One Tap</span>
            </>
          )}
        </button>

        {/* Quick individual items */}
        <div className="flex flex-col gap-2">
          {/* Email */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#edf4fe]/70 border border-[#e1e9f3]">
            <div className="flex items-center gap-2 text-xs text-[#151c23]">
              <Mail className="w-3.5 h-3.5 text-[#3e5f78]" />
              <span className="font-medium truncate max-w-[200px]">{PROFILE_DATA.email}</span>
            </div>
            <button
              onClick={() => handleCopySingle(PROFILE_DATA.email, 'm')}
              className="text-[11px] text-[#3e5f78] hover:underline font-semibold cursor-pointer"
            >
              {copiedKey === 'm' ? 'Copied' : 'Copy'}
            </button>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#edf4fe]/70 border border-[#e1e9f3]">
            <div className="flex items-center gap-2 text-xs text-[#151c23]">
              <Phone className="w-3.5 h-3.5 text-[#3e5f78]" />
              <span className="font-medium">{PROFILE_DATA.phoneFormatted}</span>
            </div>
            <button
              onClick={() => handleCopySingle(PROFILE_DATA.phoneFormatted, 'p')}
              className="text-[11px] text-[#3e5f78] hover:underline font-semibold cursor-pointer"
            >
              {copiedKey === 'p' ? 'Copied' : 'Copy'}
            </button>
          </div>

          {/* Instagram */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#edf4fe]/70 border border-[#e1e9f3]">
            <div className="flex items-center gap-2 text-xs text-[#151c23]">
              <Instagram className="w-3.5 h-3.5 text-[#3e5f78]" />
              <span className="font-medium">{PROFILE_DATA.instagramHandle}</span>
            </div>
            <a
              href={PROFILE_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#3e5f78] hover:underline font-semibold"
            >
              Open
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#edf4fe]/70 border border-[#e1e9f3]">
            <div className="flex items-center gap-2 text-xs text-[#151c23]">
              <MessageCircle className="w-3.5 h-3.5 text-[#3e5f78]" />
              <span className="font-medium">Direct WhatsApp</span>
            </div>
            <a
              href={PROFILE_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#3e5f78] hover:underline font-semibold"
            >
              Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
