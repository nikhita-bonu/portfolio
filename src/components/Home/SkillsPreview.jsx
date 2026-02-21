import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const skillCategories = [
	{
		category: 'Frontend',
		items: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Streamlit'],
		icon: '🖥️',
	},
	{
		category: 'Backend',
		items: ['Java', 'Python', 'Spring Boot', 'Node.js', 'REST APIs', 'Microservices'],
		icon: '🧩',
	},
	{
		category: 'AI/ML',
		items: ['PyTorch', 'TensorFlow', 'NLP', 'Computer Vision', 'LLMs', 'RAG Systems'],
		icon: '🤖',
	},
	{
		category: 'Cloud & DevOps',
		items: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD pipelines'],
		icon: '🚀',
	},
]

export default function SkillsPreview() {
	return (
		<section className="container mx-auto">
			<div className="text-center mb-10">
				<span className="inline-block text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">
					Technical Skills
				</span>
				<h2 className="text-3xl font-bold mb-4">
					From Full-Stack to{' '}
					<span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
						Applied AI
					</span>
				</h2>
				<p className="text-slate-400 max-w-2xl mx-auto">
					A broad range of technologies and frameworks across software engineering, cloud infrastructure, and
					machine learning
				</p>
			</div>

			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
				{skillCategories.map((category, idx) => (
					<motion.div
						key={category.category}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: idx * 0.1 }}
						className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-blue-400/50 transition-all hover:scale-105"
					>
						<div className="text-2xl mb-4">{category.icon}</div>
						<h3 className="text-lg font-semibold mb-4">{category.category}</h3>
						<div className="flex flex-wrap gap-2">
							{category.items.map((item) => (
								<span
									key={item}
									className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-300 border border-slate-700"
								>
									{item}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</div>

			<div className="text-center">
				<Link
					to="/about"
					className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 hover:border-slate-500 hover:bg-slate-900 transition-colors"
				>
					View Complete Skillset
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