import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import ValueProposition from './sections/ValueProposition'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Process from './sections/Process'
import About from './sections/About'
import Cta from './sections/Cta'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-zinc-900 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ValueProposition />
        <Services />
        <Projects />
        <Process />
        <About />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
