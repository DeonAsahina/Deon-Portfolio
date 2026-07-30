import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-gray-100 my-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-20 shadow-sm">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
            {project.category}
          </span>
          <button
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 rounded-xl transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Project Image */}
        <div className="aspect-video bg-gray-100 relative overflow-hidden shrink-0">
          <img
            src={project?.image || (project as any)?.imageUrl || 'https://images.unsplash.com/photo-1614680376593-902f749f71c3?auto=format&fit=crop&q=80&w=800'}
            alt={project?.title || 'Project'}
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://images.unsplash.com/photo-1614680376593-902f749f71c3?auto=format&fit=crop&q=80&w=800';
            }}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8 space-y-6 text-left overflow-y-auto">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Tech stack badges */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {(project.tags || []).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-lg border border-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links (Hanya tombol Tutup) */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-end">
            <button
              onClick={onClose}
              className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-800 font-bold text-xs rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <X className="w-4 h-4" />
              <span>Tutup / Close</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
