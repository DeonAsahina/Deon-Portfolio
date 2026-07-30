import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Discord Bot', 'Graphic Design'];

  const filteredProjects = (
    activeCategory === 'All'
      ? (projects || [])
      : (projects || []).filter((p) => p && p.category === activeCategory)
  ).filter(Boolean);

  return (
    <section id="projects" className="py-20 bg-slate-50/60 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-widest uppercase">
            MY WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Here are some of the Discord bots and graphic design projects I've created using Bot Designer for Discord and PixelLab.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Thumbnail Container */}
              <div className="relative overflow-hidden aspect-video bg-gray-100">
                <img
                  src={project?.image || (project as any)?.imageUrl || ''}
                  alt={project?.title || 'Project'}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="px-4 py-2 bg-white/90 hover:bg-white text-gray-900 text-xs font-semibold rounded-lg backdrop-blur-sm flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all"
                  >
                    <Eye className="w-4 h-4 text-blue-600" />
                    <span>View Details</span>
                  </button>
                </div>
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-blue-600 text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                  {project.category}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {(project.tags || []).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 group/btn"
                  >
                    <span>Read Case Study</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>

                  <div className="flex items-center space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-gray-400 hover:text-gray-700 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectProject(project);
                      }}
                      className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
