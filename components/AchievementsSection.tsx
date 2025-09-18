import React from 'react';
import type { Achievement } from '../types';

interface AchievementsSectionProps {
  achievements: Achievement[];
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements }) => {
  return (
    <section id="achievements" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Achievements and Certifications">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Achievements & Certifications</h2>
      </div>
      <div>
        <ul className="space-y-4">
          {achievements.map((ach, index) => (
            <li key={index} className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                 <i className="fa-solid fa-award text-teal-300 text-lg"></i>
              </div>
              <p className="font-medium text-slate-300">{ach.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AchievementsSection;