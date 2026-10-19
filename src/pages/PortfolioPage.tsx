import React from 'react';
import { ArrowRight, ShieldCheck, AlertCircle, Sparkles, FolderKanban } from 'lucide-react';
import { portfolioPlaceholders, PortfolioPlaceholder } from '../config/brandConfig';

interface PortfolioPageProps {
  onOpenContact: (topic?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenContact }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
          Portfolio & Case Studies
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Client Showcase & Campaign Frameworks
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          We believe in strict ethical standards. Below are demonstration placeholders representing the campaign structures we execute for clients. Real case studies with verifiable data will be published here upon client authorization.
        </p>
      </div>

      {/* Honest Policy Notice */}
      <div className="bg-blue-950/20 border border-blue-900/60 rounded-xl p-5 flex items-start gap-3 text-xs text-slate-300">
        <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-white">Transparency & Non-Fabrication Guarantee</p>
          <p className="text-slate-400 leading-relaxed">
            In accordance with our strict brand ethics, RAHMAN'S ADS CAMPAIGN does not fabricate client logos, fake testimonial quotes, or invent unverifiable revenue metrics. All items below are clearly identified demonstration blueprints.
          </p>
        </div>
      </div>

      {/* Showcase Placeholders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolioPlaceholders.map((item: PortfolioPlaceholder) => (
          <div
            key={item.id}
            className="bg-[#080F1E] border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
          >
            <div>
              {/* Demonstration Label */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[11px] font-mono text-blue-400 bg-blue-950/40 border border-blue-800/60 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                <span className="text-[10px] text-amber-300 bg-amber-950/40 border border-amber-800/60 px-2 py-0.5 rounded font-medium">
                  Sample Blueprint
                </span>
              </div>

              <div className="h-36 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col items-center justify-center p-4 text-center mb-5 group">
                <FolderKanban className="w-8 h-8 text-slate-500 mb-2" />
                <span className="text-xs font-semibold text-slate-300">{item.statusLabel}</span>
                <span className="text-[11px] text-slate-400 mt-1">Pending Client Project Release</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                {item.title}
              </h3>

              <div className="text-xs text-blue-300 font-medium mb-3">
                Focus: {item.objective}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <button
                onClick={() => onOpenContact(`Portfolio Blueprint: ${item.title}`)}
                className="w-full py-2 px-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-700 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Inquire About Similar Campaign</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Invitation for First Clients */}
      <div className="bg-[#080E1C] border border-slate-800 rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
        <Sparkles className="w-8 h-8 text-blue-400 mx-auto mb-3" />
        <h2 className="text-2xl font-bold text-white mb-2">Be Our Next Featured Case Study</h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          Partner with RAHMAN'S ADS CAMPAIGN to establish a clean, profitable advertising engine. We work side-by-side with you to document real milestones and transparent results.
        </p>
        <button
          onClick={() => onOpenContact('Featured Case Study Partner')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2"
        >
          <span>Discuss Your Campaign Opportunity</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
