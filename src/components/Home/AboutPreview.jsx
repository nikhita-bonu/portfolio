import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function AboutPreview() {
  return (
    <section className="container mx-auto">
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">
              About Me
            </span>
            <h2 className="text-3xl font-bold mb-6">
              Passionate about{' '}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                bridging software engineering & applied AI
              </span>
            </h2>
            <p className="text-slate-300 mb-6">
              With 5+ years of experience in software engineering and AI/ML, I specialize in designing scalable microservices and building end-to-end intelligent systems that integrate machine learning models into production environments. My work includes healthcare-focused AI solutions, particularly in medical imaging and diagnostic data analysis, along with expertise in computer vision, natural language processing, and LLM-powered architectures.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Healthcare AI', 'Medical Imaging', 'LLMs & RAG Systems', 'Microservices Architecture', 'Cloud-Native Deployment'].map((skill, idx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="px-4 py-2 rounded-full bg-slate-800/50 text-sm text-slate-300 border border-slate-700"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600/20 to-emerald-500/20 px-6 py-3 text-sm font-medium text-slate-100 hover:from-blue-600/30 hover:to-emerald-500/30 transition-all hover:scale-105"
            >
              View Full Profile
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Industry Experience', value: '5+ years' },
              { label: 'AI Projects', value: '8+' },
              { label: 'Technologies', value: '20+' },
              { label: 'Certifications', value: '5+' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-4 rounded-xl border border-slate-800 bg-slate-900/30 text-center"
              >
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}