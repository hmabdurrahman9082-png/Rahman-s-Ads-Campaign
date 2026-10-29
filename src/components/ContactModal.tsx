import React, { useState, useEffect } from 'react';
import { X, Mail, Check, ExternalLink, MessageCircle, Send, Loader2, ShieldCheck } from 'lucide-react';
import { submitContactInquiry } from '../lib/supabase';
import { useLanguage } from '../context/LanguageContext';
import { useSiteData } from '../context/SiteDataContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
  defaultCategory?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = '',
}) => {
  const { language, t } = useLanguage();
  const { brandConfig } = useSiteData();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [service, setService] = useState(defaultTopic || 'Meta Ads Strategy');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedChoice, setSubmittedChoice] = useState<'pending' | 'ready'>('pending');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultTopic) {
      setService(defaultTopic);
    }
  }, [defaultTopic]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmittedChoice('pending');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const cleanWhatsApp = brandConfig.contact.whatsappNumber ? brandConfig.contact.whatsappNumber.replace(/[^0-9]/g, '') : '';

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = language === 'bn' ? 'অনুগ্রহ করে আপনার নাম লিখুন।' : 'Full name is required.';
    if (!email.trim()) {
      errs.email = language === 'bn' ? 'ইমেইল আবশ্যক।' : 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = language === 'bn' ? 'সঠিক ইমেইল লিখুন।' : 'Valid email is required.';
    }
    if (!phone.trim()) {
      errs.phone = language === 'bn' ? 'ফোন বা WhatsApp নম্বরটি লিখুন।' : 'Phone / WhatsApp is required.';
    } else if (phone.trim().length < 6) {
      errs.phone = language === 'bn' ? 'সঠিক নম্বর লিখুন।' : 'Please enter a valid phone number.';
    }
    if (!message.trim()) {
      errs.message = language === 'bn' ? 'আপনার বার্তা লিখুন।' : 'Please describe your request.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await submitContactInquiry({
        name,
        email,
        phone,
        business_name: businessName,
        service,
        message,
        source: 'modal',
      });
    } catch (err) {
      console.error('Modal submit error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmittedChoice('ready');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white border border-slate-200 rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              {t('contact.title')}
            </h3>
            <p className="text-xs text-slate-500">
              {language === 'bn' ? 'রহমান্স অ্যাডস ক্যাম্পেইন ডিরেক্ট সাপোর্ট' : "RAHMAN'S ADS CAMPAIGN Direct Support"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submittedChoice === 'pending' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  {t('contact.name')} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'bn' ? 'আপনার পূর্ণ নাম' : 'e.g. Tanvir Ahmed'}
                  className={`w-full px-3.5 py-2 bg-white border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 ${
                    errors.name ? 'border-rose-500' : 'border-slate-300'
                  }`}
                />
                {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    {t('contact.email')} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@business.com"
                    className={`w-full px-3.5 py-2 bg-white border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 ${
                      errors.email ? 'border-rose-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    {t('contact.phone')} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="018XXXXXXXX"
                    className={`w-full px-3.5 py-2 bg-white border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 ${
                      errors.phone ? 'border-rose-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Business Name & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    {t('contact.business')}
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder={language === 'bn' ? 'ব্যবসার নাম' : 'Business name'}
                    className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    {t('contact.service')}
                  </label>
                  <input
                    type="text"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  {t('contact.message')} <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={language === 'bn' ? 'আপনার প্রশ্ন বা বিস্তারিত তথ্য লিখুন...' : 'How can we help your business?'}
                  className={`w-full px-3.5 py-2 bg-white border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 ${
                    errors.message ? 'border-rose-500' : 'border-slate-300'
                  }`}
                />
                {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
              </div>

              {/* Transparency Notice */}
              <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t('contact.transparency')}</span>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 cursor-pointer"
                >
                  {language === 'bn' ? 'বাতিল' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
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
              </div>

            </form>
          ) : (
            /* Submitted Success State */
            <div className="space-y-5 text-center py-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <h4 className="text-lg font-bold text-slate-900">
                  {language === 'bn' ? 'মেসেজটি সফলভাবে পৌঁছেছে!' : 'Inquiry Received!'}
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  {t('contact.success')}
                </p>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl max-w-sm mx-auto space-y-2 text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>{language === 'bn' ? 'WhatsApp-এ সরাসরি কথা বলুন' : 'Immediate Response on WhatsApp'}</span>
                </div>
                <a
                  href={`https://wa.me/88${cleanWhatsApp}?text=${encodeURIComponent(
                    `Hello Rahman's Ads Campaign,\nName: ${name}\nPhone: ${phone}\nTopic: ${service}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>{language === 'bn' ? 'WhatsApp মেসেজ পাঠান' : 'Open WhatsApp Chat'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  {language === 'bn' ? 'বন্ধ করুন' : 'Done'}
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
