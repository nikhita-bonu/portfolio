import { motion } from 'framer-motion'

const certificates = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    issueDate: "December 2023",
    expiryDate: "December 2026",
    credentialId: "AWS-ASA-12345",
    description: "Demonstrates knowledge of designing distributed systems on AWS.",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Networking"],
    verificationUrl: "https://aws.amazon.com/certification/"
  },
  {
    id: 2,
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    issueDate: "August 2022",
    expiryDate: "August 2025",
    credentialId: "G-TFDC-67890",
    description: "Validates proficiency in building and training ML models using TensorFlow.",
    skills: ["TensorFlow", "Machine Learning", "Deep Learning", "Python"],
    verificationUrl: "https://www.tensorflow.org/certificate"
  },
  {
    id: 3,
    name: "Docker Certified Associate",
    issuer: "Docker",
    issueDate: "May 2022",
    expiryDate: "May 2025",
    credentialId: "DCA-54321",
    description: "Validates skills in containerization, Docker environments, and orchestration.",
    skills: ["Docker", "Containerization", "CI/CD", "DevOps"],
    verificationUrl: "https://www.docker.com/certification"
  },
  {
    id: 4,
    name: "Google Cloud Associate Cloud Engineer",
    issuer: "Google Cloud",
    issueDate: "March 2022",
    expiryDate: "March 2025",
    credentialId: "GCP-ACE-98765",
    description: "Demonstrates ability to deploy applications, monitor operations, and manage cloud solutions.",
    skills: ["Google Cloud", "Cloud Infrastructure", "Kubernetes", "Networking"],
    verificationUrl: "https://cloud.google.com/certification"
  },
  {
    id: 5,
    name: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    issueDate: "January 2022",
    expiryDate: "No Expiry",
    credentialId: "MS-AI-24680",
    description: "Foundational knowledge of AI and machine learning on Azure.",
    skills: ["Azure AI", "Machine Learning", "Cognitive Services", "MLOps"],
    verificationUrl: "https://docs.microsoft.com/certifications"
  },
  {
    id: 6,
    name: "Kubernetes Application Developer",
    issuer: "Cloud Native Computing Foundation",
    issueDate: "November 2021",
    expiryDate: "November 2024",
    credentialId: "CKA-13579",
    description: "Validates skills in designing, building, and deploying cloud-native applications.",
    skills: ["Kubernetes", "Cloud Native", "Container Orchestration", "Microservices"],
    verificationUrl: "https://www.cncf.io/certification/cka/"
  }
]

export default function CertificatesPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Professional <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Certifications</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Validated expertise in cloud platforms, AI/ML frameworks, and DevOps technologies
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-blue-400/50 transition-all hover:scale-[1.02]"
          >
            {/* Badge ribbon */}
            <div className="absolute top-0 right-0">
              <div className="w-24 h-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24">
                  <div className="absolute transform rotate-45 bg-gradient-to-r from-blue-600 to-emerald-500 text-center text-white font-semibold py-1 right-[-48px] top-[16px] w-[170px]">
                    <span className="text-xs">CERTIFIED</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-blue-600/20 to-emerald-500/20 flex items-center justify-center">
                  <span className="text-2xl">
                    {cert.issuer.includes('AWS') ? '☁️' : 
                     cert.issuer.includes('Google') ? '🔍' : 
                     cert.issuer.includes('Docker') ? '🐳' : 
                     cert.issuer.includes('Microsoft') ? '💠' : '📜'}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-50 group-hover:text-blue-300 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-slate-400">{cert.issuer}</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm mb-6 line-clamp-3">
                {cert.description}
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">Details</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-slate-400">Issued</p>
                      <p className="text-slate-200">{cert.issueDate}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Expires</p>
                      <p className="text-slate-200">{cert.expiryDate}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-slate-400">Credential ID</p>
                      <p className="text-slate-200 font-mono text-xs">{cert.credentialId}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-300">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Verify Certificate
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}