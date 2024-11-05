import Entrada from '@/components/Entrada'

const Home = () => {
  return (
    <main className='mx-10 mt-4'>
      <h1>Bienvenido</h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 h-auto gap-x-5 gap-y-5'>
        <Entrada tipoEntrada="MARTES" />
        <Entrada tipoEntrada="JUEVES_1" />
        <Entrada tipoEntrada="JUEVES_2" />
        <Entrada tipoEntrada="JUEVES_3" />
        <Entrada tipoEntrada="CAPEA" />

      </div>

    </main>
  )
}

export default Home
