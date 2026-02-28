import { motion } from 'framer-motion'
import { useState } from 'react'
import awsAiBadge from '../../assets/aws-aif.png'
import awsMlaBadge from '../../assets/aws-mla.png'

const education = [
	{
		degree: 'M.S. in Computer Science',
		school: 'Texas Tech University',
		period: 'Jan 2025 – May 2026',
		location: 'Lubbock, Texas, USA',
		gpa: '3.70/4.0',
		description: 'Focus on Generative AI, Machine Learning, and Advanced Operating Systems',
		courses: [
			'Generative AI',
            'Machine Learning',
            'Neural Networks',
            'Data Science',
			'Network Security',
			'Advanced Operating Systems',
			'Analysis of Algorithms',
		],
	},
	{
		degree: 'B.Tech in Computer Science & Engineering',
		school: 'KL University',
		period: 'May 2017 – June 2021',
		location: 'Guntur, Andhra Pradesh, India',
		gpa: '3.60/4.0',
		description: 'Strong foundation in computer science fundamentals, algorithms, and software engineering',
		courses: [
			'Computer Vision & Perception',
			'Data Structures & Algorithms',
			'Operating Systems',
			'Computer Networks',
			'Software Engineering',
			'Database Management Systems',
			'Enterprise Programming',
      'Probability and Statistics'
		],
	},
]

export default function EducationPage() {
	const [copied, setCopied] = useState(null)

	function handleVerify(cert, idx) {
		if (cert.verifyUrl) {
			window.open(cert.verifyUrl, '_blank')
			return
		}
		if (navigator?.clipboard && cert.credential) {
			navigator.clipboard.writeText(cert.credential)
			setCopied(idx)
			setTimeout(() => setCopied(null), 1500)
		}
	}

	return (
		<div className="container mx-auto px-4 py-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center mb-16"
			>
				<h1 className="text-4xl md:text-5xl font-bold mb-6">
					My{' '}
					<span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
						Education
					</span>
				</h1>
				<p className="text-xl text-slate-400 max-w-3xl mx-auto text-center">
					Academic background in Computer Science and AI
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
											<h3 className="text-2xl font-bold text-slate-50">
												{edu.degree}
											</h3>
											<p className="text-lg text-slate-300">
												{edu.school}
											</p>
										</div>
										<div className="text-right">
											<p className="text-slate-100 font-medium">
												{edu.period}
											</p>
											<p className="text-sm text-slate-400">
												{edu.location}
											</p>
											<p className="text-sm text-blue-300 font-medium">
												GPA: {edu.gpa}
											</p>
										</div>
									</div>

									<p className="text-slate-300 mb-6">
										{edu.description}
									</p>

									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<h4 className="text-lg font-semibold text-slate-200 mb-3">
												Key Courses
											</h4>
											<ul className="space-y-2">
												{edu.courses.map((course, idx) => (
													<li
														key={idx}
														className="flex items-center gap-2"
													>
														<div className="h-2 w-2 rounded-full bg-blue-400" />
														<span className="text-slate-300">
															{course}
														</span>
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
				{/* Certifications moved to a dedicated Certificates page per request */}
			</div>
		</div>
	)
}