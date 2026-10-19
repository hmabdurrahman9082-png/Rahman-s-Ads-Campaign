import React from 'react';
import { Target, Shield, HeartHandshake, ArrowRight, Eye, RefreshCw } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';
import { PageId } from '../components/Navbar';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (topic?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
          About The Brand
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Empowering Growing Businesses Through Disciplined Digital Advertising
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          {brandConfig.brandName} was established to provide clear, reliable, and data-informed advertising services for small businesses, entrepreneurs, and e-commerce brands looking to grow online.
        </p>
      </div>

      {/* Mission & Purpose */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#080F1E] border border-slate-800 rounded-2xl p-8 sm:p-12">
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">Our Core Mission</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Online advertising is frequently presented with confusing jargon and unrealistic promises. Our mission is to demystify the advertising process, providing transparent campaign structures, systematic creative testing, and honest communication.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            We believe that every small business deserves the same methodical advertising principles used by larger enterprises—grounded in real audience insights, clear value propositions, and relentless focus on measurable business outcomes.
          </p>
        </div>

        <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-xl p-6 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-blue-400">
            Who We Serve
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            {brandConfig.targetAudience}
          </p>
          <div className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Independent eCommerce stores seeking scalable customer acquisition</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Local & regional service providers requiring qualified leads</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Founders launching new products and testing market demand</span>
            </div>
          </div>
        </div>
      </div>

      {/* Our Operating Values */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
            Guiding Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            How We Operate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#080F1D] border border-slate-800 rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Complete Transparency</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We never conceal what happens to your advertising budget. All ad spend is billed directly by Meta to your own payment method, and we provide objective metric reports without inflated vanity claims.
            </p>
          </div>

          <div className="bg-[#080F1D] border border-slate-800 rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Iterative Optimization</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Successful campaigns are built on testing hypotheses. We systematically test headlines, creative formats, and audience segments, scaling what works and eliminating what does not.
            </p>
          </div>

          <div className="bg-[#080F1D] border border-slate-800 rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Client Partnership</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We view our work as an extension of your business. We listen carefully to your goals, protect your brand image, and ensure you are always informed about your campaign performance.
            </p>
          </div>
        </div>
      </div>

      {/* Honest Commitment Banner */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Looking for a Reliable Advertising Partner?</h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Let us review your goals and explain how our structured process can benefit your business.
          </p>
        </div>
        <button
          onClick={() => onOpenContact('About Us Inquiry')}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
        >
          <span>Get in Touch</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
