import React from 'react';
import { SkillItem } from '../types';
import { Bot, Palette, CheckCircle2 } from 'lucide-react';

interface SkillsSectionProps {
  skills: SkillItem[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-widest uppercase">
            MY TOOLS & APPLICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Tools & Applications
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Main applications I use for Discord bot development and graphic design.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {skills.map((skill, index) => {
            const isBotDesigner = skill.name.toLowerCase().includes('bot designer') || skill.name.toLowerCase().includes('bdfd');
            return (
              <div
                key={index}
                className="p-6 rounded-2xl border border-gray-100 bg-slate-50/50 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {isBotDesigner ? <Bot className="w-6 h-6" /> : <Palette className="w-6 h-6" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                          {skill.name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {isBotDesigner ? 'Bot Development Tool' : 'Mobile Design Tool'}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden mt-2">
                    <div
                      className="bg-blue-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-start gap-2 text-xs text-gray-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    {isBotDesigner
                      ? 'Building moderation, economy, leveling, ticket, giveaway, and utility commands with BDScript.'
                      : 'Crafting creative posters, banners, logos & 3D typography'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
