import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'IVY Comptech - Entain',
    period: 'Jan 2021 – Jan 2025',
    highlights: [
      'Engineered RESTful microservices with Java Spring Boot',
      'Optimized SQL queries improving data access speed by 90%',
      'Built dynamic React.js interfaces'
    ]
  },
  {
    role: 'AI/ML Engineer',
    company: 'Academic & Freelance',
    period: '2023 – Present',
    highlights: [
      'Implemented GANs, VAEs, and diffusion models',
      'Developed ML pipelines for medical imaging',
      'Built LLM-powered assistants and RAG workflows'
    ]
  }
]

export default function ExperiencePreview() {
  return (
    <section className="container mx-auto">
      <div className="text-center mb-10">
        <span className="inline-block text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">
          Professional Journey
        </span>
        <h2 className="text-3xl font-bold mb-4">
          Industry Experience &{' '}
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            AI Research
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Combining production-grade backend engineering with cutting-edge machine learning research
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-blue-400/50 transition-all hover:scale-[1.02]"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-50 group-hover:text-blue-300 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-slate-400">{exp.company}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-300 border border-slate-700">
                {exp.period}
              </span>
            </div>
            
            <ul className="space-y-3">
              {exp.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                  <span className="text-slate-300 text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/experience"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600/20 to-emerald-500/20 px-6 py-3 text-sm font-medium text-slate-100 hover:from-blue-600/30 hover:to-emerald-500/30 transition-all hover:scale-105"
        >
          View Detailed Experience
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}