import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-slate-50 mb-4">Nikhita Bonu</h3>
            <p className="text-sm text-slate-400 max-w-xs">
              AI/ML Engineer & Full-Stack Developer building reliable systems powered by AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['/', '/projects', '/experience', '/skills', '/education', '/certificates', '/about', '/resume', '/contact'].map((path) => (
                <Link
                  key={path}
                  to={path}
                  className="block text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {{
                    '/': 'Home',
                    '/projects': 'Projects',
                    '/experience': 'Experience',
                    '/skills': 'Skills',
                    '/education': 'Education',
                    '/certificates': 'Certifications',
                    '/about': 'About',
                    '/resume': 'Resume',
                    '/contact': 'Contact'
                  }[path]}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-4">Get in Touch</h4>
            <div className="space-y-2">
              <a
                href="mailto:bonunikhita@gmail.com"
                className="block text-sm text-slate-400 hover:text-blue-400 transition-colors"
              >
                bonunikhita@gmail.com
              </a>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://linkedin.com/in/nikhitabonu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/nikhita-bonu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800/50 text-center">
          <p className="text-sm text-slate-500">
            © {currentYear} Nikhita Bonu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}