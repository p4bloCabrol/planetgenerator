// utils/nameGenerator.ts
const syllables = ['zor', 'an', 'tu', 'kre', 'lek', 'no', 'mir', 'qa', 'vus', 'el', 'dra']

export function generateName() {
  const name = Array.from({ length: 3 }, () => syllables[Math.floor(Math.random() * syllables.length)]).join('')
  return name.charAt(0).toUpperCase() + name.slice(1)
}