import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { AtmosphereHero } from './components/AtmosphereHero';
import { ImmediateTouchpoints } from './components/ImmediateTouchpoints';
import { FoundedVentures } from './components/FoundedVentures';
import { CuratedChannels } from './components/CuratedChannels';
import { LocalTimeWidget } from './components/LocalTimeWidget';
import { ThoughtfulNoteForm } from './components/ThoughtfulNoteForm';
import { ScheduleModal } from './components/ScheduleModal';
import { QuickShareModal } from './components/QuickShareModal';
import { WorkingTogetherModal } from './components/WorkingTogetherModal';
import { Footer } from './components/Footer';
import { PROFILE_DATA, HOTLINK_IMAGES } from './data/profile';

export default function App() {
  const [activeTab, setActiveTab] = useState<'contact' | 'working'>('contact');
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isWorkingTogetherOpen, setIsWorkingTogetherOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f9ff] text-[#151c23] flex flex-col justify-between selection:bg-[#cae2fb] selection:text-[#151c23] relative overflow-x-hidden font-sans">
      {/* Diffuse Atmospheric Aura Backdrops */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 w-[920px] h-[560px] bg-gradient-to-b from-[#cae2fb]/45 via-[#edf4fe]/60 to-transparent blur-3xl opacity-75 -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed top-[36rem] -right-36 w-[560px] h-[560px] bg-gradient-to-br from-[#c9e6ff]/35 via-[#edf4fe]/20 to-transparent rounded-full blur-3xl opacity-50 -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed bottom-12 -left-28 w-[480px] h-[480px] bg-gradient-to-tr from-[#cde5fe]/35 via-[#dbe3ed]/20 to-transparent rounded-full blur-2xl opacity-60 -z-10" 
      />

      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          if (tab === 'contact') setActiveTab('contact');
          else if (tab === 'working') {
            setActiveTab('working');
            setIsWorkingTogetherOpen(true);
          }
        }}
        onOpenSchedule={() => setIsScheduleOpen(true)}
        onOpenWorkingTogether={() => setIsWorkingTogetherOpen(true)}
        onOpenShareModal={() => setIsShareModalOpen(true)}
      />

      {/* Main Content */}
      <main className="w-full pt-24 md:pt-28 flex-1">
        <div className="max-w-[900px] mx-auto w-full px-4 sm:px-6 md:px-8 py-6 md:py-10 flex flex-col gap-9 sm:gap-11">
          
          {/* Hero Section */}
          <AtmosphereHero />

          {/* Immediate Touchpoint Action Cards (Phone, Instagram, WhatsApp, Email) */}
          <ImmediateTouchpoints />

          {/* Split Asymmetrical Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
            
            {/* Left Column: Founded Ventures & Curated Channels (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-7">
              {/* Highlighted Founded Companies: Systemo & Winzy */}
              <FoundedVentures />

              {/* Instant Channels & Jaipur Base (No Zurich map) */}
              <CuratedChannels />
            </div>

            {/* Right Column: Local Atmosphere Time & Thoughtful Note (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Local Time Widget */}
              <LocalTimeWidget onOpenSchedule={() => setIsScheduleOpen(true)} />

              {/* Thoughtful Note Form */}
              <ThoughtfulNoteForm />

              {/* Atmospheric Visual Vignette */}
              <div className="rounded-3xl overflow-hidden relative shadow-[0_12px_32px_rgba(74,82,90,0.06)] bg-[#e7eff8] border border-[#e1e9f3] group">
                <img
                  className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Minimalist architectural interior filled with soft morning mist and high-altitude alpine daylight"
                  src={HOTLINK_IMAGES.vignette}
                />
                <div className="p-3.5 bg-white/90 backdrop-blur-md flex items-center justify-between border-t border-white/60">
                  <span className="text-[11px] text-[#42474c] italic">
                    IST (UTC+5:30) · Jaipur, India
                  </span>
                  <span className="text-[11px] font-semibold text-[#3e5f78] tracking-widest uppercase">
                    Systemo &amp; Winzy
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Modals & Dialogs */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />

      <QuickShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      <WorkingTogetherModal
        isOpen={isWorkingTogetherOpen}
        onClose={() => {
          setIsWorkingTogetherOpen(false);
          setActiveTab('contact');
        }}
        onOpenSchedule={() => {
          setIsWorkingTogetherOpen(false);
          setIsScheduleOpen(true);
        }}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
