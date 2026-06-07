import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import nikki from '../../assets/nikki.jpeg'

export default function Hero() {
  return (
    <section className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <div>
            <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
              AI/ML Engineer & Full-Stack Developer
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Building reliable systems
              <span className="block bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                powered by AI.
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl">
              I'm a <span className="font-semibold text-slate-100">AI/ML Engineer & Full-Stack Developer</span> who enjoys connecting robust backend systems with practical machine-learning solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3 text-sm font-medium text-white shadow-soft transition-all hover:scale-105"
            >
              <span className="relative z-10">Let's collaborate</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-400 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
            <Link
              to="/projects"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
            >
              View featured work
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Experience</p>
              <p className="mt-1 text-lg font-semibold text-slate-100">5+ years</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Focus</p>
              <p className="mt-1 text-lg font-semibold text-slate-100">AI/ML</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Location</p>
              <p className="mt-1 text-lg font-semibold text-slate-100">U.S.A</p>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-sky-400/20 to-emerald-400/30 rounded-3xl blur-xl opacity-60 transition-opacity duration-500" />
            
            {/* Profile card */}
            <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 shadow-soft">
              <div className="flex flex-col items-center text-center">
                {/* Profile image */}
                <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full blur-md opacity-30" />
                  <img
                    src={nikki}
                    alt="Nikhita Bonu"
                    className="relative h-40 w-40 rounded-full object-cover border-2 border-slate-300/70 shadow-lg"
                  />
                </div>
                
                {/* Info */}
                <h3 className="text-xl font-bold text-slate-50">Nikhita Bonu</h3>
                <p className="text-sm text-slate-400 mt-1">M.S. Computer Science · Generative AI · Texas Tech</p>
                
                {/* Quote */}
                <div className="mt-6 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <p className="text-sm text-slate-300 italic">
                    I enjoy turning complex ideas into production-ready systems — from <span className="font-semibold">data and machine learning models</span> to <span className="font-semibold">scalable APIs</span> and <span className="font-semibold">seamless user experiences</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}