import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "Blood Group Prediction from Fingerprints",
    category: "Computer Vision • Healthcare",
    description: "End-to-end pipeline using ResNet-50 for blood group prediction from fingerprint images",
    tech: ["Python", "TensorFlow", "OpenCV"],
    featured: true
  },
  {
    title: "Medical Diffusion for Brain MRI",
    category: "Generative AI • Medical Imaging",
    description: "DDPM-based diffusion models for brain MRI anomaly detection",
    tech: ["PyTorch", "UNet", "DDPM"],
    featured: true
  },
  {
    title: "AI Social Media Automation",
    category: "Automation • LLM",
    description: "Auto-generate, review, and schedule social media posts using LLM workflows",
    tech: ["n8n", "OpenAI", "Airtable"],
    featured: true
  }
]

export default function ProjectsPreview() {
  return (
    <section className="container mx-auto">
      <div className="text-center mb-10">
        <span className="inline-block text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">
          Featured Work
        </span>
        <h2 className="text-3xl font-bold mb-4">
          Selected{' '}
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A mix of production systems, research projects, and automation work that reflects how I build
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-blue-400/50 transition-all hover:scale-[1.02]"
          >
            {project.featured && (
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-600/20 to-emerald-500/20 text-blue-300 border border-blue-400/30">
                  Featured
                </span>
              </div>
            )}

            <div className="p-6">
              <div className="mb-4">
                <span className="text-xs text-slate-500">{project.category}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3 text-sm font-medium text-white hover:scale-105 transition-transform"
        >
          View All Projects
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}