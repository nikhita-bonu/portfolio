import { motion } from 'framer-motion'

const education = [
  {
    degree: "M.S. in Computer Science – Generative AI Track",
    school: "Texas Tech University",
    period: "2024 – Present",
    location: "Lubbock, Texas, USA",
    gpa: "3.9/4.0",
    description: "Focus on Generative AI, Machine Learning, and Advanced Computing Systems",
    courses: [
      "Generative AI",
      "Network Security",
      "Advanced Database Management Systems",
      "Machine Learning",
      "Distributed Systems",
      "Cloud Computing"
    ],
    projects: [
      "Diffusion-based medical imaging for anomaly detection",
      "RAG-based network security tutor",
      "Large-scale data processing pipeline"
    ]
  },
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "Your Undergraduate University",
    period: "2015 – 2019",
    location: "City, Country",
    gpa: "3.8/4.0",
    description: "Strong foundation in computer science fundamentals, algorithms, and software engineering",
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Database Systems",
      "Web Technologies"
    ],
    projects: [
      "Scalable microservices for real-time analytics",
      "E-commerce platform with recommendation system",
      "Mobile application for campus services"
    ]
  }
]

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credential: "Credential ID: ABC123"
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2022",
    credential: "Credential ID: DEF456"
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker",
    date: "2022",
    credential: "Credential ID: GHI789"
  }
]

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Education & <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Certifications</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Academic background and professional certifications in computer science and AI
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Education Timeline */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-blue-400/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-50">{edu.degree}</h3>
                      <p className="text-lg text-slate-300">{edu.school}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-100 font-medium">{edu.period}</p>
                      <p className="text-sm text-slate-400">{edu.location}</p>
                      <p className="text-sm text-blue-300 font-medium">GPA: {edu.gpa}</p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6">{edu.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-200 mb-3">Key Courses</h4>
                      <ul className="space-y-2">
                        {edu.courses.map((course, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-400" />
                            <span className="text-slate-300">{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-200 mb-3">Notable Projects</h4>
                      <ul className="space-y-2">
                        {edu.projects.map((project, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-emerald-400" />
                            <span className="text-slate-300">{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-emerald-400/50 transition-colors"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-blue-600/20 to-emerald-500/20 mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-50 mb-2">{cert.name}</h3>
                  <p className="text-slate-400 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-slate-500 mb-3">Issued {cert.date}</p>
                  <p className="text-xs text-slate-600">{cert.credential}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}