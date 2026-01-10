import { motion } from 'framer-motion'
import Hero from '../components/Home/Hero'
import AboutPreview from '../components/Home/AboutPreview'
import SkillsPreview from '../components/Home/SkillsPreview'
import ExperiencePreview from '../components/Home/ExperiencePreview'
import ProjectsPreview from '../components/Home/ProjectsPreview'
import EducationPreview from '../components/Home/EducationPreview'
import ContactPreview from '../components/Home/ContactPreview'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
}

export default function LandingPage() {
  return (
    <div className="space-y-32 pb-24 pt-32 px-4">
      <Hero />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        custom={0.1}
      >
        <AboutPreview />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        custom={0.2}
      >
        <SkillsPreview />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        custom={0.3}
      >
        <ExperiencePreview />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        custom={0.4}
      >
        <ProjectsPreview />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        custom={0.5}
      >
        <EducationPreview />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        custom={0.6}
      >
        <ContactPreview />
      </motion.div>
    </div>
  )
}