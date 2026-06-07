import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const education = [
	{
		degree: 'B.Tech in Computer Science & Engineering',
		school: 'KL Univeristy',
		period: 'May 2017 – June 2021',
		focus: 'Specialization: Artificial intelligence & Software Systems',
		courses: [
            'Computer Vision & Perception',
			'Data Structures & Algorithms',
			'Software Development',
			'Databases',
			'Operating Systems',
		],
		research: 'Designed and developed a Library Database Management System — handling book inventory, member records, and transaction tracking using core database and software engineering principles.',
	},
	{
		degree: 'M.S. in Computer Science',
		school: 'Texas Tech University',
		period: 'Jan 2025 – May 2026',
		focus: 'Specialization: Machine Learning & Generative AI',
		courses: [
			'Generative AI',
			'Machine Learning',
			'Neural Networks',
			'Network Security',
			'Data Science',
		],
		research: 'Exploring applied machine learning and advanced LLM systems, building intelligent automation workflows powered by RAG, and transforming research into real-world AI solutions.',
	},
]

export default function EducationPreview() {
	return (
		<section className="container mx-auto">
			<div className="text-center mb-10">
				<span className="inline-block text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">
					Academic Background
				</span>
				<h2 className="text-3xl font-bold mb-4">
					Education &{' '}
					<span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
						Research Focus
					</span>
				</h2>
				<p className="text-slate-400 max-w-2xl mx-auto">
					From algorithms and data structures to building real-world AI systems.
				</p>
			</div>

			<div className="grid md:grid-cols-2 gap-8 mb-10">
				{education.map((edu, idx) => (
					<motion.div
						key={edu.degree}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: idx * 0.2 }}
						className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-emerald-400/50 transition-all hover:scale-[1.02]"
					>
						<div className="mb-6">
							<div className="flex justify-between items-start mb-2">
								<div>
									<h3 className="text-xl font-bold text-slate-50">
										{edu.degree}
									</h3>
									<p className="text-slate-400">{edu.school}</p>
								</div>
								<span className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-300 border border-slate-700">
									{edu.period}
								</span>
							</div>
							<p className="text-sm text-blue-300 font-medium">
								{edu.focus}
							</p>
						</div>

						<div>
							<p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">
								Key Courses
							</p>
							<div className="flex flex-wrap gap-2">
								{edu.courses.map((course) => (
									<span
										key={course}
										className="px-3 py-1.5 rounded-lg text-xs bg-slate-800/70 text-slate-300 border border-slate-700"
									>
										{course}
									</span>
								))}
							</div>
						</div>

						{edu.research && (
							<div className="mt-4">
								{edu.degree && edu.degree.includes('M.S.') ? (
									<div>
										<div className="text-xs text-blue-300 font-medium mb-2">
											Current Research
										</div>
										<p className="text-sm text-slate-300">
											{edu.research}
										</p>
									</div>
								) : (
									<div>
										<div className="text-xs text-blue-300 font-medium mb-2">
											Notable Project
										</div>
										<p className="text-sm text-slate-300">
											{edu.research}
										</p>
									</div>
								)}
							</div>
						)}

						<div className="mt-6 pt-6 border-t border-slate-800">
							<Link
								to="/projects"
								className="flex items-center justify-between group"
							>
								<span className="text-sm text-slate-400 group-hover:text-blue-300 transition-colors">
									Research & Projects
								</span>
								<span className="text-xs text-slate-500 group-hover:text-blue-300 transition-colors">
									→
								</span>
							</Link>
						</div>
					</motion.div>
				))}
			</div>

			<div className="text-center">
				<Link
					to="/education"
					className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 hover:border-slate-500 hover:bg-slate-900 transition-colors"
				>
					View Full Education Details
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