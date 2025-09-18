import React from 'react';

interface HobbiesSectionProps {
  hobbies: string[];
}

const HobbiesSection: React.FC<HobbiesSectionProps> = ({ hobbies }) => {
  return (
    <section id="hobbies" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Hobbies">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Hobbies</h2>
      </div>
      <div>
        <div className="flex flex-wrap">
          {hobbies.map((hobby, index) => (
            <div key={index} className="mr-1.5 mt-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
              {hobby}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
