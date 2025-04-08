import { generateName } from '../utils/nameGenerator'

const types = ['Rocoso', 'Gaseoso', 'Acuático', 'Volcánico', 'Helado', 'Metálico']

export function generatePlanet() {
  return {
    name: generateName(),
    type: types[Math.floor(Math.random() * types.length)],
    gravity: (Math.random() * 20).toFixed(2),
    temperature: (Math.random() * 500 - 200).toFixed(1), // de -200 a 300 °C
    hasLife: Math.random() > 0.6,
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