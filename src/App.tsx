/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
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
import { CoursesPage } from './pages/CoursesPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AdminPage } from './pages/AdminPage';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { SiteDataProvider } from './context/SiteDataContext';

export function AppContent() {
  const { language, t } = useLanguage();
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [pageHistory, setPageHistory] = useState<PageId[]>([]);
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
      if (cleanHash === 'owner-guide') {
        setOwnerGuideOpen(true);
        return;
      }
      if (cleanHash === 'admin') {
        setCurrentPage('admin');
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
    if (page !== currentPage) {
      setPageHistory((prev) => [...prev, currentPage]);
    }
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setIs404(false);
    if (pageHistory.length > 0) {
      const prevPage = pageHistory[pageHistory.length - 1];
      setPageHistory((prev) => prev.slice(0, prev.length - 1));
      setCurrentPage(prevPage);
      window.location.hash = `#/${prevPage}`;
    } else {
      // Fallback to home page if no history
      setCurrentPage('home');
      window.location.hash = '#/home';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = (topic?: string) => {
    setContactTopic(topic || 'General Inquiry');
    setContactModalOpen(true);
  };

  const currentNav = navLinks.find((l) => l.id === currentPage);
  const currentTitle = currentNav ? (language === 'bn' ? currentNav.labelBn : currentNav.labelEn) : currentPage;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white antialiased">
      
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Sticky Back Button Bar for Any Subpage (except admin) */}
      {currentPage !== 'home' && currentPage !== 'admin' && (
        <div className="bg-white/95 border-b border-slate-200 sticky top-20 z-40 backdrop-blur-xs shadow-2xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition-all cursor-pointer shadow-2xs group"
              title={language === 'bn' ? 'পূর্ববর্তী পেজে ফিরে যান' : 'Go back to previous page'}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-blue-600" />
              <span>{t('nav.back')}</span>
            </button>

            {/* Breadcrumb Navigation Indicator */}
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <button
                onClick={() => handleNavigate('home')}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                {t('nav.home')}
              </button>
              <span>/</span>
              <span className="font-semibold text-slate-800">{currentTitle}</span>
            </div>
          </div>
        </div>
      )}

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
            {currentPage === 'courses' && (
              <CoursesPage onOpenContact={handleOpenContact} />
            )}
            {currentPage === 'free-courses' && (
              <CoursesPage initialTab="free" onOpenContact={handleOpenContact} />
            )}
            {currentPage === 'paid-courses' && (
              <CoursesPage initialTab="paid" onOpenContact={handleOpenContact} />
            )}
            {currentPage === 'faq' && (
              <FaqPage onOpenContact={handleOpenContact} />
            )}
            {currentPage === 'contact' && (
              <ContactPage />
            )}
            {currentPage === 'admin' && (
              <AdminPage onNavigate={handleNavigate} />
            )}
          </>
        )}

        {/* Bottom Back Button on Subpages */}
        {currentPage !== 'home' && currentPage !== 'admin' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-2">
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-300 shadow-2xs transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-blue-600" />
              <span>{t('nav.back')}</span>
            </button>
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
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

export default function App() {
  return (
    <SiteDataProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </SiteDataProvider>
  );
}
