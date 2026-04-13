import data from '../lib/data.json';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Home() {
  return (
    <main style={{ color: 'white', fontFamily: 'sans-serif', padding: '40px', backgroundColor: '#020617' }}>
      <AnimatedBackground />
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* HERO SECTION */}
        <header style={{ padding: '80px 0' }}>
          <h1 style={{ fontSize: '4.5rem', fontWeight: 'bold', margin: '0' }}>{data.basics.name}</h1>
          <p style={{ fontSize: '1.5rem', color: '#60a5fa', marginTop: '10px' }}>{data.basics.label}</p>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginTop: '5px' }}>{data.basics.subLabel}</p>
          <div style={{ marginTop: '20px' }}>
            <a href={`mailto:${data.basics.email}`} style={{ color: '#60a5fa', marginRight: '20px' }}>{data.basics.email}</a>
            {data.basics.links.map(link => (
              <a key={link.label} href={link.url} style={{ color: '#94a3b8', marginRight: '20px', textDecoration: 'none' }}>{link.label}</a>
            ))}
          </div>
          <p style={{ lineHeight: '1.8', color: '#cbd5e1', marginTop: '40px', fontSize: '1.1rem', background: 'rgba(30, 41, 59, 0.5)', padding: '20px', borderRadius: '12px' }}>
            {data.basics.summary}
          </p>
        </header>

        {/* SKILLS SECTION */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ borderBottom: '2px solid #3b82f6', paddingBottom: '10px', display: 'inline-block' }}>Top Skills</h2>
          <div style={{ display: 'flex', gap: '15px', marginTop: '20px', flexWrap: 'wrap' }}>
            {data.topSkills.map(skill => (
              <span key={skill} style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #334155', background: 'rgba(30, 41, 59, 0.8)' }}>{skill}</span>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ borderBottom: '2px solid #3b82f6', paddingBottom: '10px', display: 'inline-block' }}>Experience</h2>
          {data.experience.map((job) => (
            <div key={job.company} style={{ marginTop: '40px', padding: '20px', background: 'rgba(15, 23, 42, 0.6)', borderRadius: '12px', border: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.4rem', margin: '0' }}>{job.role}</h3>
                <span style={{ color: '#64748b' }}>{job.dates}</span>
              </div>
              <p style={{ color: '#60a5fa', marginTop: '5px' }}>{job.company} — {job.location}</p>
              <ul style={{ marginTop: '15px', color: '#94a3b8', lineHeight: '1.6' }}>
                {job.bullets.map((bullet, i) => <li key={i} style={{ marginBottom: '10px' }}>{bullet}</li>)}
              </ul>
            </div>
          ))}
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ borderBottom: '2px solid #3b82f6', paddingBottom: '10px', display: 'inline-block' }}>Certifications</h2>
          <ul style={{ marginTop: '20px', listStyle: 'none', padding: 0 }}>
            {data.certifications.map(cert => (
              <li key={cert} style={{ padding: '10px 0', borderBottom: '1px solid #1e293b', color: '#cbd5e1' }}>✓ {cert}</li>
            ))}
          </ul>
        </section>

        {/* EDUCATION SECTION */}
        <section style={{ marginBottom: '100px' }}>
          <h2 style={{ borderBottom: '2px solid #3b82f6', paddingBottom: '10px', display: 'inline-block' }}>Education</h2>
          {data.education.map(edu => (
            <div key={edu.degree} style={{ marginTop: '20px' }}>
              <h4 style={{ margin: '0', fontSize: '1.1rem' }}>{edu.school}</h4>
              <p style={{ margin: '5px 0', color: '#94a3b8' }}>{edu.degree} | <small>{edu.dates}</small></p>
            </div>
          ))}
        </section>

      </div>
    </main>
  );
}