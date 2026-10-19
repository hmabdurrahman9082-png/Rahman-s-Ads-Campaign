/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, PageId, navLinks } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ConfigGuideModal } from './components/ConfigGuideModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProcessPage } from './pages/ProcessPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PricingPage } from './pages/PricingPage';
import { FreeCoursesPage } from './pages/FreeCoursesPage';
import { PaidCoursesPage } from './pages/PaidCoursesPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [is404, setIs404] = useState<boolean>(false);

  // Modal states
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState('General Inquiry');
  const [ownerGuideOpen, setOwnerGuideOpen] = useState(false);

  // Sync with window.location.hash for clean client-side routing
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash;
      if (!rawHash) {
        setCurrentPage('home');
        setIs404(false);
        return;
      }

      const cleanHash = rawHash.replace(/^#\/?/, '').split('?')[0].trim();
      if (!cleanHash) {
        setCurrentPage('home');
        setIs404(false);
        return;
      }

      const validPage = navLinks.find((l) => l.id === cleanHash);
      if (validPage) {
        setCurrentPage(validPage.id);
        setIs404(false);
      } else {
        // Never break into 404 on initial load or preview token hashes
        setCurrentPage('home');
        setIs404(false);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setIs404(false);
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = (topic?: string) => {
    setContactTopic(topic || 'General Inquiry');
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenOwnerGuide={() => setOwnerGuideOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {is404 ? (
          <NotFoundPage onNavigate={handleNavigate} />
        ) : (
          <>
            {currentPage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onOpenContact={handleOpenContact}
              />
            )}
            {currentPage === 'about' && (
              <AboutPage
                onNavigate={handleNavigate}
                onOpenContact={handleOpenContact}
              />
            )}
            {currentPage === 'services' && (
              <ServicesPage onOpenContact={handleOpenContact} />
            )}
            {currentPage === 'process' && (
              <ProcessPage onOpenContact={handleOpenContact} />
            )}
            {currentPage === 'portfolio' && (
              <PortfolioPage onOpenContact={handleOpenContact} />
            )}
            {currentPage === 'pricing' && (
              <PricingPage onOpenContact={handleOpenContact} />
            )}
            {currentPage === 'free-courses' && (
              <FreeCoursesPage onOpenContact={handleOpenContact} />
            )}
            {currentPage === 'paid-courses' && (
              <PaidCoursesPage onOpenContact={handleOpenContact} />
            )}
            {currentPage === 'faq' && (
              <FaqPage onOpenContact={handleOpenContact} />
            )}
            {currentPage === 'contact' && (
              <ContactPage
                onOpenOwnerGuide={() => setOwnerGuideOpen(true)}
              />
            )}
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenOwnerGuide={() => setOwnerGuideOpen(true)}
      />

      {/* Interactive Contact & Inquiry Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultTopic={contactTopic}
      />

      {/* Owner Configuration & Free Deployment Guide Modal */}
      <ConfigGuideModal
        isOpen={ownerGuideOpen}
        onClose={() => setOwnerGuideOpen(false)}
      />
    </div>
  );
}
