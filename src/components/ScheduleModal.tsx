import React, { useState } from 'react';
import { X, Calendar, Clock, Check, Coffee, ArrowRight } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const [selectedSlot, setSelectedSlot] = useState('11:00 AM IST');
  const [selectedDay, setSelectedDay] = useState('Tuesday');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [intent, setIntent] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const slots = [
    { time: '10:00 AM IST', label: 'Morning Coffee' },
    { time: '11:30 AM IST', label: 'Studio Pulse' },
    { time: '04:00 PM IST', label: 'Afternoon Dialogue' },
    { time: '06:30 PM IST', label: 'Twilight Signal' },
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail) return;
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white/95 rounded-3xl p-6 sm:p-8 shadow-[0_24px_64px_rgba(74,82,90,0.18)] border border-[#e1e9f3] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#72787d] hover:text-[#151c23] hover:bg-[#edf4fe] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isBooked ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3e5f78] uppercase mb-1">
              <Coffee className="w-3.5 h-3.5" />
              <span>Quiet Conversation</span>
            </div>
            <h3 className="font-serif-display text-2xl text-[#151c23] font-medium">
              Schedule 15m Coffee or Call
            </h3>
            <p className="text-xs sm:text-sm text-[#42474c] mt-1 mb-6 leading-relaxed">
              Reserve an informal 15-minute slot with Dheeraj to discuss project scope, architectural direction, or creative advisory.
            </p>

            <form onSubmit={handleBook} className="flex flex-col gap-4">
              {/* Day selection */}
              <div>
                <label className="text-[11px] font-semibold text-[#42474c] uppercase tracking-wider block mb-2">
                  Preferred Day
                </label>
                <div className="grid grid-cols-5 gap-1.5">
                  {days.map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={`py-2 px-1 text-xs rounded-xl font-medium transition-all ${
                        selectedDay === day
                          ? 'bg-[#3e5f78] text-white shadow-sm font-semibold'
                          : 'bg-[#edf4fe]/80 text-[#42474c] hover:bg-[#e1e9f3]'
                      }`}
                    >
                      {day.slice(0, 3)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slot */}
              <div>
                <label className="text-[11px] font-semibold text-[#42474c] uppercase tracking-wider block mb-2">
                  Window (Jaipur / IST)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {slots.map((s) => (
                    <button
                      key={s.time}
                      type="button"
                      onClick={() => setSelectedSlot(s.time)}
                      className={`p-2.5 rounded-xl text-left border transition-all ${
                        selectedSlot === s.time
                          ? 'border-[#3e5f78] bg-[#edf4fe] text-[#151c23]'
                          : 'border-[#e1e9f3] bg-white/70 text-[#42474c] hover:border-[#c2c7cd]'
                      }`}
                    >
                      <div className="text-xs font-semibold">{s.time}</div>
                      <div className="text-[10px] text-[#72787d]">{s.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Your Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                <div>
                  <label className="text-[11px] font-semibold text-[#42474c] uppercase tracking-wider block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Vikram Mehta"
                    className="w-full px-3 py-2 rounded-xl bg-[#edf4fe]/80 text-sm outline-none border border-transparent focus:border-[#3e5f78] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-[#42474c] uppercase tracking-wider block mb-1">
                    Your Email or Handle
                  </label>
                  <input
                    type="text"
                    required
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    placeholder="vikram@design.co"
                    className="w-full px-3 py-2 rounded-xl bg-[#edf4fe]/80 text-sm outline-none border border-transparent focus:border-[#3e5f78] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-[#42474c] uppercase tracking-wider block mb-1">
                  Topic of conversation (Optional)
                </label>
                <input
                  type="text"
                  value={intent}
                  onChange={(e) => setIntent(e.target.value)}
                  placeholder="Design collaboration, advisory, intro..."
                  className="w-full px-3 py-2 rounded-xl bg-[#edf4fe]/80 text-sm outline-none border border-transparent focus:border-[#3e5f78] focus:bg-white transition-all"
                />
              </div>

              {/* Submit */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#72787d]">
                  Via Google Meet or Direct Phone
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3e5f78] hover:bg-[#284a61] text-white text-xs sm:text-sm font-medium shadow-md transition-all cursor-pointer"
                >
                  <span>Confirm Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 flex flex-col items-center gap-4 animate-in fade-in zoom-in-95">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
              <Check className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-serif-display text-2xl text-[#151c23]">
                Reservation Marked
              </h4>
              <p className="text-sm text-[#42474c] mt-2 max-w-sm">
                Slot saved for <strong className="text-[#151c23]">{selectedDay} at {selectedSlot}</strong>. A quiet calendar link has been dispatched to {guestEmail}.
              </p>
            </div>
            <div className="p-3 rounded-2xl bg-[#edf4fe] border border-[#dbe3ed] text-xs text-[#42474c] max-w-sm text-left">
              <p>📍 <strong>Channel:</strong> Direct Phone / Google Meet</p>
              <p className="mt-1">📞 <strong>Host:</strong> Dheeraj Sharma ({PROFILE_DATA.phoneFormatted})</p>
            </div>
            <button
              onClick={handleReset}
              className="mt-2 px-6 py-2 rounded-full bg-[#3e5f78] text-white text-xs font-semibold hover:bg-[#284a61] transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
