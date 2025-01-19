import './App.css'
import { HeroSection } from './components/features/HeroSection'
import { AboutSection } from './components/features/AboutSection'
import { WorkExperience } from './components/features/WorkExperience'
import { Skills } from './components/features/Skills'
import { Education } from './components/features/Education'
// import { Projects } from './components/features/Projects'
import { Contact } from './components/features/Contact'
function App() {

  return (
    <div className="text-left">
      <HeroSection />
      <AboutSection />
      <WorkExperience />
      <Education />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </div>
  )
}

export default App
