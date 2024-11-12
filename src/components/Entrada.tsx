'use client'
import Flecha from './Flecha'
import { useState, useEffect } from 'react'

const Entrada = ({ tipoEntrada }: { tipoEntrada: string }) => {
  const [total, setTotal] = useState(null)

  const [dinero, setDinero] = useState(0)

  const precio = tipoEntrada === 'MARTES' ? 5 : tipoEntrada === 'JUEVES_1' ? 7 : tipoEntrada === 'JUEVES_2' ? 7 : tipoEntrada === 'JUEVES_3' ? 9 : tipoEntrada === 'SABADO' ? 10 : tipoEntrada === 'CAPEA' ? 25 : tipoEntrada === 'VIPS_ROPA' ? 3 : tipoEntrada === 'VIPS_BEBIDA' ? 3 : tipoEntrada === 'VIPS_NORMAL' ? 7 : 0
  const ganancias = precio * 0.2

  const fetchingData = async (tipo: string, accion: string) => {
    try {
      const response = await fetch('https://san-alberto.vercel.app/api', {
        method: 'POST',
        body: JSON.stringify({ tipoEntrada: tipo, accion }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const { nuevaCantidad } = await response.json()
      setTotal(nuevaCantidad)
      setDinero(nuevaCantidad * precio)
    } catch (error) {
      console.error('Error al actualizar la cantidad:', error)
    }
  }

  const getTotal = async (tipo: string) => {
    try {
      const response = await fetch(`https://san-alberto.vercel.app/api?tipoEntrada=${tipo}`, {
        method: 'GET'
      })
      const { total } = await response.json()
      return total
    } catch (error) {
      console.error('Error al obtener el total:', error)
      return 0 // Retorna 0 o algún valor predeterminado en caso de error
    }
  }

  useEffect(() => {
    getTotal(tipoEntrada).then((totalGET) => {
      setTotal(totalGET)
      setDinero(totalGET * precio)
    })
  }, [])

  const increaseButton = async () => {
    await fetchingData(tipoEntrada, 'increase')
  }

  const decreaseButton = async () => {
    await fetchingData(tipoEntrada, 'decrease')
  }

  return (

      <div className="border-black border-2 h-full rounded-3xl flex flex-col">
          <>
          <button className="bg-gray-300 rounded-t-3xl flex justify-center items-center hover:text-white"
            onClick={increaseButton}
          >
            <Flecha />
          </button>
          <h1 className='py-5 px-10 flex overflow-hidden items-center justify-center font-bold text-5xl sm:text-4xl md:text-2xl lg:text-4xl xl:text-5xl '>{tipoEntrada}</h1>
          <button className="bg-gray-300 flex justify-center items-center hover:text-white"
            onClick={decreaseButton}
          >
            <Flecha rotated />
          </button>
          <p className='text-xl text-center font-semibold'>TOTAL: {total}</p>
          <p className='text-xl text-center font-semibold'>DINERO: {dinero}</p>
          <p className='text-xl text-center font-semibold'>GANANCIAS: {total != null ? Math.trunc(ganancias * total) : 0}</p>
          </ >

      </div>

  )
}

export default Entrada
