import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import LandingPage from './pages/LandingPage'
import AboutPage from './components/About/AboutPage'
import ExperiencePage from './components/Experience/ExperiencePage'
import ProjectsPage from './components/Projects/ProjectsPage'
import EducationPage from './components/Education/EducationPage'
import CertificatesPage from './components/Cerificates/CertificatesPage'
import ContactPage from './components/Contact/ContactPage'
import NotFound from './pages/NotFound'
import SkillsPage from './components/Skills/SkillsPage'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="certificates" element={<CertificatesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App