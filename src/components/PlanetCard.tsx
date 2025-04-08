type PlanetProps = {
    name: string
    type: string
    gravity: string
    temperature: string
    hasLife: boolean
    description: string
  }
  
  export const PlanetCard = ({
    name,
    type,
    gravity,
    temperature,
    hasLife,
    description
  }: PlanetProps) => {
    return (
      <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <p><strong>Tipo:</strong> {type}</p>
        <p><strong>Gravedad:</strong> {gravity} m/s²</p>
        <p><strong>Temperatura:</strong> {temperature}°C</p>
        <p><strong>Vida:</strong> {hasLife ? 'Sí' : 'No'}</p>
        <p className="mt-2 italic text-gray-300">{description}</p>
      </div>
    )
  }