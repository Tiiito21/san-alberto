import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
}
module.exports = {
  env: {
    DB_HOST: process.env.DATABASE_URL,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME
  }
}

export default nextConfig
