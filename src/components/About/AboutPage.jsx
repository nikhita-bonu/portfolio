import { motion } from 'framer-motion'
import nikki from '../../assets/nikki.jpeg'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Nikhita Bonu</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Full-Stack Developer & AI/ML Engineer passionate about building intelligent systems
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Profile Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={nikki}
                alt="Nikhita Bonu"
                className="h-24 w-24 rounded-full object-cover border-2 border-slate-700"
              />
              <div>
                <h2 className="text-2xl font-bold">Nikhita Bonu</h2>
                <p className="text-slate-400">AI/ML Engineer & Full-Stack Developer</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Experience', value: '5+ years' },
                { label: 'Location', value: 'Remote' },
                { label: 'Focus', value: 'AI/ML' },
                { label: 'Status', value: 'Open to work' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-lg bg-slate-800/30">
                  <div className="text-lg font-bold text-slate-100">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Overview */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-xl font-bold mb-4">Core Expertise</h3>
            <div className="space-y-4">
              {[
                { category: 'AI/ML', level: 95 },
                { category: 'Backend Dev', level: 90 },
                { category: 'Frontend', level: 85 },
                { category: 'Cloud & DevOps', level: 80 },
              ].map((skill) => (
                <div key={skill.category}>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">{skill.category}</span>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-400 to-emerald-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* About Text */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">My Journey</h2>
            <p className="text-slate-300">
              I began my career as a Software Engineer, working on enterprise applications with Java and React.js. 
              Over time, my passion for machine learning led me to specialize in AI/ML engineering, with a 
              particular focus on medical imaging and generative models.
            </p>
            <p className="text-slate-300">
              Currently pursuing my Master's in Computer Science with a Generative AI track, I'm exploring 
              cutting-edge techniques in diffusion models, RAG systems, and their practical applications 
              in healthcare and automation.
            </p>
          </div>

          {/* Philosophy */}
          <div className="p-6 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
            <h3 className="text-xl font-bold mb-4">Philosophy</h3>
            <blockquote className="text-slate-300 italic border-l-4 border-blue-400 pl-4 py-2">
              "I believe the most impactful solutions come from connecting robust software engineering 
              principles with cutting-edge AI research. Whether it's building scalable backend systems 
              or implementing novel ML models, I focus on creating solutions that are both technically 
              excellent and practically valuable."
            </blockquote>
          </div>

          {/* Personal Interests */}
          <div>
            <h3 className="text-xl font-bold mb-4">Beyond Code</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Open Source',
                'Photography',
                'Hiking',
                'Tech Blogging',
                'Mentoring',
                'Research Papers',
                'Travel',
                'Cooking'
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 rounded-full bg-slate-800/50 text-slate-300 border border-slate-700 hover:border-blue-400 transition-colors"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}