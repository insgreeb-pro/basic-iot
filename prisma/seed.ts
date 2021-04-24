import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

const main = async () => {}

main()
  .then()
  .catch(console.error)
  .finally(() => {
    db.$disconnect()
  })
