import React from 'react';
import { X, Bot, Image as ImageIcon, CheckCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 flex flex-col">
        
        {/* Modal Header Image */}
        <div className="relative aspect-video bg-slate-100 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-gray-900 shadow-md">
              {project.categoryLabel}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Key Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-gray-100 text-xs">
            {project.commandsCount && (
              <div>
                <span className="text-gray-400 block font-medium">Jumlah Perintah</span>
                <span className="font-bold text-gray-800 text-sm">{project.commandsCount}+ Commands</span>
              </div>
            )}
            {project.canvasSize && (
              <div>
                <span className="text-gray-400 block font-medium">Resolusi Canvas</span>
                <span className="font-bold text-gray-800 text-sm">{project.canvasSize}</span>
              </div>
            )}
            <div>
              <span className="text-gray-400 block font-medium">Tahun Pengerjaan</span>
              <span className="font-bold text-gray-800 text-sm">{project.date}</span>
            </div>
          </div>

          {/* Features list */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-gray-900">Fitur & Keunggulan Proyek:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-2 flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
