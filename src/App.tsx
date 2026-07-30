import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { EditProfileModal } from './components/EditProfileModal';

import {
  initialProfileData,
  initialSkills,
  initialProjects,
} from './data/portfolioData';

import { ProjectItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [profile, setProfile] = useState(initialProfileData);

  const [skills] = useState(initialSkills);
  const [projects] = useState(initialProjects);
  useEffect(() => {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('portfolio_profile')) {
        localStorage.removeItem(key);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-700">
      
      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        profileName={profile.name}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero profile={profile} />

        {/* About Me Section */}
        <AboutSection
          profile={profile}
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

      {/* Project Details Case Study Modal */}
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
