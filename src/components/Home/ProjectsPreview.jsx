import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const projects = [
	{
		title: 'Fingerprint-Based Blood Group Prediction',
		category: 'Computer Vision • Biometric Analysis',
		description:
			'Developed a non-invasive blood group classification system predicting 8 ABO/Rh types from fingerprint images using classical ML and deep learning. Built an end-to-end pipeline covering preprocessing, feature engineering, transfer learning, model comparison, and evaluation on ~6,000 samples.',
		tech: ['Python', 'TensorFlow', 'OpenCV','ResNet50'],
		featured: true,
	},
	{
		title: 'Customer Churn Prediction Using Classification Models',
		category: 'Supervised Learning • Classification Models',
		description: 'Engineered a churn prediction system on the Telco dataset (7,043 records, 20 features), implementing end-to-end preprocessing, SMOTE-based imbalance handling, cross-validated model training, and a reusable deployment-ready prediction pipeline.',
		tech: ['Pandas', 'NumPy', 'Scikit-learn', 'Random Forest', 'XGBoost'],
		featured: true,
	},
	{
		title: 'Improving Diffusion Models for Medical Anomaly Detection',
		category: 'Generative AI • Diffusion Models',
		description: 'Developed a diffusion-based brain MRI anomaly detection system (BRATS 2020) using classifier-guided DDPM/DDIM. Enhanced tumor localization with SSIM-weighted scoring, patch-based diffusion, and Gaussian post-processing, and packaged the pipeline with a ResNet-guided classifier and Tkinter GUI for experimentation.',
		tech: ['Generative AI', 'Diffusion Models', 'Anomaly Detection'],
		featured: true,
	},
]

export default function ProjectsPreview() {
  const [expandedIndex, setExpandedIndex] = useState(null)
	return (
		<section className="container mx-auto">
			<div className="text-center mb-10">
				<span className="inline-block text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">
					Featured Work
				</span>
				<h2 className="text-3xl font-bold mb-4">
					Selected{' '}
					<span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
						Projects
					</span>
				</h2>
				<p className="text-slate-400 max-w-2xl mx-auto">
					Projects spanning AI research, scalable backend systems, and intelligent
					automation — demonstrating how I translate ideas into working systems.
				</p>
			</div>

			<div className="grid md:grid-cols-3 gap-6 mb-10">
				{projects.map((project, idx) => (
					<motion.div
						key={project.title}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: idx * 0.15 }}
						className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-blue-400/50 transition-all hover:scale-[1.02]"
					>
						<div className="p-6">
							<div className="mb-4">
								<span className="text-xs text-slate-500">
									{project.category}
								</span>
							</div>

							<h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
								{project.title}
							</h3>

							{expandedIndex === idx ? (
								<p className="text-slate-400 text-sm mb-6">{project.description}</p>
							) : (
								<p className="text-slate-400 text-sm mb-6 line-clamp-2">{project.description}</p>
							)}

							{/* Read more / Show less for long descriptions */}
							{project.description && (
								<div className="mb-4">
									{expandedIndex === idx ? (
										<button onClick={() => setExpandedIndex(null)} className="text-sm text-slate-300 hover:text-blue-400">Show less</button>
									) : (
										<button onClick={() => setExpandedIndex(idx)} className="text-sm text-blue-400">Read more</button>
									)}
								</div>
							)}

							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech) => (
									<span
										key={tech}
										className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-300"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</motion.div>
				))}
			</div>

			<div className="text-center">
				<Link
					to="/projects"
					className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3 text-sm font-medium text-white hover:scale-105 transition-transform"
				>
					View All Projects
					<svg
						className="w-4 h-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
				</Link>
			</div>
		</section>
	)
}