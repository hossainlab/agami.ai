'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CurriculumCredits } from '@/components/CurriculumCredits';
import { ProgramOverview } from '@/components/ProgramOverview';
import { CurriculumExplorer } from '@/components/CurriculumExplorer';
import { MentorSection } from '@/components/MentorSection';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { LinkConfig } from '@/types';
import { DEFAULT_CONFIG, getLinkConfig, saveLinkConfig } from '@/utils/config';

// Lazy load modals on demand to keep initial bundle ultra-lightweight
const ConfigModal = dynamic(
  () => import('@/components/ConfigModal').then((mod) => mod.ConfigModal),
  { ssr: false }
);

const RegistrationModal = dynamic(
  () => import('@/components/RegistrationModal').then((mod) => mod.RegistrationModal),
  { ssr: false }
);

export default function HomePage() {
  const [linkConfig, setLinkConfig] = useState<LinkConfig>(DEFAULT_CONFIG);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  
  // Registration Modal State
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [registrationTrack, setRegistrationTrack] = useState<string | undefined>(undefined);
  const [registrationEventTitle, setRegistrationEventTitle] = useState<string | undefined>(undefined);

  useEffect(() => {
    setLinkConfig(getLinkConfig());
  }, []);

  const handleSaveConfig = (newConfig: LinkConfig) => {
    setLinkConfig(newConfig);
    saveLinkConfig(newConfig);
  };

  const handleOpenRegistration = (track?: string, eventTitle?: string) => {
    setRegistrationTrack(track);
    setRegistrationEventTitle(eventTitle);
    setIsRegistrationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar
        onOpenConfig={() => setIsConfigModalOpen(true)}
        onOpenRegistration={handleOpenRegistration}
        config={linkConfig}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero with Overview & CTAs */}
        <Hero
          onOpenRegistration={handleOpenRegistration}
          config={linkConfig}
        />

        {/* 2. Global Curriculum Heritage & Partner Credits */}
        <CurriculumCredits />

        {/* 3. Program Mission & Core Pillars */}
        <ProgramOverview
          onOpenRegistration={handleOpenRegistration}
          config={linkConfig}
        />

        {/* 4. Interactive Curriculum Explorer (Modules 1–5) */}
        <CurriculumExplorer
          config={linkConfig}
        />

        {/* 5. Be a Mentor Section */}
        <MentorSection
          onOpenRegistration={handleOpenRegistration}
          config={linkConfig}
        />

        {/* 6. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenConfig={() => setIsConfigModalOpen(true)}
        config={linkConfig}
      />

      {/* Custom Link Configuration Modal (Lazy loaded) */}
      {isConfigModalOpen && (
        <ConfigModal
          isOpen={isConfigModalOpen}
          onClose={() => setIsConfigModalOpen(false)}
          config={linkConfig}
          onSave={handleSaveConfig}
        />
      )}

      {/* Fast Registration Modal (Lazy loaded) */}
      {isRegistrationModalOpen && (
        <RegistrationModal
          isOpen={isRegistrationModalOpen}
          onClose={() => setIsRegistrationModalOpen(false)}
          config={linkConfig}
          initialTrack={registrationTrack}
          eventTitle={registrationEventTitle}
        />
      )}
    </div>
  );
}
