"use client";
import data from '../lib/data.json';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import { Database, Table, BarChart3, Users, Github, Mail, Linkedin, ArrowUpRight, Cpu, Sparkles } from 'lucide-react';

const skillIcons: any = {
  "Business/data Analysis": <Cpu className="w-5 h-5" />,
  "advanced excel": <Table className="w-5 h-5" />,
  "sql": <Database className="w-5 h-5" />,
  "powerbi": <BarChart3 className="w-5 h-5" />,
  "stakeholder management": <Users className="w-5 h-5" />
};

export default function Home() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main className="min-h-screen text-slate-100 pb-20">
      <AnimatedBackground />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* HERO SECTION */}
        <section className="pt-32 pb-24">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }}
              className="flex-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6">
                <Sparkles className="w-3 h-3" /> AVAILABLE FOR HIRED ROLES
              </div>
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 leading-none">
                {data.basics.name.split(' ')[0]}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                  {data.basics.name.split(' ')[1]}.
                </span>
              </h1>
              <p className="text-xl text-slate-400 font-light max-w-lg leading-relaxed">
                MBA in Business Analytics. Transforming datasets into <span className="text-white font-medium">Financial Intelligence</span>.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500 blur-[80px] opacity-20"></div>
              <img src={data.basics.profileImage} alt="Rohit" className="w-48 h-48 md:w-64 md:h-64 rounded-3xl border border-slate-700 bg-slate-900/50 backdrop-blur-xl p-4 relative z-10" />
            </motion.div>
          </div>

          {/* SKILLS STRIP */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4 mt-16">
            {Object.keys(skillIcons).map((skill) => (
              <div key={skill} className="flex items-center gap-2 px-5 py-3 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl text-sm font-medium hover:border-blue-500/50 transition-all cursor-default group">
                <span className="text-slate-500 group-hover:text-blue-400 transition-colors">{skillIcons[skill]}</span>
                {skill}
              </div>
            ))}
          </motion.div>
        </section>

        {/* IMPACT SECTION */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
          {data.impacts.map((impact, i) => (
            <motion.button 
              key={i} 
              whileHover={{ y: -5 }}
              onClick={() => scrollTo(impact.target)}
              className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800 backdrop-blur-md text-left group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-blue-500 transition-all">
                <ArrowUpRight className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold mb-1">{impact.value}</div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">{impact.label}</div>
            </motion.button>
          ))}
        </section>

        {/* PROJECTS SECTION */}
        <section className="mb-32">
          <h2 className="text-sm font-mono text-slate-500 uppercase tracking-[0.4em] mb-12">Building with Data</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.projects.map((project, i) => (
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={project.title}
                href={project.link}
                className="group rounded-3xl bg-slate-900/40 border border-slate-800 overflow-hidden block hover:border-blue-500/50 transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{project.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* CAREER TRAJECTORY */}
        <section className="mb-32">
          <h2 className="text-sm font-mono text-slate-500 uppercase tracking-[0.4em] mb-16">Experience</h2>
          <div className="space-y-6">
            {data.experience.map((job) => (
              <motion.div 
                id={job.id} 
                key={job.company} 
                className="group relative p-8 rounded-3xl bg-slate-900/30 border border-slate-800 backdrop-blur-md hover:bg-slate-900/50 transition-all"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 group-hover:w-2 transition-all" style={{ backgroundColor: job.color }}></div>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono mb-2 block" style={{ color: job.color }}>{job.dates}</span>
                    <h3 className="text-2xl font-bold">{job.role}</h3>
                    <p className="text-slate-400 font-medium">{job.company}</p>
                  </div>
                  <div className="flex-1 md:max-w-md">
                    <ul className="space-y-3">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-slate-500 leading-relaxed">• {b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-20 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
           <div className="flex gap-4 mb-8 md:mb-0">
             <a href={`mailto:${data.basics.email}`} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500 text-blue-500 transition-all"><Mail className="w-5 h-5"/></a>
             <a href="https://linkedin.com/in/-rohitanand" target="_blank" className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500 text-blue-500 transition-all"><Linkedin className="w-5 h-5"/></a>
           </div>
           <div className="text-xs font-mono text-slate-600 tracking-widest">
             ROHIT ANAND © 2025 • DESIGNED FOR IMPACT
           </div>
        </footer>

      </div>
    </main>
  );
}
