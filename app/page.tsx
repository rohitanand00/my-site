"use client";
import data from '../lib/data.json';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import { Database, BarChart3, Table, Users, TrendingUp, GraduationCap, Briefcase, ExternalLink } from 'lucide-react';

const brandConfigs: any = {
  "S&P Global": { color: "#E31B23", logo: "https://logo.clearbit.com/spglobal.com" },
  "Pegasystems": { color: "#0066CC", logo: "https://logo.clearbit.com/pega.com" },
  "Paytm Ads": { color: "#00baf2", logo: "https://logo.clearbit.com/paytm.com" },
  "Soul AI": { color: "#8B5CF6", logo: "https://ui-avatars.com/api/?name=Soul+AI&background=8B5CF6&color=fff" },
  "INNODATATICS * Innovation | Data | Analytics": { color: "#002E5D", logo: "https://ui-avatars.com/api/?name=Innodatatics&background=002E5D&color=fff" },
  "University of Hyderabad": { logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/University_of_Hyderabad_logo.png/220px-University_of_Hyderabad_logo.png" },
  "Banaras Hindu University": { logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Banaras_Hindu_University_logo.png/220px-Banaras_Hindu_University_logo.png" }
};

export default function Home() {
  return (
    <main className="min-h-screen text-slate-100 pb-20">
      <AnimatedBackground />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* HERO SECTION */}
        <header className="pt-24 pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-8xl font-bold tracking-tighter mb-4 leading-none">
              Rohit<br/><span className="text-blue-500">Anand.</span>
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-xl leading-relaxed mb-8">
              MBA in Business Analytics. Transforming data into <span className="text-white border-b border-blue-500">financial intelligence</span> at S&P Global.
            </p>
            
            <div className="flex gap-4">
              {["SQL", "Power BI", "Excel", "Analysis"].map(s => (
                <span key={s} className="text-xs font-mono px-3 py-1 border border-slate-800 rounded-full bg-slate-900/50 text-slate-500">{s}</span>
              ))}
            </div>
          </motion.div>
        </header>

        {/* EXPERIENCE SECTION */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-slate-800"></div>
            <h2 className="text-sm font-mono tracking-[0.3em] text-slate-500 uppercase">Experience</h2>
          </div>

          <div className="space-y-16">
            {data.experience.map((job: any) => (
              <motion.div key={job.company} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="group">
                <div className="flex gap-6">
                  {/* LOGO COLUMN */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-white p-2 flex items-center justify-center overflow-hidden shadow-xl group-hover:scale-110 transition-transform">
                      <img src={brandConfigs[job.company]?.logo} alt={job.company} className="w-full h-full object-contain" />
                    </div>
                    <div className="w-px flex-1 bg-slate-800 my-4 group-last:hidden"></div>
                  </div>

                  {/* CONTENT COLUMN */}
                  <div className="flex-1 pb-10">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-2xl font-bold">{job.role}</h3>
                        <p className="text-blue-500 font-medium">{job.company}</p>
                      </div>
                      <span className="text-xs font-mono text-slate-600 mt-2">{job.dates}</span>
                    </div>
                    <ul className="space-y-3 mt-6">
                      {job.bullets.map((b: string, i: number) => (
                        <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                          <span className="text-blue-900 mt-1.5 h-1 w-1 rounded-full bg-blue-500 shrink-0" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-slate-800"></div>
            <h2 className="text-sm font-mono tracking-[0.3em] text-slate-500 uppercase">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.education.map((edu: any) => (
              <div key={edu.degree} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/20 flex gap-4 items-center">
                <div className="w-12 h-12 rounded-lg bg-white/10 p-1 shrink-0 overflow-hidden">
                   <img src={brandConfigs[edu.school]?.logo || "https://ui-avatars.com/api/?name=Uni"} className="w-full h-full object-contain grayscale brightness-200" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">{edu.school}</h4>
                  <p className="text-xs text-slate-500 mt-1">{edu.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="pt-20 border-t border-slate-900 flex justify-between items-center text-[10px] font-mono text-slate-600 uppercase tracking-widest">
           <span>{data.basics.email}</span>
           <span>Rohit Anand © 2025</span>
        </footer>

      </div>
    </main>
  );
}
