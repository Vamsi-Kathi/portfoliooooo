import React, { useState, useEffect } from 'react';

interface NavLinkProps {
  href: string;
  title: string;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, isActive }) => (
  <a className="group flex items-center py-3" href={href}>
    <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${isActive ? 'w-16 bg-slate-200' : ''}`}></span>
    <span className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${isActive ? 'text-slate-200' : ''}`}>{title}</span>
  </a>
);

interface HeaderProps {
    name: string;
    title: string;
    github: string;
    linkedin: string;
    portfolio: string;
}

const Header: React.FC<HeaderProps> = ({ name, title, github, linkedin, portfolio }) => {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'experience', 'education', 'projects', 'skills', 'achievements'];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const sectionId of sections.reverse()) {
                const sectionElement = document.getElementById(sectionId);
                if (sectionElement && scrollPosition >= sectionElement.offsetTop) {
                    setActiveSection(sectionId);
                    return;
                }
            }
             setActiveSection('about');
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
      { href: '#about', title: 'About' },
      { href: '#experience', title: 'Experience' },
      { href: '#education', title: 'Education' },
      { href: '#projects', title: 'Projects' },
      { href: '#skills', title: 'Skills' },
      { href: '#achievements', title: 'Achievements' },
    ];

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a href="/">{name}</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    {title}
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                   I build innovative software solutions that drive growth and enhance technological advancement.
                </p>
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        {navItems.map(item => (
                            <li key={item.title}>
                                <NavLink href={item.href} title={item.title} isActive={activeSection === item.title.toLowerCase()} />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div>
                 <a className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900" href="/Vamsi_Kathi_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
                    Download Résumé <i className="fa-solid fa-download ml-2"></i>
                </a>
                <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                    <li className="mr-5 text-xs shrink-0">
                        <a className="block hover:text-slate-200" href={github} target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)">
                            <span className="sr-only">GitHub</span>
                            <i className="fa-brands fa-github text-2xl transition-transform group-hover:scale-110"></i>
                        </a>
                    </li>
                    <li className="mr-5 text-xs shrink-0">
                        <a className="block hover:text-slate-200" href={linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)">
                            <span className="sr-only">LinkedIn</span>
                            <i className="fa-brands fa-linkedin text-2xl transition-transform group-hover:scale-110"></i>
                        </a>
                    </li>
                    <li className="mr-5 text-xs shrink-0">
                        <a className="block hover:text-slate-200" href={portfolio} target="_blank" rel="noreferrer noopener" aria-label="Portfolio (opens in a new tab)">
                            <span className="sr-only">Portfolio</span>
                            <i className="fa-solid fa-globe text-2xl transition-transform group-hover:scale-110"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;