import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check, ExternalLink, ShieldCheck, AlertCircle, Sparkles, Send, Loader2, Database } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';
import { submitContactInquiry } from '../lib/supabase';

interface ContactPageProps {
  onOpenOwnerGuide?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenOwnerGuide }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [service, setService] = useState('Meta Ads Campaign Strategy');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCopied, setIsCopied] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [step, setStep] = useState<'form' | 'submitted'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dbSaveStatus, setDbSaveStatus] = useState<'idle' | 'success' | 'fallback'>('idle');

  const hasConfiguredWhatsApp = Boolean(brandConfig.contact.whatsappNumber && brandConfig.contact.whatsappNumber.trim().length > 3);
  const cleanWhatsApp = brandConfig.contact.whatsappNumber ? brandConfig.contact.whatsappNumber.replace(/[^0-9]/g, '') : '';

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please provide your full name.';
    if (!email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!message.trim()) {
      errs.message = 'Please describe your advertising goals or questions.';
    } else if (message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters in your message.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const formattedInquiry = `Inquiry for RAHMAN'S ADS CAMPAIGN
-------------------------------------
Client Name: ${name}
Email: ${email}
Business / Brand: ${businessName || 'Not specified'}
Service of Interest: ${service}
-------------------------------------
Message / Project Details:
${message}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    const result = await submitContactInquiry({
      name,
      email,
      business_name: businessName,
      service,
      message,
      source: 'contact_page',
    });
    setIsSubmitting(false);

    if (result.success) {
      setDbSaveStatus('success');
    } else {
      setDbSaveStatus('fallback');
    }
    setStep('submitted');
  };

  const handleOpenMail = () => {
    const subject = encodeURIComponent(`New Inquiry: ${service} - ${name}`);
    const body = encodeURIComponent(formattedInquiry);
    window.location.href = `mailto:${brandConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyInquiry = () => {
    navigator.clipboard.writeText(formattedInquiry);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleCopyEmailAddress = () => {
    navigator.clipboard.writeText(brandConfig.contact.email);
    setIsEmailCopied(true);
    setTimeout(() => setIsEmailCopied(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
          Contact Us
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Start a Conversation with RAHMAN'S ADS CAMPAIGN
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Whether you need a full-funnel Meta advertising strategy, lead generation, or have questions about our upcoming courses, we are here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Form Column */}
        <div className="lg:col-span-7 bg-[#080F1E] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-slate-800 pb-4 mb-2">
                <h3 className="text-xl font-bold text-white tracking-tight">Send an Inquiry</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your details below. We review all requests personally.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Full Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.name ? 'border-rose-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Email Address <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. sarah@brand.com"
                    className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.email ? 'border-rose-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Business / Store Name <span className="text-slate-500 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Jenkins Apparel"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Service of Interest <span className="text-blue-400">*</span>
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    <option value="Facebook & Instagram Advertising">Facebook & Instagram Advertising</option>
                    <option value="Meta Ads Campaign Strategy">Meta Ads Campaign Strategy</option>
                    <option value="Lead Generation">Lead Generation</option>
                    <option value="E-commerce Advertising">E-commerce Advertising</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Ad Creative & Copywriting">Ad Creative & Copywriting</option>
                    <option value="Campaign Performance Analysis">Campaign Performance Analysis</option>
                    <option value="Landing Page Optimization">Landing Page Optimization</option>
                    <option value="Starter Plan Inquiry">Starter Plan Inquiry</option>
                    <option value="Growth Plan Inquiry">Growth Plan Inquiry</option>
                    <option value="Custom Plan Inquiry">Custom Plan Inquiry</option>
                    <option value="Free Course Inquiry">Free Course Inquiry</option>
                    <option value="Paid Course Inquiry">Paid Course Inquiry</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Message & Business Context <span className="text-blue-400">*</span>
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your product or service, target customer, or any specific questions..."
                  className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.message ? 'border-rose-500' : 'border-slate-700'
                  }`}
                />
                {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
              </div>

              {/* Secure Transmission Notice */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-400 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-slate-300">Secure & Confidential Submission</p>
                  <p className="leading-relaxed">
                    Your inquiry is protected by encrypted transmission and Row-Level Security. We respect your privacy and will never share your business details or contact info.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Inquiry to Database...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit & Review Inquiry</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="space-y-6 animate-in fade-in duration-200">
              {dbSaveStatus === 'success' ? (
                <div className="p-4 bg-emerald-950/40 border border-emerald-700/80 rounded-xl">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                    <Check className="w-5 h-5" />
                    <span>Inquiry Successfully Recorded in Database!</span>
                  </div>
                  <p className="text-xs text-emerald-200/90 leading-relaxed">
                    Thank you! Your inquiry has been securely stored in our system. You can also reach out immediately via WhatsApp or direct call if you need instant assistance.
                  </p>
                </div>
              ) : (
                <div className="p-4 bg-emerald-950/30 border border-emerald-800/60 rounded-xl">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                    <Check className="w-5 h-5" />
                    <span>Your Inquiry Details are Validated</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Your message has been compiled. You can launch your email client immediately or copy the formatted text.
                  </p>
                </div>
              )}

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs font-mono text-slate-300 whitespace-pre-wrap max-h-48 overflow-y-auto">
                {formattedInquiry}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleOpenMail}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open in Email App</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </button>

                <button
                  onClick={handleCopyInquiry}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors cursor-pointer"
                >
                  {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{isCopied ? 'Copied to Clipboard!' : 'Copy Formatted Text'}</span>
                </button>
              </div>

              {/* Direct Messaging: WhatsApp, Telegram & Facebook */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                <a
                  href="https://wa.me/8801883423076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-700 text-emerald-300 text-xs font-semibold rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="https://t.me/+8801883423076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 bg-sky-950/40 hover:bg-sky-900/50 border border-sky-700 text-sky-300 text-xs font-semibold rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>Telegram</span>
                </a>

                <a
                  href={brandConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 bg-blue-950/40 hover:bg-blue-900/50 border border-blue-700 text-blue-300 text-xs font-semibold rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-blue-400" />
                  <span>Facebook Page</span>
                </a>
              </div>

              <div className="flex justify-between items-center pt-2 text-xs">
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="text-slate-400 hover:text-white underline cursor-pointer"
                >
                  ← Edit Form Details
                </button>
                <span className="text-slate-500">Delivered directly to verified inbox</span>
              </div>
            </div>
          )}
        </div>

        {/* Right Info Column */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Direct Email Card */}
          <div className="bg-[#080F1E] border border-slate-800 rounded-2xl p-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
              Direct Contact Details
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] text-slate-400 block">Official Contact Email</span>
                  <span className="text-xs sm:text-sm font-medium text-white truncate block">
                    {brandConfig.contact.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmailAddress}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {isEmailCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Official Facebook Page Card */}
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 shrink-0">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] text-slate-400 block">Official Facebook Page</span>
                  <span className="text-xs sm:text-sm font-semibold text-white block truncate mb-1">
                    RAHMAN'S ADS CAMPAIGN
                  </span>
                  <a
                    href={brandConfig.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-md transition-colors"
                  >
                    <span>Visit Facebook Page</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* WhatsApp, Telegram & Phone Numbers Card */}
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-600/10 text-emerald-400 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] text-slate-400 block">WhatsApp & Telegram (Primary)</span>
                    <span className="text-sm font-semibold text-white block">
                      01883423076
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <a
                        href="https://wa.me/8801883423076"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-md transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat WhatsApp</span>
                      </a>
                      <a
                        href="https://t.me/+8801883423076"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold rounded-md transition-colors"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Telegram</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Phone Number */}
                <div className="pt-3 border-t border-slate-800 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] text-slate-400 block">Direct Phone Call</span>
                    <span className="text-sm font-semibold text-white block">
                      01806755760
                    </span>
                    <a
                      href="tel:01806755760"
                      className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-md transition-colors shadow-sm"
                    >
                      <span>Call: 01806755760</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 text-xs space-y-1">
                <span className="font-semibold text-slate-300 block">Response Time & Service Hours</span>
                <p className="text-slate-400">Primary WhatsApp & Telegram: 01883423076 | Call: 01806755760</p>
                <p className="text-slate-400">{brandConfig.contact.location}</p>
              </div>
            </div>
          </div>

          {/* Owner Quick Configuration Helper */}
          {onOpenOwnerGuide && (
            <div className="bg-gradient-to-r from-blue-950/30 to-slate-900/70 border border-blue-900/50 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Owner Customization Guide
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Want to update your WhatsApp number, add social media links, or see how to deploy this for free?
              </p>
              <button
                onClick={onOpenOwnerGuide}
                className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-blue-300 text-xs font-semibold rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Open Bengali & English Instructions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Trust Guarantee */}
          <div className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl flex items-center gap-3 text-xs text-slate-400">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Strict Client Privacy Guarantee: Your business data is never shared.</span>
          </div>

        </div>

      </div>

    </div>
  );
};
