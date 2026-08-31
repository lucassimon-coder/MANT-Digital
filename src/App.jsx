import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import ValueProposition from './sections/ValueProposition'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-zinc-900 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ValueProposition />
      </main>
    </div>
  )
}
