import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ContactPreview() {
  return (
    <section className="container mx-auto">
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/50 to-blue-900/20 p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl font-bold mb-6">
              Let's build something{' '}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                meaningful
              </span>
            </h2>
            <p className="text-slate-300 mb-8">
              Whether you want to discuss a role, a research collaboration, or an idea, I'm always happy to connect. I'm currently open to full-time roles, internships, and research collaborations in backend engineering, ML engineering, or generative-AI-focused teams.
            </p>
            
            <div className="space-y-4 mb-8">
              <a
                href="mailto:bonunikhita@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-blue-300 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center">
                  ✉️
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p>bonunikhita@gmail.com</p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/nikhitabonu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-blue-300 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center">
                  💼
                </div>
                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <p>/in/nikhitabonu</p>
                </div>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold mb-4">Quick Contact</h3>
            <p className="text-slate-400 text-sm mb-6">
              Send me a message with a short context of what you're working on, and I'll get back as soon as I can.
            </p>
            <Link
              to="/contact"
              className="block w-full text-center rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3 text-sm font-medium text-white hover:scale-105 transition-transform"
            >
              Send a Message
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}