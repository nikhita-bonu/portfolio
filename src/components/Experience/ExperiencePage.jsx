import { motion } from 'framer-motion'

const experiences = [
	{
		role: "Product Development Intern",
		company: "Erevna Games",
		period: "Feb 2026 – Apr 2026",
		location: "Lubbock, USA",
		description: "Engineered agentic AI workflows leveraging Microsoft Copilot to automate dynamic game logic and enhance real-time user interactions. Designed and validated production-grade generative AI features through comprehensive end-to-end and system-level testing to ensure reliability, performance, and scalability.",
		achievements: [
			"Engineered agentic AI workflows leveraging Microsoft Copilot to automate dynamic game logic and enhance real-time user interactions.",
			"Designed and validated production-grade generative AI features through comprehensive end-to-end and system-level testing to ensure reliability, performance, and scalability.",
			"Architected an AI-driven, demographic-aware notification system that increased user engagement by 30% through personalized targeting and asynchronous event processing.",
			"Collaborated cross-functionally with product, backend, and QA teams to translate business requirements into scalable AI-powered gaming platform features."
		],
		technologies: ["Microsoft Copilot", "Agentic AI", "Generative AI", "Asynchronous Processing", "A/B Testing"]
	},
	{
		role: "AI/ML Engineer",
		company: "Texas Tech University",
		period: "Mar 2025 – Jan 2026",
		location: "Lubbock, USA",
		description: "Designed and developed end-to-end AI/ML solutions leveraging computer vision, large language models, and intelligent automation, applying advanced segmentation techniques, rigorous performance evaluation, and LLM- and RAG-based workflows to deliver accurate, scalable, and autonomous systems.",
		achievements: [
			"Conducted research on AI-assisted analysis of LFA diagnostic test kits, automating detection and interpretation of test and control lines from video data.",
			"Applied SAM2 (Segment Anything-2) for precise strip-region segmentation, enabling more accurate feature extraction compared to traditional methods.",
			"Validated experimental results using diagnostic performance metrics, benchmarking automated outputs against human interpretation to ensure reliability.",
			"Designed and implemented end-to-end automation workflows in n8n, integrating REST APIs, webhooks, CRMs, databases, and SaaS tools to eliminate manual handoffs.",
			"Developed custom automation nodes and workflows using OpenAI, Google Sheets, Notion, and webhooks to enable seamless data analysis, summarization, and automated reporting.",
			"Integrated LLM- and RAG-based AI-agent capabilities into automation pipelines to enable intelligent decision-making, autonomous task execution, and dynamic workflow adaptation."
		],
		technologies: ["Python", "PyTorch", "OpenCV","SAM2", "Hugging Face", "RAG", "LLM","n8n"]
	},
	{
		role: "Software Engineer",
		company: "IVY Comptech - Entain",
		period: "Jan 2021 – Dec 2024",
		location: "Hyderabad, India",
		description: "Designed and developed scalable, enterprise-grade applications using Java (Spring Boot) and React.js, following HLD/LLD principles to build robust microservices architectures focused on performance, reliability, and maintainability.",
		achievements: [
			"Designed and developed RESTful microservices using Java (Spring Boot), enabling scalable inter-service communication and seamless integration with AI/ML inference APIs.",
			"Optimized complex SQL, MySQL, and MongoDB queries, improving data retrieval performance by up to 90% and supporting efficient data-driven workflows.",
			"Developed responsive and dynamic React.js interfaces, integrating backend services and implementing AI-enhanced UI features such as recommendations and real-time interactions.",
			"Implemented end-to-end CI/CD pipelines using Jenkins and Docker, automating builds, testing (JUnit & Postman), and deployments.",
			"Actively led code reviews and contributed to high-level and low-level system design discussions to improve maintainability and performance.",
			"Collaborated within Agile/Scrum teams to deliver high-quality features through iterative development cycles."
		],
		technologies: ["Java", "Spring Boot", "SQL","MongoDB","React.js","REST APIs","Junit","Postman","Jenkins","Microservices"]
	},

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
					Bridging Enterprise Software Engineering with Advanced AI and Automation
				</p>
			</motion.div>

			{/* Timeline */}
			<div className="max-w-2xl mx-auto">
				{experiences.map((exp, index) => (
					<motion.div
						key={exp.role}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: index * 0.2 }}
						className="relative pl-6 pb-12 last:pb-0"
					>
						{/* Timeline line */}
						{index < experiences.length - 1 && (
							<div className="absolute left-3 top-10 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/30 to-emerald-400/30" />
						)}

						{/* Timeline dot */}
						<div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 flex items-center justify-center">
							<div className="w-3 h-3 rounded-full bg-slate-950" />
						</div>

						{/* Content */}
						<div className="ml-6">
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
