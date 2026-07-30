import React, { useState } from 'react';
import { Mail, Send, MessageSquare, CheckCircle2, Copy, ExternalLink } from 'lucide-react';
import { ProfileData } from '../types';

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const telegramHandle = (profile.telegram || '@deon_dev').replace(/^@/, '');
  const telegramUrl = telegramHandle.startsWith('http')
    ? telegramHandle
    : `https://t.me/${telegramHandle}`;

  const discordTag = profile.discord || 'deon_dev';

  const contactList = [
    {
      id: 'email',
      name: 'Email Address',
      value: profile.email || 'deon.dev@example.com',
      subtitle: 'Official Inquiries & Projects',
      color: 'bg-blue-50 border-blue-100 text-blue-600',
      badgeColor: 'bg-blue-600 text-white hover:bg-blue-700',
      icon: Mail,
      link: `mailto:${profile.email}`,
      actionLabel: 'Kirim Email',
      isExternal: false,
    },
    {
      id: 'telegram',
      name: 'Telegram',
      value: profile.telegram || '@deon_dev',
      subtitle: 'Direct Messaging & Updates',
      color: 'bg-sky-50 border-sky-100 text-sky-600',
      badgeColor: 'bg-sky-600 text-white hover:bg-sky-700',
      icon: Send,
      link: telegramUrl,
      actionLabel: 'Chat di Telegram',
      isExternal: true,
    },
    {
      id: 'discord',
      name: 'Discord',
      value: discordTag,
      subtitle: 'BDFD Bot & Graphic Support',
      color: 'bg-indigo-50 border-indigo-100 text-indigo-600',
      badgeColor: 'bg-indigo-600 text-white hover:bg-indigo-700',
      icon: MessageSquare,
      link: '#',
      actionLabel: 'Copy Username',
      isExternal: false,
      isDiscord: true,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50/70 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-widest uppercase">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Contact Me
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Ingin membuat bot Discord kustom (BDFD) atau pesanan desain grafis PixelLab? Hubungi saya secara langsung melalui salah satu platform di bawah ini.
          </p>
        </div>

        {/* Contacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactList.map((c) => {
            const IconComp = c.icon;
            const isCopied = copiedIndex === c.id;

            return (
              <div
                key={c.id}
                className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className={`p-3 rounded-xl border ${c.color} shrink-0`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900">{c.name}</h3>
                      <p className="text-xs text-gray-500">{c.subtitle}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(c.value, c.id)}
                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors shrink-0 flex items-center gap-1 text-xs font-medium"
                    title={`Salin ${c.name}`}
                  >
                    {isCopied ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold text-[11px]">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="hidden sm:inline text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Display Value */}
                <div className="bg-slate-50 p-3 rounded-xl border border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-800 tracking-wide font-mono truncate">
                    {c.value}
                  </span>
                </div>

                {/* Action Buttons */}
                <div>
                  {c.isDiscord ? (
                    <button
                      onClick={() => handleCopy(c.value, c.id)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-sm ${c.badgeColor}`}
                    >
                      {isCopied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span>{isCopied ? 'Username Tersalin!' : 'Copy Discord Username'}</span>
                    </button>
                  ) : (
                    <a
                      href={c.link}
                      target={c.isExternal ? '_blank' : '_self'}
                      rel={c.isExternal ? 'noopener noreferrer' : ''}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-sm ${c.badgeColor}`}
                    >
                      <span>{c.actionLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Status Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{profile.availability || 'Available for Commissions'}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
