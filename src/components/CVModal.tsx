import React from 'react';
import { X, Download, Printer, Bot, Image } from 'lucide-react';
import { ProfileData } from '../types';

interface CVModalProps {
  profile: ProfileData;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ profile, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 flex flex-col">
        
        {/* Header toolbar */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <h3 className="font-bold text-gray-900 text-sm sm:text-base">Curriculum Vitae (CV)</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Cetak / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Preview Content */}
        <div className="p-8 space-y-8 print:p-0">
          
          {/* Header info */}
          <div className="border-b border-gray-200 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black text-gray-900">{profile.name}</h1>
              <p className="text-sm font-semibold text-blue-600 mt-0.5">{profile.title}</p>
            </div>
            <div className="text-xs text-gray-500 space-y-1">
              <p>Email: {profile.email}</p>
              {profile.telegram && <p>Telegram: {profile.telegram}</p>}
              {profile.discord && <p>Discord: {profile.discord}</p>}
            </div>
          </div>

          {/* Ringkasan Profesional */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">RINGKASAN PROFESIONAL</h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Keahlian Utama */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">KEAHLIAN UTAMA</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-gray-100 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-gray-900">
                  <Bot className="w-4 h-4 text-blue-600" />
                  <span>BDFD Bot Development</span>
                </div>
                <p className="text-gray-600">Bot Logic, Variable Storage, Embeds, Auto Moderation, RPG & Economy Engine.</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-gray-100 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-gray-900">
                  <Image className="w-4 h-4 text-purple-600" />
                  <span>PixelLab Graphic Design</span>
                </div>
                <p className="text-gray-600">E-Sports Poster, Mascot Logo, Banner, Layout Typography, Mobile Vector Design.</p>
              </div>
            </div>
          </div>

          {/* Pengalaman / Proyek */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">PENGALAMAN PROYEK Showcased</h2>
            <div className="space-y-2 text-xs text-gray-700">
              <div className="border-l-2 border-blue-600 pl-3 py-1 space-y-0.5">
                <p className="font-bold text-gray-900">Aegis Security & Economy Discord Bot (BDFD)</p>
                <p className="text-gray-500">120+ custom commands, sistem tiket & moderasi otomatis.</p>
              </div>
              <div className="border-l-2 border-purple-600 pl-3 py-1 space-y-0.5">
                <p className="font-bold text-gray-900">Cyberpunk Game Tournament Poster (PixelLab)</p>
                <p className="text-gray-500">Manipulasi pencahayaan & komposisi visual HD 4K.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-end bg-slate-50 gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-800"
          >
            Tutup
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Simpan PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
};
