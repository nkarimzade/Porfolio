import { Sun, Moon, ArrowRight, Github, } from 'lucide-react';
import { FaMailBulk } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";

interface SidebarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const skills = [
  'JavaScript',
  'React',
  'Next.js',
  'React Native',
  'Animations',
  'Performance',
];

function Sidebar({ darkMode, toggleTheme }: SidebarProps) {
  return (
    <aside className="xl:sticky mx-auto relative sm:overflow-y-auto xl:top-0 xl:h-dvh flex flex-col justify-between py-6 px-4 sm:py-10 sm:px-10 bg-white dark:bg-[#101012] transition-colors duration-300">
      <div className="space-y-6 max-w-[420px]">
        {/* Header with Logo and Status */}
        <div className="flex items-center sm:gap-4 gap-3">
          <div className="logo">
            <img style={{ width: "50px", height: "50px " }} src="/logo.jpeg" alt="" />
          </div>
          <div className="logo">
            <img 
              style={{ width: "110px", height: "60px", marginTop: "10px" }} 
              src={darkMode ? "/logo_two.png" : "/logo_three.png"} 
              alt="" 
            />
          </div>

          <div className="inline-flex ml-2 items-center gap-2 px-3 py-3 rounded-lg bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200/70 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-800/40 w-max">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75  " />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="sm:text-sm text-xs font-medium whitespace-nowrap">
              Available <span className="sm:inline-block">for hire</span>
            </span>
          </div>
          <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center p-2 min-w-10 min-h-10 max-w-10 max-h-10 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-sm transition-colors ml-4"
            aria-label="Toggle theme"
            title={darkMode ? 'Light theme' : 'Dark theme'}
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Main Content */}
        <div  style={{marginTop:"100px"}} className="space-y-3 mt-[max(30px,calc(30vh-12rem))] xl:mt-[max(30px,calc(36vh-14rem))]">
          <h2 className="text-xl font-medium leading-tight">
            Websites that takes startups from zero to epic.
          </h2>
          <p className="text-mm font-medium text-black/70 dark:text-white/70">
            I'm Nasib Karimzade 20, a software engineer with 3+ years of
            experience helping companies create web and mobile products. High
            impact interfaces and performance-driven applications.
          </p>
          <div className="flex items-center gap-3 mt-6 ">
            <a 
              href="https://wa.link/gh52qp"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 h-12 px-4 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium shadow-sm hover:opacity-90 transition-opacity mt-8"
            >
              Work with me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-3">
          <h3 style={{marginTop:"60px"}} className="font-medium">What I'm best at...</h3>
          <div className="grid grid-cols-2 gap-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="text-sm px-3 py-3 rounded-lg bg-[#f7f7f7] dark:bg-white/10 dark:text-white/90 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Resume */}
        <div className="relative">
          <button className="font-medium underline cursor-pointer hover:opacity-70 transition-opacity">
            Resume
          </button>
        </div>
      </div>

      {/* Contact Links */}
      <div className="max-w-[420px] xl:mt-0 mt-6">
        <div className="flex flex-row items-center sm:justify-between sm:gap-4 gap-2 sm:text-sm text-xs">
          <a
            href="mailto:muradbalazade@yahoo.com"
            className="inline-flex text-xs items-center gap-2 px-3 py-2 rounded-full bg-black/5 text-black/70 ring-1 ring-black/10 hover:bg-black/10 hover:ring-black/20 dark:bg-white/10 dark:text-white/70 dark:ring-white/15 dark:hover:bg-white/15 transition-colors"
          >
            <FaMailBulk className="w-3.5 h-3.5" />
            <span>nesib@nabusoft.com</span>
          </a>
          <a
            href="https://github.com/nkarimzade"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex text-xs items-center gap-2 px-3 py-2 rounded-full ring-1 ring-black/10 bg-black/5 hover:bg-black/10 hover:ring-black/20 dark:ring-white/15 dark:bg-white/10 dark:hover:bg-white/15 transition-colors"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/nesib-kerimzade-7902352a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex text-xs items-center gap-2 px-3 py-2 rounded-full ring-1 ring-black/10 bg-black/5 hover:bg-black/10 hover:ring-black/20 dark:ring-white/15 dark:bg-white/10 dark:hover:bg-white/15 transition-colors"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <TfiLinkedin className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
