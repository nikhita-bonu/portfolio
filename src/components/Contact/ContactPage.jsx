import { motion } from 'framer-motion'

export default function ContactPage() {
   
   const contactInfo = [
     {
       icon: '✉️',
       title: 'Email',
       value: 'bonunikhita@gmail.com',
       link: 'mailto:bonunikhita@gmail.com',
       description: 'For direct inquiries and collaboration'
     },
     {
       icon: '💼',
       title: 'LinkedIn',
       value: '/in/nikhitabonu',
       link: 'https://linkedin.com/in/nikhitabonu',
       description: 'Professional networking and updates'
     },
     {
       icon: '💻',
       title: 'GitHub',
       value: '/nikhita-bonu',
       link: 'https://github.com/nikhita-bonu',
       description: 'Open-source projects and code'
     }
   ]
 
   return (
     <div className="container mx-auto px-4 py-20">
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
         className="text-center mb-16"
       >
         <h1 className="text-4xl md:text-5xl font-bold mb-6">
           Get in <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Touch</span>
         </h1>
         <p className="text-xl text-slate-400 max-w-3xl mx-auto">
           I'm currently open to opportunities, collaborations, and technical discussions. Please use one of the channels below to reach me directly.
         </p>
       </motion.div>
 
      {/* Centered Contact Layout */}
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact</h2>
          <p className="text-center text-slate-300 mb-6">I'm currently open to opportunities, collaborations, and technical discussions. Reach out using any of the channels below.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center gap-3 p-4 rounded-xl border border-slate-800 bg-slate-900/30 hover:border-blue-400/50 hover:bg-slate-900/50 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-emerald-500/20 flex items-center justify-center">
                  <span className="text-xl">{info.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-50">{info.title}</h3>
                  <p className="text-slate-100 mt-1">{info.value}</p>
                  <p className="text-sm text-slate-400 mt-2">{info.description}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-3">
            <a href="mailto:bonunikhita@gmail.com" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white">Email</a>
            <a href="https://linkedin.com/in/nikhitabonu" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/nikhita-bonu" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900/50 to-blue-900/20 p-6 text-center">
          <h3 className="text-lg font-semibold text-slate-50 mb-4">Quick Info</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <p className="text-slate-400">Response Time</p>
              <p className="text-slate-100 font-medium">Within 24 hours</p>
            </div>
            <div>
              <p className="text-slate-400">Location</p>
              <p className="text-slate-100 font-medium">Open to Remote</p>
            </div>
            <div>
              <p className="text-slate-400">Availability</p>
              <p className="text-green-400 font-medium">Open for Opportunities</p>
            </div>
          </div>
        </div>
      </div>
     </div>
   )
 }