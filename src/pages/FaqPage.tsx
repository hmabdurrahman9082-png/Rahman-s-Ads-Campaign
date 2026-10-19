import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { faqData, FaqItem } from '../config/brandConfig';

interface FaqPageProps {
  onOpenContact: (topic?: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string>(faqData[0]?.id || '');

  const categories = ['All', 'Services', 'Budget', 'Communication', 'Courses'];

  const filteredFaqs = selectedCategory === 'All' 
    ? faqData 
    : faqData.filter((item) => item.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
          Frequently Asked Questions
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Clear, Honest Answers to Common Questions
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Everything you need to know about how we manage campaigns, separate ad spend from management fees, and collaborate with your team.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-xl max-w-md mx-auto">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq: FaqItem) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-[#080F1E] border border-slate-800 rounded-xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/40 transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-blue-400 bg-blue-950/40 border border-blue-900/60 px-2 py-0.5 rounded">
                    {faq.category}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-blue-400' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still have questions */}
      <div className="bg-[#080E1C] border border-slate-800 rounded-xl p-8 text-center">
        <HelpCircle className="w-8 h-8 text-blue-400 mx-auto mb-2" />
        <h3 className="text-base font-bold text-white mb-1">Have a question that is not covered here?</h3>
        <p className="text-xs text-slate-400 mb-5 max-w-md mx-auto">
          We are happy to answer any specific inquiries regarding your industry, Meta ad policies, or custom timelines.
        </p>
        <button
          onClick={() => onOpenContact('Unanswered FAQ Question')}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2"
        >
          <span>Ask Us Directly</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
