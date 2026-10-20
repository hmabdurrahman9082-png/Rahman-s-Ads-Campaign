import React, { useState, useEffect } from 'react';
import { X, Mail, Copy, Check, ExternalLink, MessageCircle, AlertCircle, Send, Loader2, ShieldCheck } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';
import { submitContactInquiry } from '../lib/supabase';

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
  defaultCategory = 'General Inquiry',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [service, setService] = useState(defaultTopic || 'Meta Ads Strategy');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [submittedChoice, setSubmittedChoice] = useState<'pending' | 'ready'>('pending');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dbSaveStatus, setDbSaveStatus] = useState<'idle' | 'success' | 'fallback'>('idle');

  useEffect(() => {
    if (defaultTopic) {
      setService(defaultTopic);
    }
    if (isOpen) {
      setSubmittedChoice('pending');
      setCopied(false);
      setDbSaveStatus('idle');
    }
  }, [defaultTopic, defaultCategory, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please provide your name.';
    if (!email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!message.trim()) {
      errs.message = 'Please write a brief message or describe your project.';
    } else if (message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const formattedInquiryText = `Inquiry for RAHMAN'S ADS CAMPAIGN
-------------------------------------
Name: ${name}
Email: ${email}
Business: ${businessName || 'Not specified'}
Service / Interest: ${service}
-------------------------------------
Message:
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
      source: 'modal',
    });
    setIsSubmitting(false);

    if (result.success) {
      setDbSaveStatus('success');
    } else {
      setDbSaveStatus('fallback');
    }
    setSubmittedChoice('ready');
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(`Inquiry: ${service} - from ${name}`);
    const body = encodeURIComponent(formattedInquiryText);
    window.location.href = `mailto:${brandConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedInquiryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const hasConfiguredWhatsApp = Boolean(brandConfig.contact.whatsappNumber && brandConfig.contact.whatsappNumber.trim().length > 3);
  const cleanWhatsApp = brandConfig.contact.whatsappNumber ? brandConfig.contact.whatsappNumber.replace(/[^0-9]/g, '') : '';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#091120] border border-slate-700 rounded-xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-1">
            Direct Communication
          </span>
          <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Contact RAHMAN'S ADS CAMPAIGN
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Discuss your advertising requirements or course questions. We respond within 24 hours.
          </p>
        </div>

        {submittedChoice === 'pending' ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Full Name <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.name ? 'border-rose-500' : 'border-slate-700'
                  }`}
                />
                {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Email Address <span className="text-blue-400">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. name@company.com"
                  className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? 'border-rose-500' : 'border-slate-700'
                  }`}
                />
                {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Business / Store Name <span className="text-slate-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Acme Retail"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Service / Topic of Interest
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Facebook & Instagram Advertising">Facebook & Instagram Advertising</option>
                  <option value="Meta Ads Campaign Strategy">Meta Ads Campaign Strategy</option>
                  <option value="Lead Generation Funnel">Lead Generation Funnel</option>
                  <option value="E-commerce Advertising">E-commerce Advertising</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Ad Creative & Copywriting">Ad Creative & Copywriting</option>
                  <option value="Campaign Performance Analysis">Campaign Performance Analysis</option>
                  <option value="Landing Page Optimization">Landing Page Optimization</option>
                  <option value="Starter Plan Inquiry">Starter Plan Inquiry</option>
                  <option value="Growth Plan Inquiry">Growth Plan Inquiry</option>
                  <option value="Custom Plan Inquiry">Custom Plan Inquiry</option>
                  <option value="Free Course Inquiries">Free Course Inquiries</option>
                  <option value="Paid Course Inquiries">Paid Course Inquiries</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Message / Campaign Goals <span className="text-blue-400">*</span>
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your business niche, target goals, or questions..."
                className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.message ? 'border-rose-500' : 'border-slate-700'
                }`}
              />
              {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
            </div>

            {/* Security notice */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-3 text-xs text-slate-400 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Encrypted & protected with Supabase Row Level Security. Your business details remain strictly private and accessible only to agency management.
              </span>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed rounded-lg transition-colors cursor-pointer flex items-center gap-2 shadow-md"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting to Database...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Proceed to Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-5 animate-in fade-in duration-200">
            {dbSaveStatus === 'success' ? (
              <div className="p-4 bg-emerald-950/40 border border-emerald-700/80 rounded-lg">
                <h4 className="text-sm font-semibold text-emerald-300 mb-1 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Inquiry Saved to Database Successfully!</span>
                </h4>
                <p className="text-xs text-emerald-200/90 leading-relaxed">
                  Thank you! Your request is stored safely in our system. You can also reach out via WhatsApp or email for an immediate response:
                </p>
              </div>
            ) : (
              <div className="p-4 bg-blue-950/30 border border-blue-800/60 rounded-lg">
                <h4 className="text-sm font-semibold text-blue-300 mb-1 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Your Inquiry is Ready</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Choose how you would like to deliver your inquiry to Rahman:
                </p>
              </div>
            )}

            {/* Preview text */}
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-slate-300 whitespace-pre-wrap max-h-36 overflow-y-auto">
              {formattedInquiryText}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleOpenMailto}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Email App</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </button>

              <button
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Formatted Text'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <a
                href={`https://wa.me/8801883423076?text=${encodeURIComponent(formattedInquiryText)}`}
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

            <div className="p-2.5 bg-slate-900/60 border border-slate-800 rounded-lg text-center text-xs text-slate-400">
              <span>Direct Call: <strong className="text-white">01883423076</strong> | Call: <a href="tel:01806755760" className="text-white hover:text-blue-400 underline font-bold font-mono">01806755760</a></span>
            </div>

            <div className="pt-2 flex justify-between items-center text-xs text-slate-500">
              <button
                type="button"
                onClick={() => setSubmittedChoice('pending')}
                className="text-slate-400 hover:text-white underline cursor-pointer"
              >
                Edit Message
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-slate-400 hover:text-white cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
