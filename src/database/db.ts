// db.js
import postgres from 'postgres'

const sql = postgres({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
  username: 'sanalberto',
  password: process.env.DB_PASS,
  database: 'san_alberto'

})
export default sql
