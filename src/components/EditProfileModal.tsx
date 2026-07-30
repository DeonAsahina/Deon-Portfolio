import React, { useState } from 'react';
import { X, Save } from 'lucide-react';
import { ProfileData } from '../types';

interface EditProfileModalProps {
  profile: ProfileData;
  onSave: (updated: ProfileData) => void;
  onClose: () => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  profile,
  onSave,
  onClose,
}) => {
  const [formData, setFormData] = useState<ProfileData>({ ...profile });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <h3 className="font-bold text-gray-900 text-base">Edit Informasi Portofolio</h3>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">Nama Lengkap</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full mt-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">Gelar / Subtitle</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full mt-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">Bio Ringkas</label>
            <textarea
              rows={3}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full mt-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">URL Foto Profil Avatar</label>
            <input
              type="text"
              value={formData.avatarUrl}
              onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
              className="w-full mt-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 outline-none"
            />
          </div>

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
                placeholder="@deon_dev"
                value={formData.telegram || ''}
                onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                className="w-full mt-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-700 uppercase">Discord Tag / Username</label>
              <input
                type="text"
                placeholder="deon_dev"
                value={formData.discord || ''}
                onChange={(e) => setFormData({ ...formData, discord: e.target.value })}
                className="w-full mt-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">Status Ketersediaan</label>
            <input
              type="text"
              value={formData.availability}
              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
              className="w-full mt-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-blue-600 outline-none"
            />
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-800"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center gap-1.5 shadow-sm"
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
