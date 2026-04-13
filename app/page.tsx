"use client";
import data from '../lib/data.json';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import { Database, BarChart3, Table, Users, TrendingUp, GraduationCap, Briefcase } from 'lucide-react';

// Specific Brand Colors
const brandColors: any = {
  "S&P Global": "#E31B23", // Red
  "Pegasystems": "#0066CC", // Pega Blue
  "Paytm Ads": "#002E6E", // Paytm Dark Blue
  "Soul AI": "#8B5CF6", // Purple
  "INNODATATICS * Innovation | Data | Analytics": "#002E5D" // Dark Blue
};

export default function Home() {
  const topSkills = [
    { name: "Business Analysis", icon: <TrendingUp size={18} /> },
    { name: "Advanced Excel", icon: <Table size={18} /> },
    { name: "Power BI", icon: <BarChart3 size={18} /> },
    { name: "SQL", icon: <Database size={18} /> },
    { name: "Stakeholder Management", icon: <Users size={18} /> }
  ];

  const impacts = [
    { label: "35% Effort Reduction", detail: "Automated reporting at Paytm Ads" },
    { label: "95% Forecast Accuracy", detail: "ARIMA/LSTM models at Innodatatics" },
    { label: "12.7% Cost Cut", detail: "Dijkstra's route optimization" }
  ];

  return (
    <main className="min-h-screen text-slate-100 font-sans selection:bg-blue-500/30">
      <AnimatedBackground />
      
      <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        
        {/* TOP SKILLS BAR */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {topSkills.map((skill) => (
            <motion.div 
              whileHover={{ y: -5, scale: 1.05 }}
              key={skill.name}
              className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 border border-slate-700 rounded-full text-sm font-medium backdrop-blur-md shadow-lg shadow-blue-500/10"
            >
              <span className="text-blue-400">{skill.icon}</span>
              {skill.name}
            </motion.div>
          ))}
        </div>

        {/* HERO SECTION */}
        <header className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500"
          >
            {data.basics.name}
          </motion.h1>
          <p className="text-xl text-blue-400 font-medium mb-8 uppercase tracking-widest">{data.basics.label}</p>
          
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-lg text-slate-400 leading-relaxed">
              Business Analytics MBA specializing in turning raw data into institutional-grade intelligence. 
              Ex-Pegasystems & Paytm. Currently at S&P Global.
            </p>
          </div>

          {/* INTERACTIVE IMPACT BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4">
            {impacts.map((impact) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={impact.label}
                className="group relative px-6 py-3 bg-slate-900 border border-slate-700 rounded-xl overflow-hidden transition-all hover:border-blue-500"
              >
                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-white font-bold">{impact.label}</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                    {impact.detail}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </header>

        {/* EXPERIENCE SECTION */}
        <section className="mb-32">
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-blue-500" /> Professional Experience
          </h2>
          
          <div className="grid gap-6">
            {data.experience.map((job: any) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                key={job.company}
                className="group relative bg-slate-900/40 border border-slate-800 p-8 rounded-2xl backdrop-blur-xl hover:bg-slate-900/60 transition-all"
              >
                <div 
                  className="absolute left-0 top-0 w-1 h-full rounded-l-2xl" 
                  style={{ backgroundColor: brandColors[job.company] || '#334155' }}
                />
                
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <button 
                      className="px-4 py-1 rounded-md text-xs font-bold uppercase tracking-widest mb-3 text-white shadow-lg"
                      style={{ backgroundColor: brandColors[job.company] || '#334155' }}
                    >
                      {job.company}
                    </button>
                    <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                  </div>
                  <span className="text-sm font-mono text-slate-500 bg-slate-950 px-3 py-1 rounded-full">{job.dates}</span>
                </div>
                
                <ul className="mt-6 space-y-3 text-slate-400">
                  {job.bullets.map((b: string, i: number) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                      <span className="text-blue-500 mt-1">▹</span> {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EDUCATION TRAJECTORY */}
        <section className="mb-32">
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
            <GraduationCap className="text-blue-500" /> Academic Trajectory
          </h2>
          
          <div className="relative border-l-2 border-slate-800 ml-4 space-y-12 pb-8">
            {data.education.map((edu: any, index: number) => (
              <motion.div 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                key={edu.degree}
                className="relative pl-10"
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                <div className="bg-slate-900/30 border border-slate-800 p-5 rounded-xl hover:border-slate-600 transition-colors">
                  <span className="text-xs font-mono text-blue-400 block mb-1">{edu.dates}</span>
                  <h4 className="text-lg font-bold text-white">{edu.school}</h4>
                  <p className="text-slate-400 text-sm">{edu.degree}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="text-center py-12 border-t border-slate-900">
          <p className="text-slate-600 text-sm tracking-widest uppercase">
            Designed for Impact • {data.basics.email}
          </p>
        </footer>

      </div>
    </main>
  );
}
