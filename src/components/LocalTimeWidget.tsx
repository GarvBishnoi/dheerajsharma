import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface LocalTimeWidgetProps {
  onOpenSchedule: () => void;
}

export const LocalTimeWidget: React.FC<LocalTimeWidgetProps> = ({ onOpenSchedule }) => {
  const [timeString, setTimeString] = useState<string>('');
  const [isDayTime, setIsDayTime] = useState<boolean>(true);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: PROFILE_DATA.timezone,
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        setTimeString(formatter.format(now));

        // Determine rough hour in IST
        const hourFormatter = new Intl.DateTimeFormat('en-US', {
          timeZone: PROFILE_DATA.timezone,
          hour: 'numeric',
          hour12: false
        });
        const hour = parseInt(hourFormatter.format(now), 10);
        setIsDayTime(hour >= 8 && hour < 22);
      } catch (err) {
        // Fallback
        const d = new Date();
        setTimeString(d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-white/80 border border-[#e1e9f3]/80 backdrop-blur-md shadow-[0_4px_24px_rgba(74,82,90,0.04)] flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold text-[#3e5f78] uppercase tracking-widest">
          Local Atmosphere
        </span>
        <span className="text-[11px] font-medium text-[#72787d]">
          IST (UTC+5:30)
        </span>
      </div>

      <div className="flex items-baseline gap-3 my-0.5">
        <span className="font-serif-display text-3xl sm:text-[36px] text-[#151c23] tracking-tight font-normal">
          {timeString || '05:42 AM'}
        </span>
        <span className="text-xs text-[#3e5f78] font-medium flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
          {isDayTime ? 'In Jaipur studio, receptive' : 'Quiet hours, responses morning'}
        </span>
      </div>

      <div className="pt-1 flex items-center justify-between border-t border-[#edf4fe]">
        <span className="text-xs text-[#72787d]">
          Pink City Studio · Offline &amp; Virtual
        </span>
        <button
          onClick={onOpenSchedule}
          className="inline-flex items-center gap-1.5 text-xs text-[#3e5f78] hover:text-[#284a61] font-semibold transition-colors group cursor-pointer"
        >
          <span>Book 15m Coffee</span>
          <Calendar className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
};
