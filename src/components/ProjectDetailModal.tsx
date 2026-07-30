import React from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 flex flex-col">
        
        {/* Top Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
            {project.category}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Image */}
        <div className="aspect-video bg-gray-100 relative overflow-hidden">
          <img
            src={project?.image || (project as any)?.imageUrl || ''}
            alt={project?.title || 'Project'}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 text-left">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
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

          {/* Action Links */}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (project.liveUrl === '#') {
                  e.preventDefault();
                  alert('Demo preview mode active!');
                }
              }}
              className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs rounded-xl shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              <span>Live Preview</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium text-xs rounded-xl border border-gray-200 flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
