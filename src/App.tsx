import React, { useState, useEffect } from 'react';
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

import {
  initialProfileData,
  initialSkills,
  initialProjects,
  initialExperiences,
  initialEducations,
} from './data/portfolioData';

import { ProfileData, ProjectItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [profile, setProfile] = useState<ProfileData>(() => {
    const saved = localStorage.getItem('portfolio_profile_v12');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.name && parsed.name !== 'Rizky Pratama') {
          return parsed;
        }
      } catch (e) {
        console.error('Failed to parse saved profile:', e);
      }
    }
    return initialProfileData;
  });

  const [skills] = useState(initialSkills);
  const [projects] = useState(initialProjects);
  const [experiences] = useState(initialExperiences);
  const [educations] = useState(initialEducations);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Sync profile to localStorage when edited
  useEffect(() => {
    localStorage.setItem('portfolio_profile_v12', JSON.stringify(profile));
  }, [profile]);

  const handleSaveProfile = (updatedProfile: ProfileData) => {
    setProfile(updatedProfile);
  };

  const handleResetProfile = () => {
    localStorage.removeItem('portfolio_profile_v12');
    localStorage.removeItem('portfolio_profile_v11');
    localStorage.removeItem('portfolio_profile_v10');
    localStorage.removeItem('portfolio_profile_v9');
    localStorage.removeItem('portfolio_profile_v8');
    localStorage.removeItem('portfolio_profile_v7');
    localStorage.removeItem('portfolio_profile_v6');
    localStorage.removeItem('portfolio_profile_v5');
    localStorage.removeItem('portfolio_profile_v4');
    localStorage.removeItem('portfolio_profile_v3');
    localStorage.removeItem('portfolio_profile_v2');
    localStorage.removeItem('portfolio_profile');
    setProfile(initialProfileData);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-700">
      
      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenEditModal={() => setIsEditModalOpen(true)}
        onOpenCVModal={() => setIsCVModalOpen(true)}
        profileName={profile.name}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero profile={profile} onOpenEditProfile={() => setIsEditModalOpen(true)} />

        {/* About Me Section */}
        <AboutSection
          profile={profile}
          onOpenCVModal={() => setIsCVModalOpen(true)}
        />

        {/* Skills Section */}
        <SkillsSection skills={skills} />

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

      {/* Customize Profile Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        onResetDefault={handleResetProfile}
      />

      {/* CV Resume Preview Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        profile={profile}
        experiences={experiences}
        educations={educations}
      />

      {/* Project Details Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
