import React from 'react';
import type { Experience, Project, Education, Achievement } from './types';
import Header from './components/Header';
import About from './components/About';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import AchievementsSection from './components/AchievementsSection';
import Contact from './components/Contact';

const contactInfo = {
  name: "Vamsi Kathi",
  title: "Aspiring Software Engineer",
  location: "Kothapalli Village, West Godavari (D), AP- 534462",
  phone: "+91 93468 58920",
  email: "vamsikathi16@gmail.com",
  linkedin: "https://www.linkedin.com/in/vamsi-kathi",
  github: "https://github.com/Vamsi-Kathi",
  portfolio: "https://vamsi-kathi.github.io/portfolio/"
};

const careerObjective = "Aspiring Software Engineer with a strong foundation in web development, backend engineering, and cloud computing. Passionate about building scalable and secure applications while continuously learning and innovating. Seeking a challenging role to apply my technical expertise and problem-solving skills in a dynamic environment.";

const experiences: Experience[] = [
  {
    role: "Software Development Intern",
    company: "Demy Software Solutions",
    period: "Aug 2024 – Feb 2025",
    description: [
      "Developed and maintained responsive, user-friendly web applications using HTML, CSS, JavaScript, and Bootstrap.",
      "Improved website performance and UI/UX by implementing modern design principles and best practices.",
      "Collaborated with backend developers to integrate REST APIs and optimize application functionality."
    ]
  }
];

const projects: Project[] = [
    {
      name: "AI-Powered Education Platform",
      description: "Built an application for students for their better career, using Python, MySQL, HTML, CSS, JavaScript, Bootstrap, and AI-ML.",
      technologies: ["Python", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "AI/ML"],
      url: "https://github.com/Vamsi-Kathi/Ai_Powered_Education"
    },
    {
      name: "Food Delivery App Backend",
      description: "Developed a robust backend system for a food delivery application. Features RESTful APIs for user management, order processing, and restaurant data handling.",
      technologies: ["Node.js", "Express", "REST API", "SQL"],
      url: "https://github.com/Vamsi-Kathi/Food-Delivery-App-Backend"
    },
    {
      name: "Omni food Website",
      description: "Developed a food delivery service website with an emphasis on UI/UX design, ensuring seamless user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      url: "https://vamsi-kathi.github.io/omnifood"
    },
     {
      name: "Web-Based Image Editor",
      description: "A client-side image editing tool built with vanilla JavaScript. Allows users to apply filters, rotate, and adjust brightness/contrast directly in the browser.",
      technologies: ["HTML", "CSS", "JavaScript"],
      url: "https://github.com/Vamsi-Kathi/Image-Editor"
    },
    {
      name: "Personal Portfolio Website",
      description: "Built a responsive personal portfolio to showcase skills, projects, and achievements using HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      url: "https://github.com/Vamsi-Kathi/Vamsi-Kathi.github.io"
    }
];

const educationData: Education[] = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Audisankara Institute of Technology, Gudur",
    period: "Aug 2021 – July 2025",
    cgpa: "8.5/10"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College, Eluru",
    period: "2019 – 2021",
    cgpa: "8.8/10"
  },
  {
    degree: "SSC (10th Standard)",
    institution: "ZPHS Kothapalli School, Eluru",
    period: "2018 – 2019",
    cgpa: "9.2/10"
  }
];

const skills = {
  "Programming Languages": ["Java", "Python", "SQL", "JavaScript", "HTML", "CSS"],
  "Frameworks & Tools": ["Vercel", "Bootstrap", "Git", "GitHub", "Postman"],
  "Databases": ["SQL"],
  "Web Development": ["Responsive Design", "RESTful APIs", "UI/UX Principles"]
};

const achievements: Achievement[] = [
    { title: "1st Place – HackWithNellore (Sep 2024)" },
    { title: "3rd Prize – HackZ (Nov 2024)" },
    { title: "Finalist – Hack24 (Nov 2024)" },
    { title: "Data Analysis with Python – NPTEL (2023)" },
    { title: "Python with OOPS – Value Laden (2022)" },
    { title: "SDLC Certification – NSDC (2023)" },
];


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header name={contactInfo.name} title={contactInfo.title} github={contactInfo.github} linkedin={contactInfo.linkedin} portfolio={contactInfo.portfolio} />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About content={careerObjective} />
            <ExperienceSection experiences={experiences} />
            <EducationSection education={educationData} />
            <ProjectsSection projects={projects} />
            <SkillsSection skills={skills} />
            <AchievementsSection achievements={achievements} />
            <Contact email={contactInfo.email} phone={contactInfo.phone} location={contactInfo.location} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;