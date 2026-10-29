import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { FaqItem } from '../config/brandConfig';
import { useLanguage } from '../context/LanguageContext';
import { useSiteData } from '../context/SiteDataContext';

interface FaqPageProps {
  onOpenContact: (topic?: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenContact }) => {
  const { language } = useLanguage();
  const { faqData } = useSiteData();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string>(faqData[0]?.id || '');

  const categories = [
    { id: 'All', labelEn: 'All Questions', labelBn: 'সব প্রশ্ন' },
    { id: 'Services', labelEn: 'Services', labelBn: 'সার্ভিসসমূহ' },
    { id: 'Budget', labelEn: 'Budget & Billing', labelBn: 'বাজেট ও বিলিং' },
    { id: 'Communication', labelEn: 'Communication', labelBn: 'যোগাযোগ' },
    { id: 'Courses', labelEn: 'Courses', labelBn: 'কোর্সসমূহ' },
  ];

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
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
          {language === 'bn' ? 'সাধারণ জিজ্ঞাসা ও উত্তর' : 'Frequently Asked Questions'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          {language === 'bn' ? 'আপনার প্রয়োজনীয় সব প্রশ্নের পরিষ্কার উত্তর' : 'Clear, Honest Answers to Common Questions'}
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          {language === 'bn'
            ? 'ক্যাম্পেইন পরিচালনা, বিলিং নীতিমালা এবং ক্লায়েন্ট সাপোর্টের যাবতীয় সাধারণ প্রশ্নের সমাধান।'
            : 'Everything you need to know about how we manage campaigns, separate ad spend from management fees, and collaborate with your team.'}
        </p>
      </div>

      {/* Category Pills Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {language === 'bn' ? cat.labelBn : cat.labelEn}
            </button>
          );
        })}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq: FaqItem) => {
          const isOpen = openId === faq.id;
          const displayQuestion = language === 'bn' && faq.bengaliQuestion ? faq.bengaliQuestion : faq.question;
          return (
            <div
              key={faq.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-colors shadow-xs"
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
              >
                <span className="text-sm sm:text-base font-bold text-slate-900">
                  {displayQuestion}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </button>
              
              {isOpen && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Box */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          {language === 'bn' ? 'অন্য কোনো প্রশ্ন আছে?' : 'Still Have an Unanswered Question?'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6">
          {language === 'bn'
            ? 'সরাসরি WhatsApp-এ কথা বলে আপনার প্রশ্নটির স্পষ্ট উত্তর জেনে নিন।'
            : 'Get in touch directly and we will provide an honest, straightforward answer.'}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://wa.me/8801883423076"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp (01883423076)</span>
          </a>

          <button
            onClick={() => onOpenContact('Unanswered Question')}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-xs"
          >
            {language === 'bn' ? 'মেসেজ পাঠান' : 'Contact Us Directly'}
          </button>
        </div>
      </div>

    </div>
  );
};
