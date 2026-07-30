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

import { ProfileData, SkillItem, ProjectItem } from './types';

export function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    const saved = localStorage.getItem('deon_portfolio_profile');
    return saved ? JSON.parse(saved) : initialProfileData;
  });

  const [skills, setSkills] = useState<SkillItem[]>(() => {
    const saved = localStorage.getItem('deon_portfolio_skills');
    return saved ? JSON.parse(saved) : initialSkills;
  });

  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    const saved = localStorage.getItem('deon_portfolio_projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });

  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    localStorage.setItem('deon_portfolio_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('deon_portfolio_skills', JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem('deon_portfolio_projects', JSON.stringify(projects));
  }, [projects]);

  const handleSaveProfile = (updatedProfile: ProfileData) => {
    setProfile(updatedProfile);
  };

  const handleResetData = () => {
    if (window.confirm('Apakah kamu yakin ingin mengembalikan semua data profil & portofolio ke awal?')) {
      localStorage.removeItem('deon_portfolio_profile');
      localStorage.removeItem('deon_portfolio_skills');
      localStorage.removeItem('deon_portfolio_projects');
      setProfile(initialProfileData);
      setSkills(initialSkills);
      setProjects(initialProjects);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-700">
      <Navbar
        profile={profile}
        onOpenCV={() => setIsCVOpen(true)}
        onOpenEditProfile={() => setIsEditProfileOpen(true)}
        onResetData={handleResetData}
      />

      <main>
        <Hero profile={profile} onOpenEditProfile={() => setIsEditProfileOpen(true)} />
        <AboutSection profile={profile} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} onSelectProject={setSelectedProject} />
        <ContactSection profile={profile} />
      </main>

      <Footer profile={profile} />

      {/* Modals */}
      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
      />

      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
        profile={profile}
        skills={skills}
        experiences={initialExperiences}
        educations={initialEducations}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
