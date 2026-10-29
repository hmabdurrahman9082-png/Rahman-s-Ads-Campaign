import React from 'react';
import { Home } from 'lucide-react';
import { PageId } from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext';

interface NotFoundPageProps {
  onNavigate: (page: PageId) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  const { language } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold rounded-md">
        404 — Page Not Found
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        {language === 'bn' ? 'পৃষ্ঠাটি খুঁজে পাওয়া যায়নি' : 'The page you are looking for does not exist'}
      </h1>
      <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
        {language === 'bn' 
          ? 'লিংকটি সম্ভবত ভুল বা পৃষ্ঠাটি সরানো হয়েছে। নিচের বাটনে ক্লিক করে মূল পাতায় ফিরে যান।'
          : 'The link may be outdated or mistyped. Use the navigation menu above or return to our homepage.'}
      </p>
      <div className="pt-4 flex items-center justify-center gap-3">
        <button
          onClick={() => onNavigate('home')}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2 shadow-sm"
        >
          <Home className="w-4 h-4" />
          <span>{language === 'bn' ? 'হোমপেজে ফিরে যান' : 'Return to Homepage'}</span>
        </button>
      </div>
    </div>
  );
};
