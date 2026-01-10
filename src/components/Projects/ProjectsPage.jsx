import { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: "Blood Group Prediction from Fingerprints",
    category: "Computer Vision • Healthcare",
    description: "Built an end-to-end pipeline to predict blood groups from fingerprint images using ResNet-50 and advanced augmentation techniques. The system includes data preprocessing, model training, and deployment components.",
    longDescription: "This project involved creating a complete ML pipeline for blood group prediction using fingerprint images. Implemented data augmentation strategies to handle limited dataset, optimized ResNet-50 architecture for medical image classification, and deployed the model with an API for real-time predictions.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "AWS S3"],
    github: "https://github.com/nikhita-bonu",
    demo: null,
    featured: true,
    status: "Completed"
  },
  {
    id: 2,
    title: "Medical Diffusion for Brain MRI Anomaly Detection",
    category: "Generative AI • Medical Imaging",
    description: "Implemented DDPM-based diffusion models on brain MRI to learn healthy distributions and localize anomalies without pixel-level labels.",
    longDescription: "Research project focused on unsupervised anomaly detection in medical images. Developed diffusion models that learn normal brain MRI distributions and detect anomalies through reconstruction error. The model shows promising results on BRATS dataset for tumor detection.",
    tech: ["PyTorch", "UNet", "DDPM", "BRATS Dataset"],
    github: "https://github.com/nikhita-bonu",
    demo: null,
    featured: true,
    status: "Research"
  },
  {
    id: 3,
    title: "AI Social Media Automation",
    category: "Automation • LLM",
    description: "Designed n8n + LLM workflows to auto-generate, review, and schedule weekly social media posts with approval flows.",
    longDescription: "Automation system that generates social media content using LLMs, schedules posts, and includes approval workflows. Reduced manual content creation time by 70% while maintaining consistent brand voice across platforms.",
    tech: ["n8n", "OpenAI API", "Airtable", "Webhooks"],
    github: "https://github.com/nikhita-bonu",
    demo: null,
    featured: true,
    status: "Deployed"
  },
  {
    id: 4,
    title: "RAG-Based Network Security Tutor",
    category: "NLP • Education",
    description: "Retrieval-Augmented Generation system for network security education, providing personalized learning paths.",
    longDescription: "Built a RAG system using LangChain and vector databases to create an intelligent tutor for network security concepts. The system retrieves relevant information and generates explanations tailored to user's knowledge level.",
    tech: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI"],
    github: "https://github.com/nikhita-bonu",
    demo: null,
    featured: false,
    status: "In Progress"
  }
]

const categories = ['all', 'ai-ml', 'web', 'automation', 'research']

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          My <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          A collection of production systems, research projects, and automation work
        </p>
      </motion.div>

      {/* Filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap gap-2 justify-center mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full transition-all ${
              filter === cat
                ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white'
                : 'bg-slate-900 text-slate-400 hover:text-slate-300 hover:bg-slate-800'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-blue-400/50 transition-all hover:scale-[1.02]"
          >
            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-600/20 to-emerald-500/20 text-blue-300 border border-blue-400/30">
                  Featured
                </span>
              </div>
            )}

            {/* Status badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                project.status === 'Completed' ? 'bg-green-500/20 text-green-300' :
                project.status === 'Research' ? 'bg-blue-500/20 text-blue-300' :
                project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-300' :
                'bg-purple-500/20 text-purple-300'
              }`}>
                {project.status}
              </span>
            </div>

            <div className="p-6">
              <div className="mb-3">
                <span className="text-xs text-slate-500">{project.category}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  View Details →
                </button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs text-slate-500 mb-2 block">{selectedProject.category}</span>
                  <h3 className="text-2xl font-bold text-slate-50">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="h-8 w-8 rounded-full border border-slate-700 text-sm text-slate-400 hover:border-slate-500 hover:bg-slate-800 hover:text-slate-100"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-200 mb-2">Description</h4>
                  <p className="text-slate-300">{selectedProject.longDescription}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-200 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center rounded-lg bg-slate-800 px-4 py-3 text-slate-300 hover:bg-slate-700 transition-colors"
                  >
                    View on GitHub
                  </a>
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-3 text-white hover:opacity-90 transition-opacity"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}