import { useState, useEffect } from 'react';
import { ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { EditProfileModal } from './components/EditProfileModal';

import {
  initialProfileData,
  initialSkills,
  initialProjects,
  initialExperiences,
  initialEducations,
} from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [profile, setProfile] = useState(initialProfileData);

  const [skills] = useState(initialSkills);
  const [projects] = useState(initialProjects);
  const [experiences] = useState(initialExperiences);
  const [educations] = useState(initialEducations);

  // Clear any legacy localStorage cached profile to prevent blank screen errors from bad cached state
  useEffect(() => {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('portfolio_profile')) {
        localStorage.removeItem(key);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenCV={() => setIsCVModalOpen(true)}
        onOpenEditProfile={() => setIsEditProfileOpen(true)}
      />

      <main className="relative">
        <Hero
          profile={profile}
          onOpenCV={() => setIsCVModalOpen(true)}
          setActiveSection={setActiveSection}
        />

        <AboutSection profile={profile} />

        <SkillsSection skills={skills} />

        <ProjectsSection
          projects={projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <ContactSection profile={profile} />
      </main>

      <Footer profile={profile} />

      {/* CV Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        profile={profile}
        experiences={experiences}
        educations={educations}
        skills={skills}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        profile={profile}
        onSave={(updatedProfile) => setProfile(updatedProfile)}
      />
    </div>
  );
}
