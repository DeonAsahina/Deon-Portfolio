import { useState } from 'react';
import { initialProfileData, sampleProjects } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EditProfileModal } from './components/EditProfileModal';
import { CVModal } from './components/CVModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Project } from './types';

export function App() {
  const [profile, setProfile] = useState(initialProfileData);
  const [projects] = useState(sampleProjects);

  // Modals
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-700">
      {/* Navigation */}
      <Navbar
        profile={profile}
        onOpenEditModal={() => setIsEditModalOpen(true)}
        onOpenCVModal={() => setIsCVModalOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          profile={profile}
          onOpenCV={() => setIsCVModalOpen(true)}
          onOpenEditProfile={() => setIsEditModalOpen(true)}
        />

        {/* About Section */}
        <AboutSection profile={profile} />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Contact Section */}
        <ContactSection profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Modals */}
      {isEditModalOpen && (
        <EditProfileModal
          profile={profile}
          onSave={(updated) => {
            setProfile(updated);
            setIsEditModalOpen(false);
          }}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}

      {isCVModalOpen && (
        <CVModal
          profile={profile}
          onClose={() => setIsCVModalOpen(false)}
        />
      )}

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
