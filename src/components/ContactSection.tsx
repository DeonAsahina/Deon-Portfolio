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

  const contactList = [
    {
      id: 'email',
      name: 'Email Address',
      value: profile.email || 'deon.dev@example.com',
      subtitle: 'Kirim Pesan / Inquiries',
      color: 'bg-blue-50 border-blue-100 text-blue-600',
      badgeColor: 'bg-blue-600 text-white hover:bg-blue-700',
      icon: Mail,
      link: `mailto:${profile.email || 'deon.dev@example.com'}`,
      actionLabel: 'Kirim Email',
      isExternal: true,
    },
    {
      id: 'telegram',
      name: 'Telegram',
      value: profile.telegram || '@deon_dev',
      subtitle: 'Direct Message & Fast Chat',
      color: 'bg-sky-50 border-sky-100 text-sky-600',
      badgeColor: 'bg-sky-500 text-white hover:bg-sky-600',
      icon: Send,
      link: telegramUrl,
      actionLabel: 'Chat di Telegram',
      isExternal: true,
    },
    {
      id: 'discord',
      name: 'Discord Username',
      value: profile.discord || 'deon_dev',
      subtitle: 'Add Username & Direct Message',
      color: 'bg-indigo-50 border-indigo-100 text-indigo-600',
      badgeColor: 'bg-indigo-600 text-white hover:bg-indigo-700',
      icon: MessageSquare,
      link: null,
      actionLabel: 'Salin Username',
      isExternal: false,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Hubungi Saya
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Tertarik membuat bot Discord (BDFD) custom atau butuh desain grafis PixelLab? Silakan hubungi saya melalui kontak di bawah ini.
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
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${c.color}`}>
                      <IconComp className="w-6 h-6" />
                    </div>

                    <button
                      onClick={() => handleCopy(c.value, c.id)}
                      className="text-xs font-medium text-gray-500 hover:text-gray-800 bg-gray-50 hover:bg-gray-100 px-2.5 py-1.5 rounded-lg border border-gray-200 transition-colors flex items-center gap-1"
                      title="Salin Kontak"
                    >
                      {isCopied ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600 font-semibold">Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1">{c.name}</h3>
                  <p className="text-xs text-gray-500 mb-3 font-medium">{c.subtitle}</p>
                  
                  <div className="bg-gray-50 rounded-xl px-3.5 py-2.5 border border-gray-100 font-mono text-sm text-gray-800 break-all select-all font-semibold">
                    {c.value}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  {c.link ? (
                    <a
                      href={c.link}
                      target={c.isExternal ? '_blank' : '_self'}
                      rel={c.isExternal ? 'noopener noreferrer' : ''}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 shadow-sm ${c.badgeColor}`}
                    >
                      <span>{c.actionLabel}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      onClick={() => handleCopy(c.value, c.id)}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 shadow-sm ${c.badgeColor}`}
                    >
                      <span>{isCopied ? 'Tersalin ke Clipboard!' : c.actionLabel}</span>
                      <Copy className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Availability Banner */}
        <div className="mt-12 text-center bg-blue-50/70 border border-blue-100 rounded-2xl p-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Status Komisi Saat Ini</span>
          </div>
          <p className="text-gray-700 font-medium text-base">
            {profile.availability || 'Terbuka untuk Komisi Bot BDFD & Desain PixelLab'}
          </p>
        </div>

      </div>
    </section>
  );
};
