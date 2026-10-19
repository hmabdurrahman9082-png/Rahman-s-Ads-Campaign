import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { PageId } from '../components/Navbar';

interface NotFoundPageProps {
  onNavigate: (page: PageId) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="inline-block px-3 py-1 bg-blue-950/60 border border-blue-800 text-blue-400 text-xs font-mono font-bold rounded-md">
        404 — Page Not Found
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        The page you are looking for does not exist
      </h1>
      <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
        The link may be outdated or mistyped. Use the navigation menu above or return to our homepage.
      </p>
      <div className="pt-4 flex items-center justify-center gap-3">
        <button
          onClick={() => onNavigate('home')}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>
      </div>
    </div>
  );
};
