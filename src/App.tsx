import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingActionBar } from './components/ui/FloatingActionBar';

// All 13 sections in the exact blueprint sequence
import { Hero } from './components/sections/Hero';
import { FounderRealityCheck } from './components/sections/FounderRealityCheck';
import { TeamJugaduApproach } from './components/sections/TeamJugaduApproach';
import { ServicesByOutcome } from './components/sections/ServicesByOutcome';
import { SelectedWork } from './components/sections/SelectedWork';
import { JugaduSprint } from './components/sections/JugaduSprint';
import { TechnologyCapabilities } from './components/sections/TechnologyCapabilities';
import { PricingPlans } from './components/sections/PricingPlans';
import { WhyTeamJugadu } from './components/sections/WhyTeamJugadu';
import { TeamLeadership } from './components/sections/TeamLeadership';
import { DiscoveryCTA } from './components/sections/DiscoveryCTA';
import { FAQ } from './components/sections/FAQ';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-[#FF6B0B] selection:text-white relative">
      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Flow: Exactly 13 Sections */}
      <main id="main-content" className="flex-grow">
        {/* 01. Hero */}
        <Hero />

        {/* 02. Founder Reality Check */}
        <FounderRealityCheck />

        {/* 03. The TeamJugadu Approach */}
        <TeamJugaduApproach />

        {/* 04. Services by Outcome */}
        <ServicesByOutcome />

        {/* 05. Selected Work & Proof */}
        <SelectedWork />

        {/* 06. The Jugadu Sprint */}
        <JugaduSprint />

        {/* 07. Technology & Capabilities */}
        <TechnologyCapabilities />

        {/* 08. Choose Your Launch Plan */}
        <PricingPlans />

        {/* 09. Why TeamJugadu */}
        <WhyTeamJugadu />

        {/* 11. Meet the People Behind the Work */}
        <TeamLeadership />

        {/* 12. Let's Discover Your Idea */}
        <DiscoveryCTA />

        {/* 13. FAQs */}
        <FAQ />
      </main>

      {/* Floating Action Bar */}
      <FloatingActionBar />

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
