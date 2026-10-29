import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check, ExternalLink, ShieldCheck, AlertCircle, Sparkles, Send, Loader2, Database } from 'lucide-react';
import { submitContactInquiry } from '../lib/supabase';
import { useLanguage } from '../context/LanguageContext';
import { useSiteData } from '../context/SiteDataContext';

interface ContactPageProps {
  onOpenOwnerGuide?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const { language, t } = useLanguage();
  const { brandConfig } = useSiteData();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [service, setService] = useState('Meta Ads Campaign Strategy');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCopied, setIsCopied] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [step, setStep] = useState<'form' | 'submitted'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dbSaveStatus, setDbSaveStatus] = useState<'idle' | 'success' | 'fallback'>('idle');

  const cleanWhatsApp = brandConfig.contact.whatsappNumber ? brandConfig.contact.whatsappNumber.replace(/[^0-9]/g, '') : '';

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = language === 'bn' ? 'অনুগ্রহ করে আপনার পুরো নাম লিখুন।' : 'Please provide your full name.';
    if (!email.trim()) {
      errs.email = language === 'bn' ? 'অনুগ্রহ করে ইমেইল অ্যাড্রেস প্রদান করুন।' : 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = language === 'bn' ? 'একটি সঠিক ইমেইল অ্যাড্রেস লিখুন।' : 'Please enter a valid email address.';
    }
    if (!phone.trim()) {
      errs.phone = language === 'bn' ? 'অনুগ্রহ করে ফোন বা WhatsApp নম্বরটি লিখুন।' : 'Please provide your phone or WhatsApp number.';
    } else if (phone.trim().length < 6) {
      errs.phone = language === 'bn' ? 'একটি সঠিক নম্বর প্রদান করুন।' : 'Please enter a valid phone number.';
    }
    if (!message.trim()) {
      errs.message = language === 'bn' ? 'অনুগ্রহ করে আপনার বার্তা বা ব্যবসার তথ্য লিখুন।' : 'Please describe your advertising goals or questions.';
    } else if (message.trim().length < 5) {
      errs.message = language === 'bn' ? 'কমপক্ষে ৫ অক্ষরের একটি বিবরণ লিখুন।' : 'Please provide at least 5 characters in your message.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const formattedInquiry = `Inquiry for RAHMAN'S ADS CAMPAIGN
-----------------------------
From: ${name}
Email: ${email}
Phone: ${phone}
Business/Store: ${businessName || 'N/A'}
Service / Course: ${service}

Details:
${message}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setDbSaveStatus('idle');

    try {
      const result = await submitContactInquiry({
        name,
        email,
        phone,
        business_name: businessName,
        service,
        message,
        source: 'contact_page',
      });

      if (result.success) {
        setDbSaveStatus('success');
      } else {
        console.warn('Inquiry save status:', result.error);
        setDbSaveStatus('fallback');
      }
    } catch (err) {
      console.error('Contact inquiry error:', err);
      setDbSaveStatus('fallback');
    } finally {
      setIsSubmitting(false);
      setStep('submitted');
    }
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(formattedInquiry);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(brandConfig.contact.email);
    setIsEmailCopied(true);
    setTimeout(() => setIsEmailCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
          {language === 'bn' ? 'যোগাযোগ ও আলোচনা' : 'Get In Touch'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          {t('contact.title')}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Communication Channels */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
              {language === 'bn' ? 'সরাসরি যোগাযোগের মাধ্যম' : 'Direct Channels'}
            </h3>

            {/* Direct WhatsApp Callout */}
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                    {language === 'bn' ? 'সবচেয়ে দ্রুত রেসপন্স' : 'Fastest Response'}
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    WhatsApp: 01883423076
                  </span>
                </div>
              </div>
              
              <a
                href={`https://wa.me/88${cleanWhatsApp}?text=${encodeURIComponent("Hello Rahman's Ads Campaign, I would like to consult with you regarding advertising services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>{language === 'bn' ? 'সরাসরি WhatsApp-এ চ্যাট করুন' : 'Start WhatsApp Conversation'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Official Facebook Page */}
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                    {language === 'bn' ? 'অফিশিয়াল পেজ' : 'Official Page'}
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    RAHMAN'S ADS CAMPAIGN
                  </span>
                </div>
              </div>
              <a
                href={brandConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>{language === 'bn' ? 'ফেসবুক পেজ ভিজিট করুন' : 'Visit Facebook Page'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Calling & Email */}
            <div className="space-y-3 text-xs text-slate-600">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                <div>
                  <span className="text-slate-500 block text-[11px] font-semibold">{language === 'bn' ? 'সরাসরি কল করুন:' : 'Direct Phone Call:'}</span>
                  <span className="font-mono text-sm font-bold text-slate-900">01806755760 / 01883423076</span>
                </div>
                <a
                  href="tel:01806755760"
                  className="px-3 py-1.5 bg-blue-50 text-blue-700 font-semibold rounded-md border border-blue-200 hover:bg-blue-100"
                >
                  {language === 'bn' ? 'কল দিন' : 'Call'}
                </a>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                <div>
                  <span className="text-slate-500 block text-[11px] font-semibold">{language === 'bn' ? 'অফিশিয়াল ইমেইল:' : 'Official Email:'}</span>
                  <span className="font-mono text-xs font-medium text-slate-900">{brandConfig.contact.email}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-[11px] bg-white text-slate-700 border border-slate-200 rounded hover:bg-slate-100 cursor-pointer"
                >
                  {isEmailCopied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>

            {/* Transparency Note */}
            <div className="pt-2 flex items-start gap-2.5 text-xs text-slate-500 border-t border-slate-100">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                {t('contact.transparency')}
              </span>
            </div>

          </div>

        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
            
            {step === 'form' ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-4 mb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {language === 'bn' ? 'মেসেজ ফর্ম' : 'Campaign Inquiry Form'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {language === 'bn' ? 'সবগুলো প্রয়োজনীয় তথ্য দিয়ে ফর্মটি পূরণ করুন।' : 'Please fill in the required fields so we can evaluate your business needs.'}
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {t('contact.name')} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === 'bn' ? 'আপনার পূর্ণ নাম' : 'e.g. Tanvir Ahmed'}
                    className={`w-full px-4 py-2.5 bg-white border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 transition-colors ${
                      errors.name ? 'border-rose-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                </div>

                {/* Grid for Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      {t('contact.email')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@business.com"
                      className={`w-full px-4 py-2.5 bg-white border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      {t('contact.phone')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="018XXXXXXXX"
                      className={`w-full px-4 py-2.5 bg-white border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 transition-colors ${
                        errors.phone ? 'border-rose-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {t('contact.business')}
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder={language === 'bn' ? 'যেমন: আরবান ফ্যাশন শপ' : 'e.g. Apex Clothing Brand'}
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 transition-colors"
                  />
                </div>

                {/* Service of Interest */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {t('contact.service')}
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 transition-colors"
                  >
                    <option value="Meta Ads Campaign Strategy">Meta Ads Campaign Strategy (ফেসবুক ও ইনস্টাগ্রাম অ্যাডস)</option>
                    <option value="E-Commerce Sales Growth">E-Commerce Sales Scaling (ইকমার্স সেলস বৃদ্ধি)</option>
                    <option value="High-Ticket Lead Generation">High-Ticket Lead Generation (কোয়ালিটি লিড সংগ্রহ)</option>
                    <option value="Pixel & GTM Server-Side CAPI">Pixel & Server-Side Tracking (GTM CAPI)</option>
                    <option value="Free Course: Environment Setup">Free Course 01: Setup & Ad Research</option>
                    <option value="Free Course: Customer Analysis">Free Course 02: Customer Analysis</option>
                    <option value="Paid Program: Complete 7 Modules">Paid Mastery: Complete 7-Module Program</option>
                    <option value="General Consultation">General Discussion / অন্যান্য</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {t('contact.message')} <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={language === 'bn' ? 'আপনার ব্যবসা, প্রোডাক্ট, বর্তমান সমস্যা বা প্রত্যাশা সম্পর্কে লিখুন...' : 'Tell us about your business, past ad performance, and current goals...'}
                    className={`w-full px-4 py-2.5 bg-white border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 transition-colors ${
                      errors.message ? 'border-rose-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{t('contact.submitting')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t('contact.submit')}</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Submission Confirmation State */
              <div className="space-y-6 text-center py-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {language === 'bn' ? 'মেসেজটি সফলভাবে জমা হয়েছে!' : 'Inquiry Submitted Successfully!'}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    {t('contact.success')}
                  </p>
                </div>

                {/* WhatsApp Direct Action */}
                <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl max-w-md mx-auto space-y-3 text-left">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>{language === 'bn' ? 'দ্রুত উত্তরের জন্য WhatsApp-এ মেসেজ পাঠান' : 'Want an immediate response?'}</span>
                  </div>
                  <a
                    href={`https://wa.me/88${cleanWhatsApp}?text=${encodeURIComponent(
                      `Hello Rahman's Ads Campaign,\n\nI just submitted an inquiry on your website.\nName: ${name}\nPhone: ${phone}\nTopic: ${service}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>{language === 'bn' ? 'WhatsApp-এ সরাসরি কথা বলুন' : 'Send WhatsApp Message'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setStep('form');
                      setName('');
                      setEmail('');
                      setPhone('');
                      setBusinessName('');
                      setMessage('');
                    }}
                    className="text-xs text-blue-600 hover:underline cursor-pointer"
                  >
                    {language === 'bn' ? 'আরেকটি মেসেজ পাঠান' : 'Submit another inquiry'}
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
