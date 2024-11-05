import sql from './db'

const getTotal = async (type:string) => {
  const total = await sql`SELECT cantidad FROM entradas e, tipos_entradas t WHERE t.nombre = ${type} and t.id=e.tipo_id`
  return total.length > 0 ? total[0].cantidad : 0
}

const increase = async (type:string) => {
  try {
    await sql`
      UPDATE entradas 
      SET cantidad = cantidad + 1 
      WHERE tipo_id = (
        SELECT id FROM tipos_entradas WHERE nombre = ${type}
      )
    `

    return await getTotal(type)
  } catch (error) {
    console.error('Error updating entry count:', error)
  }
}

const decrease = async (type:string) => {
  try {
    await sql`
      UPDATE entradas 
      SET cantidad = GREATEST(cantidad - 1, 0)
      WHERE tipo_id = (
        SELECT id FROM tipos_entradas WHERE nombre = ${type}
      )
    `

    return await getTotal(type)
  } catch (error) {
    console.error('Error updating entry count:', error)
  }
}

export { getTotal, increase, decrease }
