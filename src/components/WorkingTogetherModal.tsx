import React from 'react';
import { X, Sparkles, Compass, Code2, Cpu, ArrowRight, Mail, Phone } from 'lucide-react';
import { PROFILE_DATA, COMPANIES_DATA } from '../data/profile';

interface WorkingTogetherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSchedule: () => void;
}

export const WorkingTogetherModal: React.FC<WorkingTogetherModalProps> = ({
  isOpen,
  onClose,
  onOpenSchedule,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white/95 rounded-3xl p-6 sm:p-8 shadow-[0_24px_64px_rgba(74,82,90,0.18)] border border-[#e1e9f3] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#72787d] hover:text-[#151c23] hover:bg-[#edf4fe] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3e5f78] uppercase mb-1">
          <Compass className="w-3.5 h-3.5" />
          <span>Venture Ecosystem &amp; Practices</span>
        </div>

        <h3 className="font-serif-display text-2xl sm:text-3xl text-[#151c23] font-medium">
          Working With Dheeraj Sharma
        </h3>
        <p className="text-xs sm:text-sm text-[#42474c] mt-1 mb-6 leading-relaxed max-w-xl">
          Founder and owner of <strong className="text-[#151c23]">Systemo</strong> &amp; <strong className="text-[#151c23]">Winzy</strong>. Delivering bespoke digital engineering, tailored platforms, and intelligent digital solutions.
        </p>

        {/* Both Companies Highlighted */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {COMPANIES_DATA.map((c) => (
            <div
              key={c.name}
              className="p-5 rounded-2xl bg-[#edf4fe]/70 border border-[#dbe3ed] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-[#3e5f78] bg-white px-2.5 py-0.5 rounded-full border border-[#dbe3ed]">
                    {c.role}
                  </span>
                  <span className="text-[10px] text-[#72787d] font-medium uppercase tracking-wider">
                    {c.badge}
                  </span>
                </div>
                <h4 className="font-serif-display text-xl text-[#151c23] font-semibold">
                  {c.name}
                </h4>
                <p className="text-xs text-[#42474c] mt-1.5 leading-relaxed">
                  {c.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-[#dbe3ed]/60">
                  {c.offerings.map((o) => (
                    <span key={o} className="text-[10px] bg-white text-[#151c23] px-2 py-0.5 rounded-md font-medium">
                      {o}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="p-4 rounded-2xl bg-[#f7f9ff] border border-[#e1e9f3] mb-6">
          <span className="text-[11px] font-semibold text-[#3e5f78] uppercase tracking-wider block mb-3">
            Engagement &amp; Delivery Process
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#42474c]">
            <div>
              <strong className="text-[#151c23] block mb-1">01. Discovery &amp; Scope</strong>
              Detailed consultation to map requirements, architecture, and technology stack.
            </div>
            <div>
              <strong className="text-[#151c23] block mb-1">02. Design &amp; Build</strong>
              Precision engineering through Systemo or Winzy tailored to your roadmap.
            </div>
            <div>
              <strong className="text-[#151c23] block mb-1">03. Deployment &amp; Scale</strong>
              Flawless production launch, performance optimization, and ongoing evolution.
            </div>
          </div>
        </div>

        {/* Bottom actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#e1e9f3]">
          <div className="text-xs text-[#42474c] flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#3e5f78]" />
            <span>{PROFILE_DATA.email}</span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenSchedule();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#3e5f78] hover:bg-[#284a61] text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
            >
              <span>Schedule 15m Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
