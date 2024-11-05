'use client'
import Entrada from '@/components/Entrada'
import { useEffect, useState } from 'react'

type Tipo = {
  id: number
  nombre: string
}

const Home = () => {
  const [tipos, setTipos] = useState<Tipo[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://san-alberto.vercel.app/api/entries')
        if (!response.ok) {
          throw new Error('Error en la red')
        }
        const jsonData = await response.json()
        console.log(jsonData)
        setTipos(jsonData.tipos) // Almacena el resultado en el estado
      } catch (error) {
        console.error('Error al obtener los datos:', error)
      }
    }

    fetchData() // Llama a la función para obtener datos
  }, []) // Se ejecuta solo una vez al montar el componente

  return (
    <main className='mx-10 mt-4'>
      <h1>Bienvenido</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-auto gap-x-5 gap-y-5'>
        {
          tipos.map((tipo) => (
            // eslint-disable-next-line react/jsx-key
            <Entrada tipoEntrada={tipo.nombre} />
          ))

        }
      </div>

    </main>
  )
}

export default Home
