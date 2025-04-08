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
    description: generateLore()
  }
}

function generateLore() {
    const intros = [
      'Un planeta olvidado por el tiempo.',
      'Cuna de una antigua civilización galáctica.',
      'Habitado por formas de vida extrañas.',
      'Envuelto en tormentas eléctricas eternas.',
      'Cubierto por océanos sin fin.',
      'Su núcleo brilla con energía desconocida.'
    ]
    return intros[Math.floor(Math.random() * intros.length)]
  }