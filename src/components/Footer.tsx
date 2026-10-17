import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#edf4fe]/40 border-t border-[#e1e9f3]/60 backdrop-blur-md py-10 mt-12 transition-all">
      <div className="max-w-[960px] mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Availability indicator */}
        <div className="flex items-center gap-2.5">
          <span className="inline-block w-2 h-2 rounded-full bg-[#3e5f78] animate-pulse"></span>
          <p className="text-xs text-[#42474c] font-medium">
            Available for select advisory &amp; creative projects
          </p>
        </div>

        {/* Copyright and back to top */}
        <div className="flex items-center gap-4 text-xs text-[#72787d]">
          <span>© {PROFILE_DATA.name} · Jaipur, India</span>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-full hover:bg-white hover:text-[#151c23] transition-colors border border-transparent hover:border-[#e1e9f3]"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
