"use client";
import data from '../lib/data.json';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import { Database, Github, Mail, Linkedin, ArrowUpRight, GraduationCap } from 'lucide-react';

export default function Home() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen text-slate-100 pb-20 bg-[#020617]">
      <AnimatedBackground />
      
      {/* Centered Container */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* HERO SECTION */}
        <section className="pt-32 pb-24 text-center flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-7xl md:text-[10rem] font-extrabold tracking-tighter mb-8 leading-[0.8]">
              Rohit<br/><span className="text-blue-500">Anand.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
              {data.basics.summary}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="mt-16 relative h-64 md:h-[450px] w-full rounded-[3.5rem] overflow-hidden border border-slate-800 shadow-2xl"
          >
            <img src={data.basics.heroCover} className="w-full h-full object-cover opacity-50 brightness-75" alt="Analytics Cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
            <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 text-left">
               <div className="px-5 py-2 bg-blue-600 text-white text-[10px] font-bold rounded-full inline-block mb-3 uppercase tracking-[0.2em]">Data Analyst</div>
               <p className="text-sm text-slate-300 font-mono tracking-widest">S&P GLOBAL | HYDERABAD, INDIA</p>
            </div>
          </motion.div>
        </section>

        {/* CLICKABLE IMPACT STRIP */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-40">
          {data.impacts.map((impact: any, i: number) => (
            <button key={i} onClick={() => scrollTo(impact.target)} className="p-8 md:p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800/50 backdrop-blur-xl text-left group hover:bg-blue-600/10 transition-all">
              <div className="text-4xl md:text-5xl font-extrabold mb-1 tracking-tighter group-hover:text-blue-400 transition-colors">{impact.value}</div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">{impact.label}</div>
            </button>
          ))}
        </section>

        {/* PROJECTS SECTION */}
        <section className="mb-40">
          <h2 className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.4em] mb-12 px-4">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.projects.map((project: any, i: number) => (
              <motion.a 
                key={project.title} href={project.link} target="_blank"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="group rounded-[3rem] bg-slate-900/40 border border-slate-800 overflow-hidden block hover:border-blue-500/50 transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{project.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-40">
          <h2 className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.4em] mb-16 px-4">Work Trajectory</h2>
          <div className="space-y-6">
            {data.experience.map((job: any) => (
              <div id={job.id} key={job.company} className="p-8 md:p-10 rounded-[3rem] bg-slate-900/30 border border-slate-800 hover:border-blue-500/50 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-white p-3 flex items-center justify-center shrink-0 shadow-xl">
                    <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-3xl font-bold tracking-tight">{job.company}</h3>
                    <p className="text-blue-500 font-semibold text-lg">{job.role}</p>
                  </div>
                  <div className="md:ml-auto font-mono text-xs text-slate-500">{job.dates}</div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-left">
                  {job.bullets.map((b: string, j: number) => (
                    <div key={j} className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800/50 text-sm text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="mb-40 text-center">
          <h2 className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.4em] mb-12 px-4">Academic History</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data.education.map((edu: any) => (
              <div key={edu.degree} className="p-8 rounded-[2.5rem] bg-slate-900/20 border border-slate-800/50 flex items-center gap-6 group hover:bg-slate-900/50 transition-all text-left">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                   <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-tight">{edu.school}</h4>
                  <p className="text-blue-500 text-sm font-medium mt-1">{edu.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-20 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="flex gap-8">
             <a href={`mailto:${data.basics.email}`} className="text-slate-400 hover:text-blue-500 transition-colors text-sm font-semibold tracking-tighter flex items-center gap-2">
               <Mail className="w-4 h-4" /> EMAIL
             </a>
             <a href="https://linkedin.com/in/-rohitanand" className="text-slate-400 hover:text-blue-500 transition-colors text-sm font-semibold tracking-tighter flex items-center gap-2">
               <Linkedin className="w-4 h-4" /> LINKEDIN
             </a>
           </div>
           <span className="text-[10px] font-mono text-slate-700 uppercase tracking-[0.5em]">ROHIT ANAND • 2025</span>
        </footer>
      </div>
    </main>
  );
}
