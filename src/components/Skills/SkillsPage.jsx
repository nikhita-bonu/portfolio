import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'

// Skill categories data
const skillCategories = [
	{
		title: 'Frontend Development',
		skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Streamlit'],
	},
	{
		title: 'Machine Learning & AI',
		skills: [
			'PyTorch',
			'TensorFlow',
			'Hugging Face Transformers',
			'MONAI',
			'OpenCV',
			'LLM',
			'RAG',
			'Agentic AI',
			'Prompt Engineering',
		],
	},
	{
		title: 'Databases & Storage',
		skills: [
			'SQL',
			'MySQL',
			'Relational Databases',
			'MongoDB',
			'Redis',
			'Bigtable',
			'Vector Databases',
		],
	},
	{
		title: 'Cloud & DevOps',
		skills: [
			'AWS',
			'Linux',
			'Docker',
			'Kubernetes',
			'Jenkins',
			'Git',
			'GitHub',
			'Bitbucket',
			'CI/CD',
			'JIRA',
			'Confluence',
			'Ansible',
			'Maven',
			'Gradle',
			'MLOps',
		],
	},
	{
		title: 'Backend Engineering',
		skills: [
			'Java (Spring Boot)',
			'Python',
			'Microservices Architecture',
			'RESTful API Design',
			'Scalable System Design',
			'Workflow Automation (n8n)',
			'Maven',
			'Gradle',
		],
	},
]

// Emoji map for category icons
const categoryEmoji = {
	'Frontend Development': '💻',
	'Machine Learning & AI': '🤖',
	'Databases & Storage': '🗄️',
	'Cloud & DevOps': '☁️',
	'Backend Engineering': '⚙️',
}

// Color / gradient map for the circular emoji backgrounds (logo-like)
const categoryColor = {
	'Frontend Development': 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
	'Machine Learning & AI': 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
	'Databases & Storage': 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
	'Cloud & DevOps': 'linear-gradient(135deg, #0ea5a4 0%, #6366f1 100%)',
	'Backend Engineering': 'linear-gradient(135deg, #ef4444 0%, #ef9a9a 100%)',
}

export default function SkillsPage() {
	const [query, setQuery] = useState('')

	const filtered = useMemo(() => {
		if (!query.trim()) return skillCategories
		const q = query.toLowerCase()
		return skillCategories
			.map((cat) => ({
				...cat,
				skills: cat.skills.filter((s) => s.toLowerCase().includes(q)),
			}))
			.filter((cat) => cat.skills.length > 0)
	}, [query])

	return (
		<div className="container mx-auto px-4 py-20">
			{/* Hero Section */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center mb-8"
			>
				<h1 className="text-4xl md:text-5xl font-bold mb-4">
					Technical{' '}
					<span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
						Skills
					</span>
				</h1>
				<p className="text-lg text-slate-400 max-w-2xl mx-auto">
					A concise, interactive view of my technical toolkit — filter, explore and
					discover.
				</p>
			</motion.div>

			{/* Search */}
			<div className="max-w-2xl mx-auto mb-8">
				<div className="relative">
					<input
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Search skills or keywords (e.g. React, PyTorch, Docker)"
						className="w-full rounded-full border border-slate-800 bg-slate-900/50 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
					/>
				</div>
			</div>

			{/* Skills Grid */}
			<div className="grid md:grid-cols-2 gap-6">
				{filtered.map((category, index) => (
					<motion.div
						key={category.title}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: index * 0.08 }}
						className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 transition-all"
					>
						<div className="flex items-center justify-between mb-4">
							<div className="flex items-center gap-3">
								{/* Emoji icon - simplified: emoji only on round background */}
								<div className="relative h-10 w-10 flex-shrink-0">
									{/* background layer - use Cloud & DevOps gradient for all badges */}
									<div
										className="absolute inset-0 rounded-full"
										style={{
											background: 'linear-gradient(135deg, #0f172a 0%, #0ea5a4 40%, #6366f1 100%)',
											boxShadow: 'inset 0 -6px 14px rgba(2,6,23,0.6), 0 6px 20px rgba(3,7,18,0.6)',
										}}
									/>
									{/* glossy highlight */}
									<div
										className="absolute inset-0 rounded-full pointer-events-none"
										style={{
											background:
												'radial-gradient(60% 40% at 30% 25%, rgba(255,255,255,0.12), rgba(255,255,255,0.02) 30%, transparent 60%)',
										}}
									/>
									{/* emoji/content */}
									<div className="relative z-10 flex h-full w-full items-center justify-center text-lg text-white select-none">
										<span>{categoryEmoji[category.title] || '⭐'}</span>
									</div>
								</div>
								<div>
									<h3 className="text-lg font-bold text-slate-100">
										{category.title}
									</h3>
									<p className="text-xs text-slate-400">
										{category.skills.length} items
									</p>
								</div>
							</div>
						</div>

						<div>
							<div className="flex flex-wrap gap-2">
								{category.skills.map((skill, i) => (
									<motion.span
										key={skill}
										initial={{ opacity: 0, scale: 0.95 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ delay: i * 0.03 }}
										className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/60 text-slate-300 text-sm border border-slate-700 hover:border-blue-400 transition-all"
									>
										<span>{skill}</span>
									</motion.span>
								))}
							</div>
						</div>
					</motion.div>
				))}

				{filtered.length === 0 && (
					<div className="col-span-full text-center text-slate-400 py-12">
						No skills matched your search.
					</div>
				)}
			</div>

			{/* Optional footer note */}
			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.4 }}
				className="text-center text-slate-500 mt-12 text-sm"
			>
				* Continuously learning and expanding this skillset
			</motion.p>
		</div>
	)
}
