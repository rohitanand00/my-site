"use client";
import data from '../lib/data.json';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import { Database, Table, BarChart3, LineChart, Users, Github, Mail, Linkedin, ArrowUpRight, Cpu } from 'lucide-react';

const skillIcons: any = {
  "Business/data Analysis": <Cpu className="w-5 h-5" />,
  "advanced excel": <Table className="w-5 h-5" />,
  "sql": <Database className="w-5 h-5" />,
  "powerbi": <BarChart3 className="w-5 h-5" />,
  "stakeholder management": <Users className="w-5 h-5" />
};

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen text-slate-100 selection:bg-blue-500/30">
      <AnimatedBackground />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* HERO SECTION */}
        <section className="pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-6">
              {data.basics.name.split(' ')[0]}<br/>
              <span className="text-blue-500">{data.basics.name.split(' ')[1]}.</span>
            </h1>
            
            {/* TOP 5 SKILLS */}
            <div className="flex flex-wrap gap-3 mt-8">
              {Object.keys(skillIcons).map((skill) => (
                <div key={skill} className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-full text-xs font-mono uppercase tracking-wider text-slate-400">
                  <span className="text-blue-500">{skillIcons[skill]}</span>
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CLICKABLE IMPACT STRIP */}
        <section className="py-12 border-y border-slate-800/50 bg-slate-900/20 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.impacts.map((impact, i) => (
              <button 
                key={i} 
                onClick={() => scrollTo(impact.target)}
                className="text-left group transition-all"
              >
                <div className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-1">
                  {impact.value} <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-1">{impact.label}</div>
              </button>
            ))}
          </div>
        </section>

        {/* EXPERIENCE TRAJECTORY */}
        <section className="py-32">
          <h2 className="text-sm font-mono text-slate-500 uppercase tracking-[0.4em] mb-16">Career Trajectory</h2>
          <div className="space-y-12 relative">
            {/* The Vertical Line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-800 md:left-1/2"></div>
            
            {data.experience.map((job, i) => (
              <motion.div 
                id={job.id}
                key={job.company} 
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 hidden md:block" />
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-4 border-slate-800 z-10 flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full" style={{ backgroundColor: job.color }}></div>
                </div>
                <div className="flex-1 ml-12 md:ml-0">
                  <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all group">
                    <span className="text-[10px] font-mono mb-2 block" style={{ color: job.color }}>{job.dates}</span>
                    <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                    <div className="inline-block px-3 py-1 rounded text-xs font-bold mb-4" style={{ backgroundColor: `${job.color}20`, color: job.color }}>
                      {job.company}
                    </div>
                    <ul className="space-y-2">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-slate-400 leading-relaxed">• {b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="py-32 border-t border-slate-800">
          <h2 className="text-sm font-mono text-slate-500 uppercase tracking-[0.4em] mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.projects.map((project) => (
              <a 
                href={project.link} 
                target="_blank" 
                key={project.title}
                className="group p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:bg-blue-600/5 hover:border-blue-500/50 transition-all"
              >
                <Github className="w-6 h-6 mb-6 text-slate-600 group-hover:text-blue-500 transition-colors" />
                <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">{project.desc}</p>
                <div className="flex items-center text-xs font-mono text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  VIEW REPOSITORY <ArrowUpRight className="w-3 h-3 ml-1" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CONTACT FOOTER */}
        <footer className="py-20 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="text-center md:text-left">
             <h2 className="text-2xl font-bold mb-2">Let's connect.</h2>
             <p className="text-slate-500 text-sm">Open for data-driven collaborations.</p>
           </div>
           <div className="flex gap-4">
             <a href={`mailto:${data.basics.email}`} className="p-4 rounded-full bg-slate-900 border border-slate-800 hover:border-blue-500 transition-all text-blue-500">
               <Mail className="w-5 h-5" />
             </a>
             <a href="https://linkedin.com/in/-rohitanand" target="_blank" className="p-4 rounded-full bg-slate-900 border border-slate-800 hover:border-blue-500 transition-all text-blue-500">
               <Linkedin className="w-5 h-5" />
             </a>
           </div>
        </footer>

      </div>
    </main>
  );
}
