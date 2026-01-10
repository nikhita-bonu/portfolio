import { motion } from 'framer-motion'

const experiences = [
  {
    role: "Software Engineer",
    company: "IVY Comptech - Entain",
    period: "Jan 2021 – Jan 2025",
    location: "Hyderabad, India",
    description: "Developed and architected scalable enterprise applications using Java (Spring Boot) and React.js. Applied HLD and LLD principles to build microservices-based systems optimized for reliability, performance, and maintainability.",
    achievements: [
      "Engineered RESTful microservices with efficient inter-service communication and fault tolerance",
      "Optimized SQL, MongoDB, and MySQL queries, improving data access speed by up to 90%",
      "Built dynamic, responsive React.js interfaces integrating APIs for seamless user experiences",
      "Implemented CI/CD pipelines with Jenkins and Docker",
      "Led code reviews and contributed to system design discussions",
      "Collaborated in Agile/Scrum teams for iterative delivery"
    ],
    technologies: ["Java", "Spring Boot", "React.js", "MySQL", "MongoDB", "Jenkins", "Docker", "Microservices"]
  },
  {
    role: "AI/ML Engineer",
    company: "Academic & Freelance",
    period: "2023 – Present",
    location: "Remote",
    description: "Focused on generative models, medical imaging, and automation-driven solutions.",
    achievements: [
      "Implemented GANs, VAEs, and diffusion models for assignments and research",
      "Developed ML pipelines for medical segmentation and anomaly detection",
      "Built LLM-powered internal assistants and RAG workflows for documentation",
      "Worked on computer vision projects including object detection and image classification",
      "Collaborated on research papers and open-source AI projects"
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Hugging Face", "RAG", "LLMs"]
  }
]

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Professional <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Experience</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Combining production-grade backend engineering with cutting-edge AI/ML research
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-8 pb-12 last:pb-0"
          >
            {/* Timeline line */}
            {index < experiences.length - 1 && (
              <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/30 to-emerald-400/30" />
            )}

            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-slate-950" />
            </div>

            {/* Content */}
            <div className="ml-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-blue-400/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-50">{exp.role}</h3>
                    <p className="text-lg text-slate-300">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-100 font-medium">{exp.period}</p>
                    <p className="text-sm text-slate-400">{exp.location}</p>
                  </div>
                </div>

                <p className="text-slate-300 mb-6">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-200 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-2 h-2 w-2 rounded-full bg-blue-400 flex-shrink-0" />
                        <span className="text-slate-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-200 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}