import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

export const restartHandler = async () => {
  const msg = "Disconnect Database"
  return db.$disconnect().then(() => msg)
}

restartHandler().then(console.log).catch(console.error)
