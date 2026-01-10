import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Nabusoft ',
    subtitle: 'Software Development Company',
    description: 'Software Development Company',
    link: null,
    image: '/proje/nabusoft.png',
    gradient: 'from-zinc-800 via-neutral-900 to-black',
    accentColor: 'text-amber-400',
    isComingSoon: false,
  },
  {
    title: 'Krisoft',
    subtitle: 'Software Development Company',
    description: 'Software Development Company',
    link: null,
    image: '/proje/krisoft.png',
    gradient: 'from-zinc-800 via-neutral-900 to-black',
    accentColor: 'text-amber-400',
    isComingSoon: false,
  },
  {
    title: 'Çankırı Gazozu',
    subtitle: 'Official Çankırı Gazozu Website ',
    description: 'Çankırı Gazozu website for university students',
    link: 'https://cankirigazozu.com.tr',
    image: '/proje/cgazoz.png',
    gradient: 'from-slate-800 via-slate-900 to-black',
    accentColor: 'text-emerald-400',
    isComingSoon: false,
  },
  {
    title: 'Hazimiye Gazozcusu ',
    subtitle: 'Official Hazimiye Gazozcusu Website ',
    description: 'Hazimiye Gazozcusu website for university students',
    link: 'https://hazimiye.com.tr',
    image: '/proje/hazimiye.png',
    gradient: 'from-slate-800 via-slate-900 to-black',
    accentColor: 'text-emerald-400',
    isComingSoon: false,
  },
  {
    title: 'Krio Exhange ',
    subtitle: 'Official Krio Exhange Website ',
    description: 'Krio Exhange website for university students',
    link: 'https://krioexchange.com.tr',
    image: '/proje/krio.png',
    gradient: 'from-slate-800 via-slate-900 to-black',
    accentColor: 'text-emerald-400',
    isComingSoon: false,
  },
  {
    title: 'Evo Academy',
    subtitle: 'Online Education',
    description: 'Innovative teaching platform',
    link: 'https://evoacademy.az',
    image: '/projects/evo-academy.jpg',
    gradient: 'from-purple-900 via-violet-950 to-black',
    accentColor: 'text-purple-400',
    isComingSoon: false,
  },
  {
    title: 'DDW',
    subtitle: 'Digital Diagnostics World',
    description: 'Medical diagnostics web application',
    link: 'https://ddw.az',
    image: '/projects/ddw.jpg',
    gradient: 'from-blue-900 via-indigo-950 to-black',
    accentColor: 'text-blue-400',
    isComingSoon: false,
  },
  {
    title: 'Unical Clinic',
    subtitle: 'Healthcare',
    description: 'Modern medical clinic website',
    link: 'https://unikalklinika.az',
    image: '/projects/unical-clinic.jpg',
    gradient: 'from-cyan-900 via-teal-950 to-black',
    accentColor: 'text-cyan-400',
    isComingSoon: false,
  },
  {
    title: 'Cheyni',
    subtitle: 'Festival Cinema',
    description: 'Your gateway to festival cinema',
    link: 'https://cheyni.io',
    image: '/projects/cheyni.jpg',
    gradient: 'from-indigo-900 via-purple-950 to-black',
    accentColor: 'text-indigo-400',
    isComingSoon: false,
  },
  {
    title: 'Bantik',
    subtitle: 'E-commerce',
    description: 'Web and mobile shopping platform',
    link: 'https://bantik.az',
    image: '/projects/bantik.jpg',
    gradient: 'from-red-900 via-rose-950 to-black',
    accentColor: 'text-red-400',
    isComingSoon: false,
  },
];

function Projects() {
  return (
    <main className="min-h-dvh sm:py-12 py-6 flex flex-col gap-y-6 sm:gap-y-8 px-2 sm:px-4">
      {projects.map((project) => (
        <section
          key={project.title}
          className="rounded-3xl bg-[#f7f7f7] dark:bg-white/[.04] p-3 sm:p-4 transition-colors hover:bg-[#efefef] dark:hover:bg-white/[.06] group"
        >
          <div className="flex items-center justify-between px-4 py-2 text-gray-600 dark:text-gray-200">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer underline sm:text-lg text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity flex items-center gap-2"
              >
                {project.title}
                {project.isComingSoon && (
                  <span className="text-xs font-normal opacity-60">
                    (Coming Soon)
                  </span>
                )}
              </a>
            ) : (
              <h3 className="sm:text-lg text-sm font-semibold tracking-tight flex items-center gap-2">
                {project.title}
                {project.isComingSoon && (
                  <span className="text-xs font-normal opacity-60">
                    (Coming Soon)
                  </span>
                )}
              </h3>
            )}
          </div>

          {/* Project Card Content */}
          <div
            className="relative overflow-hidden rounded-2xl mt-2 min-h-[280px] sm:min-h-[750px] flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.01]"
          >
            {/* Background Image */}
            {(project as any).image && (
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <img 
                  src={(project as any).image}
                  alt={project.title}
                  className="w-[full] h-full object-cover border-2 border-gray-200 rounded-3xl"
                />
              </div>
            )}

            {/* Visit Link Overlay */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-black text-sm font-medium hover:bg-white/20 transition-colors"
              >
                Visit
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {/* Signature */}
            <div className="absolute top-4 right-4 text-white/30 font-light italic text-sm">
              Nasib Karimzade
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}

export default Projects;
