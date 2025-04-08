// utils/generatePlanet.ts
import { generateName } from './nameGenerator'

const planetTypes = ['Rocoso', 'Gaseoso', 'Acuático', 'Volcánico']

export function generatePlanet() {
  return {
    name: generateName(),
    type: planetTypes[Math.floor(Math.random() * planetTypes.length)],
    gravity: (Math.random() * 20).toFixed(2),
    temperature: (Math.random() * 500 - 200).toFixed(1), // °C
    hasLife: Math.random() > 0.5,
    description: 'Un planeta misterioso con características únicas.'
  }
}