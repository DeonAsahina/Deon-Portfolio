import React, { useState, useEffect } from 'react';
import { X, Save, RefreshCw, Upload } from 'lucide-react';
import { ProfileData } from '../types';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSave: (updatedProfile: ProfileData) => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
}) => {
  const [formData, setFormData] = useState<ProfileData>(profile);

  useEffect(() => {
    setFormData(profile);
  }, [profile, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, avatarUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden my-8 border border-gray-100">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-lg font-bold text-gray-900">Edit Profil & Kontak</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Avatar / Foto */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Foto Profil
            </label>
            <div className="flex items-center gap-4">
              <img
                src={formData.avatarUrl}
                alt="Avatar Preview"
                className="w-16 h-16 rounded-xl object-cover border border-gray-200"
              />
              <div className="space-y-2 flex-1">
                <input
                  type="text"
                  placeholder="URL Gambar (https://...)"
                  value={formData.avatarUrl}
                  onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:border-blue-600 outline-none"
                />
                <label className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-semibold cursor-pointer transition-colors">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Unggah dari Perangkat</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Info Utama */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-gray-700 uppercase">Nama Lengkap</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full mt-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 outline-none"
                required
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-700 uppercase">Judul / Profesi</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full mt-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 outline-none"
                required
              />
            </div>
          </div>

          {/* Tagline */}
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">Tagline Ringkas</label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full mt-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 outline-none"
            />
          </div>

          {/* Tentang Saya (About Text) */}
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">Deskripsi "Tentang Saya"</label>
            <textarea
              rows={4}
              value={formData.aboutText}
              onChange={(e) => setFormData({ ...formData, aboutText: e.target.value })}
              className="w-full mt-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 outline-none"
            />
          </div>

          {/* Kontak Information */}
          <div className="space-y-4 pt-2 border-t border-gray-100">
            <h4 className="font-bold text-gray-900 text-sm">Informasi Kontak & Sosmed</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-700 uppercase">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full mt-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 uppercase">Telegram Username / Link</label>
                <input
                  type="text"
                  placeholder="@username"
                  value={formData.telegram || ''}
                  onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                  className="w-full mt-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 uppercase">Discord Username</label>
                <input
                  type="text"
                  placeholder="username_discord"
                  value={formData.discord || ''}
                  onChange={(e) => setFormData({ ...formData, discord: e.target.value })}
                  className="w-full mt-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 uppercase">Status Komisi</label>
                <input
                  type="text"
                  value={formData.availability}
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  className="w-full mt-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50"
            >
              Batal
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Perubahan</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
