import React from 'react';
import { ArrowRight, Check, AlertCircle, HelpCircle } from 'lucide-react';
import { pricingPlans, PricingPlan } from '../config/brandConfig';

interface PricingPageProps {
  onOpenContact: (planName: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenContact }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
          Transparent Partnership Tiers
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Structured Service Packages Tailored to Your Growth
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Every business has distinct margin structures and budget requirements. We quote custom management fees based on your specific scope rather than enforcing artificial fixed packages.
        </p>
      </div>

      {/* Crucial Ad Spend Clarity Banner */}
      <div className="bg-blue-950/20 border border-blue-900/60 rounded-xl p-5 flex items-start gap-3.5 text-xs text-slate-300">
        <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-white">Important Financial Disclosure: Platform Ad Spend vs. Management Fee</p>
          <p className="text-slate-400 leading-relaxed">
            Advertising spend is paid directly to Meta (Facebook/Instagram) through your own business payment method. This ensures you maintain 100% ownership of your ad account, receipt history, and data assets. Our fees cover dedicated campaign strategy, setup, ongoing management, and iterative creative testing.
          </p>
        </div>
      </div>

      {/* 3 Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {pricingPlans.map((plan: PricingPlan) => {
          const isPopular = plan.badge === 'Most Popular';
          return (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                isPopular
                  ? 'bg-[#0B1528] border-2 border-blue-500 shadow-xl shadow-blue-950/30'
                  : 'bg-[#080F1E] border border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Popular Badge */}
                {isPopular && (
                  <div className="mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-700 px-2.5 py-0.5 rounded-full inline-block">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-400 mb-6 min-h-[36px]">
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div className="py-4 border-y border-slate-800/80 mb-6">
                  <div className="text-2xl font-extrabold text-white tracking-tight">
                    Contact for Pricing
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    Custom quote based on your specific ad objectives & scope
                  </span>
                </div>

                {/* Recommended For */}
                <div className="mb-6 p-3 bg-slate-900/60 rounded-lg text-xs border border-slate-800/80">
                  <span className="font-semibold text-slate-300 block mb-1">Recommended for:</span>
                  <span className="text-slate-400 leading-relaxed">{plan.recommendedFor}</span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    What is included:
                  </span>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => onOpenContact(`${plan.name} Plan Pricing Inquiry`)}
                  className={`w-full py-3 px-4 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isPopular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md'
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700'
                  }`}
                >
                  <span>Inquire for {plan.name} Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Scope Guidance */}
      <div className="bg-[#080E1C] border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <HelpCircle className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
          <div>
            <h4 className="text-base font-bold text-white mb-1">Have unique project requirements?</h4>
            <p className="text-xs sm:text-sm text-slate-400">
              We frequently handle specialized audits, one-off campaign turnarounds, or multi-market expansions. Tell us what you need.
            </p>
          </div>
        </div>
        <button
          onClick={() => onOpenContact('Custom Scope Inquiry')}
          className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer"
        >
          Request Custom Estimate
        </button>
      </div>

    </div>
  );
};
