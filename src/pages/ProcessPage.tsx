import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { processSteps, ProcessStep } from '../config/brandConfig';

interface ProcessPageProps {
  onOpenContact: (topic?: string) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenContact }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
          Our Methodology
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          A Disciplined 6-Step Advertising Process
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          High-performing advertising is not about luck. We employ a structured 6-step workflow designed to minimize wasted ad spend and maximize customer conversion clarity.
        </p>
      </div>

      {/* Step Cards Grid / Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {processSteps.map((step: ProcessStep) => (
          <div
            key={step.stepNumber}
            className="bg-[#080F1E] border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all group"
          >
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-mono font-bold text-blue-400 bg-blue-950/40 border border-blue-800/60 px-3 py-1 rounded-md">
                  {step.stepNumber}
                </span>
                <span className="text-xs text-slate-400 font-medium tracking-wider uppercase">
                  Phase {step.stepNumber}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-300 transition-colors">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {step.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Primary Output:
              </span>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{step.keyAction}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Process Commitment Strip */}
      <div className="bg-[#091224] border border-slate-800 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
          Ready to Walk Through This Process With Your Business?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto mb-6">
          Whether you are launching your first Meta campaign or looking to revamp existing ads, we will guide you through step 1 with clear expectations and zero hype.
        </p>
        <button
          onClick={() => onOpenContact('Process Inquiry')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2 shadow-md"
        >
          <span>Schedule Step 1 Discovery Call</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
