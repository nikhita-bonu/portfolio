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
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Experience', value: '5+ years' },
                { label: 'Location', value: 'U.S.A' },
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
              I began my journey as a software engineer, building and optimizing enterprise systems with a strong focus on performance and scalability. But I was always drawn to understanding how systems could become smarter — not just functional, but intelligent. That curiosity led me into applied machine learning, where I worked on healthcare-focused AI solutions and generative models that bridge research and real-world use.
            </p>
            <p className="text-slate-300">
              Today, through my Master&apos;s in Computer Science with a Generative AI focus, I continue to push myself — exploring LLM systems, RAG architectures, and intelligent automation. For me, growth has always meant going deeper, learning continuously, and building systems that truly matter.
            </p>
          </div>

          {/* Philosophy */}
          <div className="p-6 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
            <h3 className="text-xl font-bold mb-4">Philosophy</h3>
            <blockquote className="text-slate-300 italic border-l-4 border-blue-400 pl-4 py-2">
              "I believe meaningful innovation happens when strong engineering discipline meets thoughtful AI design. For me, building intelligent systems isn’t just about model performance — it’s about reliability, scalability, and real-world impact."
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