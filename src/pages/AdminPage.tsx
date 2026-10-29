import React, { useState, useEffect } from 'react';
import {
  Lock,
  Unlock,
  Save,
  RotateCcw,
  ExternalLink,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  Building,
  Phone,
  Briefcase,
  GraduationCap,
  CreditCard,
  FolderKanban,
  HelpCircle,
  Inbox,
  LogOut,
  Download,
  Upload,
  ArrowLeft,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';
import { useSiteData } from '../context/SiteDataContext';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { PageId } from '../components/Navbar';
import {
  BrandConfig,
  ServiceItem,
  CourseItem,
  PricingPlan,
  PortfolioPlaceholder,
  FaqItem,
} from '../config/brandConfig';

const ADMIN_PASSWORD = 'Rahman9082##';
const AUTH_STORAGE_KEY = 'rahman_ads_admin_authed_session';

interface AdminPageProps {
  onNavigate: (page: PageId) => void;
}

type AdminTab =
  | 'brand'
  | 'contact'
  | 'services'
  | 'courses'
  | 'pricing'
  | 'portfolio'
  | 'faq'
  | 'inbox';

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigate }) => {
  const {
    brandConfig,
    servicesData,
    pricingPlans,
    freeCoursesData,
    paidCoursesData,
    faqData,
    portfolioPlaceholders,
    saveAllData,
    resetAllToDefaults,
    isCustomized,
  } = useSiteData();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Active Tab
  const [activeTab, setActiveTab] = useState<AdminTab>('brand');

  // Draft States for editing
  const [draftBrand, setDraftBrand] = useState<BrandConfig>(brandConfig);
  const [draftServices, setDraftServices] = useState<ServiceItem[]>(servicesData);
  const [draftPricing, setDraftPricing] = useState<PricingPlan[]>(pricingPlans);
  const [draftFreeCourses, setDraftFreeCourses] = useState<CourseItem[]>(freeCoursesData);
  const [draftPaidCourses, setDraftPaidCourses] = useState<CourseItem[]>(paidCoursesData);
  const [draftFaq, setDraftFaq] = useState<FaqItem[]>(faqData);
  const [draftPortfolio, setDraftPortfolio] = useState<PortfolioPlaceholder[]>(portfolioPlaceholders);

  // Status feedback
  const [saveSuccessMessage, setSaveSuccessMessage] = useState('');
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);

  // Inquiries from database
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loadingInquiries, setLoadingInquiries] = useState(false);

  // Keep drafts in sync when context data changes (or initial load)
  useEffect(() => {
    setDraftBrand(brandConfig);
    setDraftServices(servicesData);
    setDraftPricing(pricingPlans);
    setDraftFreeCourses(freeCoursesData);
    setDraftPaidCourses(paidCoursesData);
    setDraftFaq(faqData);
    setDraftPortfolio(portfolioPlaceholders);
  }, [brandConfig, servicesData, pricingPlans, freeCoursesData, paidCoursesData, faqData, portfolioPlaceholders]);

  // Load inquiries when Inbox tab is clicked
  useEffect(() => {
    if (activeTab === 'inbox' && isAuthenticated) {
      loadInquiries();
    }
  }, [activeTab, isAuthenticated]);

  const loadInquiries = async () => {
    setLoadingInquiries(true);
    try {
      if (isSupabaseConfigured) {
        const { data, error } = await supabase
          .from('contact_inquiries')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data) {
          setInquiries(data);
        } else {
          console.warn('Could not load Supabase inquiries:', error);
          loadLocalInquiriesFallback();
        }
      } else {
        loadLocalInquiriesFallback();
      }
    } catch (e) {
      loadLocalInquiriesFallback();
    } finally {
      setLoadingInquiries(false);
    }
  };

  const loadLocalInquiriesFallback = () => {
    try {
      const local = localStorage.getItem('rahman_ads_local_inquiries');
      if (local) {
        setInquiries(JSON.parse(local));
      } else {
        setInquiries([]);
      }
    } catch (e) {
      setInquiries([]);
    }
  };

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
      setLoginError('');
      setPasswordInput('');
    } else {
      setLoginError('পাসওয়ার্ড সঠিক নয়! দয়া করে সঠিক পাসওয়ার্ড দিয়ে চেষ্টা করুন।');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    setPasswordInput('');
  };

  // Save All Changes
  const handleSaveChanges = () => {
    saveAllData({
      brandConfig: draftBrand,
      servicesData: draftServices,
      pricingPlans: draftPricing,
      freeCoursesData: draftFreeCourses,
      paidCoursesData: draftPaidCourses,
      faqData: draftFaq,
      portfolioPlaceholders: draftPortfolio,
    });

    setSaveSuccessMessage('সকল পরিবর্তন সফলভাবে সেভ করা হয়েছে এবং লাইভ ওয়েবসাইটে আপডেট হয়েছে!');
    setTimeout(() => {
      setSaveSuccessMessage('');
    }, 4000);
  };

  // Handle Reset to Defaults
  const handleConfirmReset = () => {
    resetAllToDefaults();
    setResetConfirmOpen(false);
    setSaveSuccessMessage('ওয়েবসাইট সফলভাবে পূর্বের অরিজিনাল অবস্থায় ফিরিয়ে আনা হয়েছে!');
    setTimeout(() => {
      setSaveSuccessMessage('');
    }, 4000);
  };

  // Export & Download Backup
  const handleExportBackup = () => {
    const backup = {
      exportedAt: new Date().toISOString(),
      brandConfig: draftBrand,
      servicesData: draftServices,
      pricingPlans: draftPricing,
      freeCoursesData: draftFreeCourses,
      paidCoursesData: draftPaidCourses,
      faqData: draftFaq,
      portfolioPlaceholders: draftPortfolio,
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rahman_ads_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ----------------------------------------------------
  // If NOT Authenticated: Show Password Login Form
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-slate-50">
        <div className="w-full max-w-md bg-white border border-slate-200/90 rounded-2xl shadow-xl p-8 sm:p-10">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4 shadow-xs">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              এডমিন প্যানেল লগইন
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              RAHMAN'S ADS CAMPAIGN ব্যবস্থাপনা কনসোল
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                এডমিন পাসওয়ার্ড দিন
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setLoginError('');
                  }}
                  placeholder="পাসওয়ার্ড লিখুন..."
                  autoFocus
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {loginError && (
                <div className="flex items-center gap-1.5 text-xs text-rose-600 mt-2 font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Unlock className="w-4 h-4" />
              <span>লগইন করুন</span>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 transition-colors font-medium cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>হোম পেজে ফিরে যান</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // If Authenticated: Show Full Admin Control Panel
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-100/70 pb-24">
      {/* Top Admin Header Bar */}
      <div className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-xs">
              AD
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base tracking-tight">এডমিন কন্ট্রোল প্যানেল</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  অনলাইন
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                স্বত্বাধিকারী: <strong className="text-white">মো: আব্দুর রহমান</strong>
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleSaveChanges}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>পরিবর্তন সেভ করুন</span>
            </button>

            <button
              onClick={() => onNavigate('home')}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg border border-slate-700 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              <span>লাইভ সাইট দেখুন</span>
            </button>

            <button
              onClick={handleExportBackup}
              title="ওয়েবসাইটের ডেটা ব্যাকআপ ডাউনলোড করুন"
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg border border-slate-700 transition-all flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">ব্যাকআপ</span>
            </button>

            <button
              onClick={() => setResetConfirmOpen(true)}
              title="অরিজিনাল ডিফল্ট অবস্থায় ফিরিয়ে নিন"
              className="px-3 py-2 bg-slate-800 hover:bg-rose-900/50 text-slate-300 hover:text-rose-300 text-xs font-medium rounded-lg border border-slate-700 hover:border-rose-800 transition-all flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">রিসেট</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-3 py-2 bg-rose-600/90 hover:bg-rose-600 text-white text-xs font-semibold rounded-lg transition-all flex items-center gap-1 cursor-pointer ml-1"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">লগআউট</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Success Message Toast */}
      {saveSuccessMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span className="text-sm font-semibold">{saveSuccessMessage}</span>
        </div>
      )}

      {/* Reset Confirmation Modal */}
      {resetConfirmOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-200">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              সবকিছু অরিজিনাল অবস্থায় ফিরিয়ে নিতে চান?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              আপনার করা সকল পরিবর্তন মুছে গিয়ে ওয়েবসাইটের মূল ডিফল্ট ডাটা ফিরে আসবে। আপনি কি নিশ্চিত?
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setResetConfirmOpen(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg cursor-pointer"
              >
                বাতিল
              </button>
              <button
                onClick={handleConfirmReset}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-lg cursor-pointer shadow-xs"
              >
                হ্যাঁ, রিসেট করুন
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar Tabs */}
          <div className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-3 shadow-xs space-y-1 sticky top-20">
            <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              মেন্যু নির্বাচন করুন
            </div>

            <button
              onClick={() => setActiveTab('brand')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'brand'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Building className="w-4 h-4" />
              <span>ব্র্যান্ড ও সাধারণ তথ্য</span>
            </button>

            <button
              onClick={() => setActiveTab('contact')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'contact'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>যোগাযোগ ও সোশ্যাল</span>
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'services'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>সার্ভিসসমূহ ({draftServices.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('courses')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'courses'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>কোর্সসমূহ (ফ্রি ও পেইড)</span>
            </button>

            <button
              onClick={() => setActiveTab('pricing')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'pricing'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>প্রাইসিং প্ল্যান ({draftPricing.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('portfolio')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'portfolio'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <FolderKanban className="w-4 h-4" />
              <span>পোর্টফোলিও ও কৌশল</span>
            </button>

            <button
              onClick={() => setActiveTab('faq')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'faq'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>সাধারণ প্রশ্নাবলী (FAQ)</span>
            </button>

            <button
              onClick={() => setActiveTab('inbox')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'inbox'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Inbox className="w-4 h-4" />
                <span>গ্রাহক বার্তা ও লিডস</span>
              </div>
              {inquiries.length > 0 && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500 text-white">
                  {inquiries.length}
                </span>
              )}
            </button>

            <div className="pt-4 border-t border-slate-100 mt-4">
              <div className="bg-blue-50 border border-blue-100 p-3 rounded-xl text-[11px] text-blue-900 leading-relaxed">
                💡 <strong>টিপস:</strong> আপনি এখানে যা পরিবর্তন করবেন, তা সরাসরি ওয়েবসাইটে কার্যকর হবে। কাজ শেষে উপরের <strong>"পরিবর্তন সেভ করুন"</strong> বাটনে ক্লিক করুন।
              </div>
            </div>
          </div>

          {/* Right Editor Panels */}
          <div className="lg:col-span-9 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
            
            {/* ---------------- 1. BRAND TAB ---------------- */}
            {activeTab === 'brand' && (
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-bold text-slate-900">ব্র্যান্ড ও সাধারণ তথ্য এডিটর</h2>
                  <p className="text-xs text-slate-500 mt-1">আপনার ব্র্যান্ড নাম, ট্যাগলাইন এবং প্রতিষ্ঠাতা প্রোফাইল পরিবর্তন করুন।</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      ব্র্যান্ডের নাম (Brand Name)
                    </label>
                    <input
                      type="text"
                      value={draftBrand.brandName}
                      onChange={(e) => setDraftBrand({ ...draftBrand, brandName: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      ট্যাগলাইন (Tagline)
                    </label>
                    <input
                      type="text"
                      value={draftBrand.tagline}
                      onChange={(e) => setDraftBrand({ ...draftBrand, tagline: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    সাবটাইটেল / সারসংক্ষেপ (Subtitle)
                  </label>
                  <textarea
                    rows={2}
                    value={draftBrand.subtitle}
                    onChange={(e) => setDraftBrand({ ...draftBrand, subtitle: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    টার্গেট অডিয়েন্স / কাদের জন্য কাজ করেন
                  </label>
                  <textarea
                    rows={2}
                    value={draftBrand.targetAudience}
                    onChange={(e) => setDraftBrand({ ...draftBrand, targetAudience: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                  />
                </div>

                {/* Founder Details */}
                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider">
                    প্রতিষ্ঠাতা প্রোফাইল (Founder Profile)
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        প্রতিষ্ঠাতার নাম (Founder Name)
                      </label>
                      <input
                        type="text"
                        value={draftBrand.founder.name}
                        onChange={(e) =>
                          setDraftBrand({
                            ...draftBrand,
                            founder: { ...draftBrand.founder, name: e.target.value },
                          })
                        }
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        পদবি (Role / Title)
                      </label>
                      <input
                        type="text"
                        value={draftBrand.founder.role}
                        onChange={(e) =>
                          setDraftBrand({
                            ...draftBrand,
                            founder: { ...draftBrand.founder, role: e.target.value },
                          })
                        }
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      প্রতিষ্ঠাতা পরিচিতি ও বায়ো (Bangla Bio)
                    </label>
                    <textarea
                      rows={3}
                      value={draftBrand.founder.bengaliBio}
                      onChange={(e) =>
                        setDraftBrand({
                          ...draftBrand,
                          founder: { ...draftBrand.founder, bengaliBio: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleSaveChanges}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>সেভ করুন</span>
                  </button>
                </div>
              </div>
            )}

            {/* ---------------- 2. CONTACT TAB ---------------- */}
            {activeTab === 'contact' && (
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-bold text-slate-900">যোগাযোগ ও সোশ্যাল মিডিয়া এডিটর</h2>
                  <p className="text-xs text-slate-500 mt-1">ফোন নম্বর, হোয়াটসঅ্যাপ, ইমেইল এবং সোশ্যাল লিংক আপডেট করুন।</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      WhatsApp নম্বর
                    </label>
                    <input
                      type="text"
                      value={draftBrand.contact.whatsappNumber}
                      onChange={(e) =>
                        setDraftBrand({
                          ...draftBrand,
                          contact: { ...draftBrand.contact, whatsappNumber: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Telegram নম্বর
                    </label>
                    <input
                      type="text"
                      value={draftBrand.contact.telegramNumber}
                      onChange={(e) =>
                        setDraftBrand({
                          ...draftBrand,
                          contact: { ...draftBrand.contact, telegramNumber: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      সরাসরি কল নম্বর (Primary Call)
                    </label>
                    <input
                      type="text"
                      value={draftBrand.contact.optionalPhone}
                      onChange={(e) =>
                        setDraftBrand({
                          ...draftBrand,
                          contact: { ...draftBrand.contact, optionalPhone: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      অফিশিয়াল ইমেইল (Official Email)
                    </label>
                    <input
                      type="email"
                      value={draftBrand.contact.email}
                      onChange={(e) =>
                        setDraftBrand({
                          ...draftBrand,
                          contact: { ...draftBrand.contact, email: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider">
                    সোশ্যাল মিডিয়া প্রোফাইল লিংকস
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Facebook Page URL
                    </label>
                    <input
                      type="text"
                      value={draftBrand.socialLinks.facebook}
                      onChange={(e) =>
                        setDraftBrand({
                          ...draftBrand,
                          socialLinks: { ...draftBrand.socialLinks, facebook: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-600 font-mono text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Telegram Channel / Direct Link
                    </label>
                    <input
                      type="text"
                      value={draftBrand.socialLinks.telegram}
                      onChange={(e) =>
                        setDraftBrand({
                          ...draftBrand,
                          socialLinks: { ...draftBrand.socialLinks, telegram: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-600 font-mono text-xs"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleSaveChanges}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>সেভ করুন</span>
                  </button>
                </div>
              </div>
            )}

            {/* ---------------- 3. SERVICES TAB ---------------- */}
            {activeTab === 'services' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">সার্ভিসসমূহ এডিটর</h2>
                    <p className="text-xs text-slate-500 mt-1">
                      মোট {draftServices.length}টি সার্ভিস রয়েছে। নতুন সার্ভিস যোগ করতে বা কোনো সার্ভিস এডিট করতে পারবেন।
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const newId = `service-${Date.now()}`;
                      setDraftServices([
                        ...draftServices,
                        {
                          id: newId,
                          title: 'New Meta Advertising Service',
                          bengaliSubtitle: 'নতুন মেটা বিজ্ঞাপন সেবা',
                          shortDesc: 'Drive real results with tailored advertising operations.',
                          fullDesc: 'অনলাইন শপের জন্য প্রফিটেবল ক্যাম্পেইন ও লাভজনক বিজনেস স্ট্র্যাটেজি।',
                          deliverables: [
                            'ক্যাম্পেইন তৈরি ও সার্বক্ষণিক মনিটরিং',
                            'উইনিং অ্যাডে সঠিক বাজেট ডিস্ট্রিবিউশন',
                          ],
                          icon: 'Megaphone',
                        },
                      ]);
                    }}
                    className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Plus className="w-4 h-4" />
                    <span>নতুন সার্ভিস যোগ করুন</span>
                  </button>
                </div>

                <div className="space-y-6">
                  {draftServices.map((service, index) => (
                    <div
                      key={service.id}
                      className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50 space-y-4"
                    >
                      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                          সার্ভিস #{index + 1}
                        </span>
                        <button
                          onClick={() => {
                            if (draftServices.length <= 1) {
                              alert('কমপক্ষে একটি সার্ভিস রাখা আবশ্যক।');
                              return;
                            }
                            setDraftServices(draftServices.filter((_, i) => i !== index));
                          }}
                          className="text-rose-600 hover:text-rose-700 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>মুছে ফেলুন</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            বাংলা শিরোনাম (Bengali Title)
                          </label>
                          <input
                            type="text"
                            value={service.bengaliSubtitle}
                            onChange={(e) => {
                              const updated = [...draftServices];
                              updated[index].bengaliSubtitle = e.target.value;
                              setDraftServices(updated);
                            }}
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            ইংরেজি শিরোনাম (English Title)
                          </label>
                          <input
                            type="text"
                            value={service.title}
                            onChange={(e) => {
                              const updated = [...draftServices];
                              updated[index].title = e.target.value;
                              setDraftServices(updated);
                            }}
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          বাংলা বিবরণ (Full Bengali Description)
                        </label>
                        <textarea
                          rows={2}
                          value={service.fullDesc}
                          onChange={(e) => {
                            const updated = [...draftServices];
                            updated[index].fullDesc = e.target.value;
                            setDraftServices(updated);
                          }}
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                        />
                      </div>

                      {/* Deliverables */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          সুবিধাসমূহ / ডেলিভারেবলস (প্রতি লাইনে একটি)
                        </label>
                        {service.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2">
                            <input
                              type="text"
                              value={item}
                              onChange={(e) => {
                                const updated = [...draftServices];
                                updated[index].deliverables[dIdx] = e.target.value;
                                setDraftServices(updated);
                              }}
                              className="flex-1 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
                            />
                            <button
                              onClick={() => {
                                const updated = [...draftServices];
                                updated[index].deliverables = updated[index].deliverables.filter(
                                  (_, i) => i !== dIdx
                                );
                                setDraftServices(updated);
                              }}
                              className="text-slate-400 hover:text-rose-600 p-1 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                        <button
                          onClick={() => {
                            const updated = [...draftServices];
                            updated[index].deliverables.push('নতুন সুবিধা যোগ করুন');
                            setDraftServices(updated);
                          }}
                          className="text-blue-600 hover:text-blue-700 text-xs font-semibold flex items-center gap-1 cursor-pointer pt-1"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>আরেকটি পয়েন্ট যোগ করুন</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleSaveChanges}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>সেভ করুন</span>
                  </button>
                </div>
              </div>
            )}

            {/* ---------------- 4. COURSES TAB ---------------- */}
            {activeTab === 'courses' && (
              <div className="space-y-8">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-bold text-slate-900">কোর্স মডিউল ও সিলেবাস এডিটর</h2>
                  <p className="text-xs text-slate-500 mt-1">ফ্রি ও পেইড ৭টি মাস্টারক্লাস মডিউলের বিস্তারিত এডিট করুন।</p>
                </div>

                {/* Section A: Free Courses */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-emerald-700 uppercase tracking-wider">
                    ১০০% ফ্রি ফাউন্ডেশন কোর্সসমূহ ({draftFreeCourses.length}টি)
                  </h3>

                  {draftFreeCourses.map((course, idx) => (
                    <div key={course.id} className="border border-emerald-200/80 rounded-xl p-5 bg-emerald-50/20 space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            বাংলা শিরোনাম ({course.moduleNumber})
                          </label>
                          <input
                            type="text"
                            value={course.bengaliSubtitle}
                            onChange={(e) => {
                              const updated = [...draftFreeCourses];
                              updated[idx].bengaliSubtitle = e.target.value;
                              setDraftFreeCourses(updated);
                            }}
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            ইংরেজি শিরোনাম
                          </label>
                          <input
                            type="text"
                            value={course.title}
                            onChange={(e) => {
                              const updated = [...draftFreeCourses];
                              updated[idx].title = e.target.value;
                              setDraftFreeCourses(updated);
                            }}
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">বিবরণ</label>
                        <textarea
                          rows={2}
                          value={course.shortDesc}
                          onChange={(e) => {
                            const updated = [...draftFreeCourses];
                            updated[idx].shortDesc = e.target.value;
                            setDraftFreeCourses(updated);
                          }}
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Section B: Paid Courses (All 7 Modules) */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <h3 className="text-sm font-bold text-blue-700 uppercase tracking-wider">
                    পেইড মাস্টারক্লাস মডিউলসমূহ (মোট {draftPaidCourses.length}টি মডিউল)
                  </h3>

                  {draftPaidCourses.map((course, idx) => (
                    <div key={course.id} className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <span className="text-xs font-bold text-blue-600 uppercase">
                          {course.moduleNumber}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">
                          লেভেল: {course.level}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            বাংলা শিরোনাম
                          </label>
                          <input
                            type="text"
                            value={course.bengaliSubtitle}
                            onChange={(e) => {
                              const updated = [...draftPaidCourses];
                              updated[idx].bengaliSubtitle = e.target.value;
                              setDraftPaidCourses(updated);
                            }}
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            ইংরেজি শিরোনাম
                          </label>
                          <input
                            type="text"
                            value={course.title}
                            onChange={(e) => {
                              const updated = [...draftPaidCourses];
                              updated[idx].title = e.target.value;
                              setDraftPaidCourses(updated);
                            }}
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">বিবরণ</label>
                        <textarea
                          rows={2}
                          value={course.shortDesc}
                          onChange={(e) => {
                            const updated = [...draftPaidCourses];
                            updated[idx].shortDesc = e.target.value;
                            setDraftPaidCourses(updated);
                          }}
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleSaveChanges}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>সেভ করুন</span>
                  </button>
                </div>
              </div>
            )}

            {/* ---------------- 5. PRICING TAB ---------------- */}
            {activeTab === 'pricing' && (
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-bold text-slate-900">প্রাইসিং প্যাকেজ এডিটর</h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Starter, Growth ও Custom প্যাকেজের সুবিধা ও বিবরণ পরিবর্তন করুন।
                  </p>
                </div>

                <div className="space-y-6">
                  {draftPricing.map((plan, idx) => (
                    <div key={plan.id} className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50 space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <span className="text-sm font-bold text-slate-900">
                          {plan.name} Package
                        </span>
                        {plan.badge && (
                          <span className="text-[11px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                            {plan.badge}
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">প্যাকেজ নাম</label>
                          <input
                            type="text"
                            value={plan.name}
                            onChange={(e) => {
                              const updated = [...draftPricing];
                              updated[idx].name = e.target.value;
                              setDraftPricing(updated);
                            }}
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">উপযুক্ত কাদের জন্য</label>
                          <input
                            type="text"
                            value={plan.recommendedFor}
                            onChange={(e) => {
                              const updated = [...draftPricing];
                              updated[idx].recommendedFor = e.target.value;
                              setDraftPricing(updated);
                            }}
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">ট্যাগলাইন / সারসংক্ষেপ</label>
                        <input
                          type="text"
                          value={plan.tagline}
                          onChange={(e) => {
                            const updated = [...draftPricing];
                            updated[idx].tagline = e.target.value;
                            setDraftPricing(updated);
                          }}
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                        />
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          প্যাকেজের অন্তর্ভুক্ত সেবাসমূহ
                        </label>
                        {plan.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2">
                            <input
                              type="text"
                              value={feature}
                              onChange={(e) => {
                                const updated = [...draftPricing];
                                updated[idx].features[fIdx] = e.target.value;
                                setDraftPricing(updated);
                              }}
                              className="flex-1 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
                            />
                            <button
                              onClick={() => {
                                const updated = [...draftPricing];
                                updated[idx].features = updated[idx].features.filter((_, i) => i !== fIdx);
                                setDraftPricing(updated);
                              }}
                              className="text-slate-400 hover:text-rose-600 p-1 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                        <button
                          onClick={() => {
                            const updated = [...draftPricing];
                            updated[idx].features.push('নতুন ফিচার পয়েন্ট');
                            setDraftPricing(updated);
                          }}
                          className="text-blue-600 hover:text-blue-700 text-xs font-semibold flex items-center gap-1 cursor-pointer pt-1"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>আরেকটি ফিচার যোগ করুন</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleSaveChanges}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>সেভ করুন</span>
                  </button>
                </div>
              </div>
            )}

            {/* ---------------- 6. PORTFOLIO TAB ---------------- */}
            {activeTab === 'portfolio' && (
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-bold text-slate-900">পোর্টফোলিও ও কৌশল এডিটর</h2>
                  <p className="text-xs text-slate-500 mt-1">কেস স্টাডি ও ক্যাম্পেইন ফ্রেমওয়ার্ক কার্ডগুলো এডিট করুন।</p>
                </div>

                <div className="space-y-4">
                  {draftPortfolio.map((item, idx) => (
                    <div key={item.id} className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">ক্যাটাগরি</label>
                          <input
                            type="text"
                            value={item.category}
                            onChange={(e) => {
                              const updated = [...draftPortfolio];
                              updated[idx].category = e.target.value;
                              setDraftPortfolio(updated);
                            }}
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">শিরোনাম</label>
                          <input
                            type="text"
                            value={item.title}
                            onChange={(e) => {
                              const updated = [...draftPortfolio];
                              updated[idx].title = e.target.value;
                              setDraftPortfolio(updated);
                            }}
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">উদ্দেশ্য (Objective)</label>
                        <input
                          type="text"
                          value={item.objective}
                          onChange={(e) => {
                            const updated = [...draftPortfolio];
                            updated[idx].objective = e.target.value;
                            setDraftPortfolio(updated);
                          }}
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">বিবরণ (Description)</label>
                        <textarea
                          rows={2}
                          value={item.description}
                          onChange={(e) => {
                            const updated = [...draftPortfolio];
                            updated[idx].description = e.target.value;
                            setDraftPortfolio(updated);
                          }}
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleSaveChanges}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>সেভ করুন</span>
                  </button>
                </div>
              </div>
            )}

            {/* ---------------- 7. FAQ TAB ---------------- */}
            {activeTab === 'faq' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">সাধারণ প্রশ্নাবলী (FAQ) এডিটর</h2>
                    <p className="text-xs text-slate-500 mt-1">প্রশ্ন ও উত্তর সম্পাদনা করুন বা নতুন প্রশ্ন যোগ করুন।</p>
                  </div>
                  <button
                    onClick={() => {
                      setDraftFaq([
                        ...draftFaq,
                        {
                          id: `faq-${Date.now()}`,
                          category: 'Services',
                          question: 'New Question in English?',
                          bengaliQuestion: 'নতুন প্রশ্ন বাংলায়?',
                          answer: 'এখানে প্রশ্নের বিস্তারিত উত্তর লিখুন।',
                        },
                      ]);
                    }}
                    className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Plus className="w-4 h-4" />
                    <span>নতুন প্রশ্ন যোগ করুন</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {draftFaq.map((item, idx) => (
                    <div key={item.id} className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <span className="text-xs font-bold text-blue-600 uppercase">
                          প্রশ্ন #{idx + 1} ({item.category})
                        </span>
                        <button
                          onClick={() => {
                            setDraftFaq(draftFaq.filter((_, i) => i !== idx));
                          }}
                          className="text-rose-600 hover:text-rose-700 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>মুছে ফেলুন</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            বাংলা প্রশ্ন (Bengali Question)
                          </label>
                          <input
                            type="text"
                            value={item.bengaliQuestion || ''}
                            onChange={(e) => {
                              const updated = [...draftFaq];
                              updated[idx].bengaliQuestion = e.target.value;
                              setDraftFaq(updated);
                            }}
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            ইংরেজি প্রশ্ন (English Question)
                          </label>
                          <input
                            type="text"
                            value={item.question}
                            onChange={(e) => {
                              const updated = [...draftFaq];
                              updated[idx].question = e.target.value;
                              setDraftFaq(updated);
                            }}
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">উত্তর (Answer)</label>
                        <textarea
                          rows={3}
                          value={item.answer}
                          onChange={(e) => {
                            const updated = [...draftFaq];
                            updated[idx].answer = e.target.value;
                            setDraftFaq(updated);
                          }}
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleSaveChanges}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>সেভ করুন</span>
                  </button>
                </div>
              </div>
            )}

            {/* ---------------- 8. INBOX TAB ---------------- */}
            {activeTab === 'inbox' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">গ্রাহক বার্তা ও লিডস ইনবক্স</h2>
                    <p className="text-xs text-slate-500 mt-1">
                      ওয়েবসাইটের ফরম পূরণ করে আসা সকল কাস্টমার মেসেজ এখানে জমা হয়।
                    </p>
                  </div>
                  <button
                    onClick={loadInquiries}
                    className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>রিফ্রেশ করুন</span>
                  </button>
                </div>

                {loadingInquiries ? (
                  <div className="py-12 text-center text-slate-500 text-sm">
                    মেসেজ লোড হচ্ছে...
                  </div>
                ) : inquiries.length === 0 ? (
                  <div className="py-16 text-center border-2 border-dashed border-slate-200 rounded-2xl">
                    <Inbox className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-slate-700">কোনো নতুন বার্তা পাওয়া যায়নি</p>
                    <p className="text-xs text-slate-500 mt-1">ভিজিটররা ওয়েবসাইটে ইনকোয়ারি সাবমিট করলে এখানে দেখতে পাবেন।</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {inquiries.map((inq, idx) => (
                      <div
                        key={inq.id || idx}
                        className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 hover:bg-white transition-all shadow-2xs space-y-3"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                          <div>
                            <span className="font-bold text-slate-900 text-sm block">
                              {inq.name}
                            </span>
                            {inq.business_name && (
                              <span className="text-xs text-blue-600 font-medium">
                                প্রতিষ্ঠান: {inq.business_name}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] text-slate-400 font-mono">
                              {inq.created_at ? new Date(inq.created_at).toLocaleDateString() : 'Recent'}
                            </span>
                            {inq.phone && (
                              <a
                                href={`https://wa.me/88${inq.phone.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold rounded flex items-center gap-1"
                              >
                                <MessageCircle className="w-3 h-3" />
                                <span>WhatsApp চ্যাট</span>
                              </a>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-600">
                          <div>
                            <strong className="text-slate-700">ইমেইল:</strong> {inq.email || 'N/A'}
                          </div>
                          <div>
                            <strong className="text-slate-700">ফোন:</strong> {inq.phone || 'N/A'}
                          </div>
                          <div>
                            <strong className="text-slate-700">আগ্রহী সার্ভিস:</strong> {inq.service || 'N/A'}
                          </div>
                        </div>

                        <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-800 whitespace-pre-wrap leading-relaxed">
                          {inq.message}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};
