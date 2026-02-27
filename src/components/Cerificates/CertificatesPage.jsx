import { motion } from 'framer-motion'
import { useState } from 'react'
import awsAiBadge from '../../assets/aws-aif.png'
import awsMlaBadge from '../../assets/aws-mla.png'

const certifications = [
	{
		name: 'AWS Certified AI Practitioner (AIF-C01)',
		issuer: 'Amazon Web Services (Credly)',
		issued: 'January 02, 2026',
		expires: 'January 12, 2029',
		credential: 'AWS-AIF-XXXXX',
		summary: 'Developed foundational expertise in AI, Generative AI, and AWS AI services with a strong understanding of responsible and scalable AI solutions.',
		skills: [
			'AI & Machine Learning Fundamentals',
			'Generative AI & Large Language Models (LLMs)',
			'Amazon SageMaker & Amazon Bedrock',
			'Responsible AI & Model Governance',
		],
		verifyUrl: 'https://www.credly.com/badges/edd8ab36-efca-4d2b-8372-f681b672eaa1',
	},
	{
		name: 'AWS Certified Machine Learning Engineer – Associate (MLA-C01)',
		issuer: 'Amazon Web Services (Credly)',
		issued: 'January 12, 2026',
		expires: 'January 12, 2029',
		credential: 'AWS-MLA-XXXXX',
		summary: 'Engineered and operationalized production-grade machine learning solutions and end-to-end ML pipelines on AWS.',
		skills: [
			'ML Pipeline Development on AWS',
			'Amazon SageMaker',
			'Data Engineering for ML',
			'Model Deployment & Monitoring',
			'MLOps & ML Security',
		],
		verifyUrl: 'https://www.credly.com/badges/a259abc9-86a3-4248-987b-580734468c19',
	},
]

export default function CertificatesPage() {
    const [expandedCertIndex, setExpandedCertIndex] = useState(null)
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

 			<div className="grid md:grid-cols-2 gap-6">
 				{certifications.map((cert, index) => (
 					<motion.div
 						key={cert.name}
 						initial={{ opacity: 0, y: 30 }}
 						whileInView={{ opacity: 1, y: 0 }}
 						viewport={{ once: true }}
 						transition={{ duration: 0.4, delay: index * 0.1 }}
 						className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-blue-400/50 transition-all"
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
 							<div className="flex items-start gap-4 mb-6">
 								<div className="h-16 w-16 rounded-xl flex items-center justify-center overflow-hidden bg-transparent flex-shrink-0">
 									{(cert.name && cert.name.toLowerCase().includes('ai practitioner')) ? (
 										<img src={awsAiBadge} alt="AWS AI badge" className="h-full w-full object-contain" />
 									) : (
 										<img src={awsMlaBadge} alt="AWS ML badge" className="h-full w-full object-contain" />
 									)}
 								</div>
 								<div>
 									<h3 className="text-xl font-bold text-slate-50 group-hover:text-blue-300 transition-colors">{cert.name}</h3>
 									<p className="text-slate-400">{cert.issuer}</p>
 								</div>
 							</div>

 							<p className="text-slate-300 text-sm mb-6 line-clamp-3">{cert.summary}</p>

 							<div className="space-y-4">
 								<div>
 									<p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">Details</p>
 									<div className="grid grid-cols-2 gap-2 text-sm text-slate-200">
 										<div>
 											<p className="text-slate-400">Issued</p>
 											<p className="text-slate-200">{cert.issued}</p>
 										</div>
 										<div>
 											<p className="text-slate-400">Expires</p>
 											<p className="text-slate-200">{cert.expires}</p>
 										</div>
 										<div className="col-span-2">
 											<p className="text-slate-400">Credential ID</p>
 											<p className="text-slate-200 font-mono text-xs">{cert.credential}</p>
 										</div>
 									</div>
 								</div>

 								<div>
 									<p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">Skills</p>
 									<div className="flex flex-wrap gap-2">
 										{(expandedCertIndex === index ? cert.skills : cert.skills.slice(0, 3)).map((skill) => (
 											<span key={skill} className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-300">{skill}</span>
 										))}
 										{cert.skills.length > 3 && (
 											<button
 												onClick={() => setExpandedCertIndex(expandedCertIndex === index ? null : index)}
 												className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-300 border border-slate-700"
 											>
 												{expandedCertIndex === index ? 'Show less' : `+${cert.skills.length - 3}`}
 											</button>
 											)}
 									</div>
 								</div>

 								<div className="mt-6 pt-6 border-t border-slate-800">
 									<a href={cert.verifyUrl || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors">
 										Verify Certificate
 										<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
 										</svg>
 									</a>
 								</div>
 							</div>
 						</div>
 					</motion.div>
 				))}
 			</div>
 		</div>
 	)
}