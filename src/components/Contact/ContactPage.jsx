import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

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
          Let's discuss opportunities, collaborations, or just chat about technology
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-300"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="work">Work Opportunity</option>
                  <option value="collaboration">Project Collaboration</option>
                  <option value="question">Technical Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3 text-white font-medium transition-all ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:opacity-90 hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-slate-300 mb-8">
              I'm currently open to full-time roles, internships, and research collaborations
              in backend engineering, ML engineering, or generative-AI-focused teams.
              Feel free to reach out through any of the channels below.
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex items-start gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/30 hover:border-blue-400/50 hover:bg-slate-900/50 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-xl">{info.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-50 group-hover:text-blue-300 transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-slate-100 mt-1">{info.value}</p>
                  <p className="text-sm text-slate-400 mt-2">{info.description}</p>
                </div>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            ))}
          </div>

          {/* Quick Info */}
          <div className="rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900/50 to-blue-900/20 p-6">
            <h3 className="text-lg font-semibold text-slate-50 mb-4">Quick Info</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Response Time</span>
                <span className="text-slate-100">Within 24 hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Location</span>
                <span className="text-slate-100">Open to Remote</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Availability</span>
                <span className="text-green-400">Open for Opportunities</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}