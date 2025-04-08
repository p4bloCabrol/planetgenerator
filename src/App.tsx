import { useState } from 'react'
import { generatePlanet } from './utils/generatePlanet'
import { PlanetCard } from './components/PlanetCard'

export default function App() {
  const [planet, setPlanet] = useState(generatePlanet())

  const handleGenerate = () => {
    setPlanet(generatePlanet())
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 p-4">
      <h1 className="text-3xl font-bold">Generador de Planetas</h1>
      <PlanetCard {...planet} />
      <button
        onClick={handleGenerate}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition"
      >
        Generar nuevo planeta
      </button>
    </main>
  )
}
