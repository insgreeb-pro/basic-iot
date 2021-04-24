import { RequestHandler } from "express"

export const logger: RequestHandler = async (req, _, next) => {
  const date = new Date().toISOString()
  const { method, url } = req
  console.log(`[${date}] ${method} - ${url}`)
  next()
}
