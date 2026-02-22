import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          View or download my resume. If you haven't uploaded a PDF yet, you can still download a sample.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <a
            href="/Resume_Nikhita.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
          >
            View Resume
          </a>

          <a
            href="/Resume_Nikhita.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 transition-colors"
          >
            Download PDF
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 transition-colors"
          >
            Contact to Request
          </Link>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 p-4" style={{height: '700px'}}>
          <iframe title="Resume" src="/Resume_Nikhita.pdf" className="w-full h-full" />
          <div className="mt-4 text-sm text-slate-400">
            Resume viewer uses the uploaded file <code className="bg-slate-800 px-2 py-1 rounded">public/Resume_Nikhita.pdf</code>. I can't delete files directly here; if you want the old placeholders removed I can point out which files to delete or remove them if you confirm.
          </div>
        </div>
      </div>
    </div>
  )
}
