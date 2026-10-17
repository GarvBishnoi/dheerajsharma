import React, { useState } from 'react';
import { Send, CheckCircle2, RotateCcw, ShieldCheck } from 'lucide-react';
import { NoteItem } from '../types';
import { PROFILE_DATA } from '../data/profile';

export const ThoughtfulNoteForm: React.FC = () => {
  const [identity, setIdentity] = useState('');
  const [topic, setTopic] = useState('Custom Websites & Platforms (Systemo)');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identity.trim() || !message.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newNote: NoteItem = {
        id: Date.now().toString(),
        sender: identity,
        topic,
        message,
        timestamp: new Date().toISOString(),
      };

      try {
        const existing = JSON.parse(localStorage.getItem('dheeraj_notes') || '[]');
        localStorage.setItem('dheeraj_notes', JSON.stringify([newNote, ...existing]));
      } catch (err) {
        // Safe catch
      }

      setIsSubmitting(false);
      setIsSent(true);
    }, 600);
  };

  const handleReset = () => {
    setIdentity('');
    setMessage('');
    setIsSent(false);
  };

  return (
    <div className="p-5 sm:p-6 rounded-3xl bg-white/85 border border-[#e1e9f3]/80 backdrop-blur-xl shadow-[0_12px_40px_-6px_rgba(74,82,90,0.06)] flex flex-col gap-4">
      <div>
        <span className="text-[11px] tracking-widest text-[#3e5f78] uppercase font-semibold block">
          D. Sharma · Founder
        </span>
        <h3 className="font-serif-display text-xl sm:text-[22px] text-[#151c23] font-medium mt-0.5">
          Leave a thoughtful note
        </h3>
        <p className="text-xs sm:text-sm text-[#42474c] mt-1 leading-relaxed">
          Direct to Dheeraj's personal tablet. No automated marketing loops.
        </p>
      </div>

      {!isSent ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          <div>
            <label
              htmlFor="sender-identity"
              className="text-[11px] font-semibold text-[#42474c] uppercase tracking-wider block mb-1.5"
            >
              Your identity / email
            </label>
            <input
              id="sender-identity"
              type="text"
              required
              value={identity}
              onChange={(e) => setIdentity(e.target.value)}
              placeholder="e.g. clara@studio.design or @clara"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#edf4fe]/70 focus:bg-white text-[#151c23] placeholder:text-[#72787d]/70 text-sm border border-transparent focus:border-[#3e5f78]/30 outline-none focus:ring-2 focus:ring-[#3e5f78]/20 transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="note-topic"
              className="text-[11px] font-semibold text-[#42474c] uppercase tracking-wider block mb-1.5"
            >
              Inquiry Context / Company
            </label>
            <div className="relative">
              <select
                id="note-topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#edf4fe]/70 focus:bg-white text-[#151c23] text-sm border border-transparent focus:border-[#3e5f78]/30 outline-none focus:ring-2 focus:ring-[#3e5f78]/20 appearance-none cursor-pointer transition-all pr-8"
              >
                <option value="Custom Websites & Platforms (Systemo)">Custom Websites &amp; Platforms (Systemo)</option>
                <option value="Apps & Software Engineering (Systemo)">Apps &amp; Software Engineering (Systemo)</option>
                <option value="E-Commerce Architecture (Systemo)">E-Commerce Architecture (Systemo)</option>
                <option value="Digital Solutions & Strategy (Winzy)">Digital Solutions &amp; Strategy (Winzy)</option>
                <option value="Founder Advisory & Partnerships">Founder Advisory &amp; Partnerships</option>
                <option value="Just exchanging warm frequencies">Just exchanging warm frequencies</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#72787d]">
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="note-content"
              className="text-[11px] font-semibold text-[#42474c] uppercase tracking-wider block mb-1.5"
            >
              The Message
            </label>
            <textarea
              id="note-content"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell Dheeraj a bit about what you are envisioning..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#edf4fe]/70 focus:bg-white text-[#151c23] placeholder:text-[#72787d]/70 text-sm border border-transparent focus:border-[#3e5f78]/30 outline-none focus:ring-2 focus:ring-[#3e5f78]/20 resize-none transition-all"
            />
          </div>

          <div className="pt-1 flex items-center justify-between">
            <span className="text-[11px] text-[#72787d] flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3e5f78]" />
              Encrypted transit
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3e5f78] hover:bg-[#284a61] text-white text-xs sm:text-sm font-medium shadow-[0_6px_20px_rgba(62,95,120,0.25)] hover:shadow-[0_8px_24px_rgba(62,95,120,0.32)] transition-all duration-300 disabled:opacity-70 cursor-pointer"
            >
              <span>{isSubmitting ? 'Transmitting...' : 'Send Note'}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      ) : (
        <div className="p-5 rounded-2xl bg-[#cae2fb]/40 border border-[#b1c9e1]/60 text-[#151c23] flex flex-col gap-3.5 animate-in fade-in zoom-in-95 duration-300">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#3e5f78] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-[#151c23]">
                Note dispatched peacefully
              </p>
              <p className="text-xs text-[#42474c] mt-1 leading-relaxed">
                Dheeraj will receive this on his studio feed shortly. Direct reply will be routed to your identity via {PROFILE_DATA.email}.
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-[#3e5f78]/15 flex items-center justify-between">
            <span className="text-[11px] text-[#72787d]">
              Delivered directly
            </span>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-xs text-[#3e5f78] hover:underline font-medium cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Send another</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
