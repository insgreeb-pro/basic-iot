import { PrismaClient } from "@prisma/client"
import { createHash } from "crypto"
import { join } from "path"
import { readFileSync } from "fs"

const db = new PrismaClient()

const main = async () => {
  const sensors = {
    field1: "Sensor 1",
    field2: "Sensor 2",
    field3: "Sensor 3",
    field4: "Sensor 4",
  }
  const data = readFileSync(join(__dirname, "data", "channels.json"), "utf-8")
  const channels: { id: number; name: string }[] = JSON.parse(data)
  for (let channel of channels) {
    const api_key = createHash("md5").update(channel.name).digest("hex")
    await db.channel.upsert({
      where: { id: channel.id },
      update: { ...channel, ...sensors, api_key },
      create: { ...channel, ...sensors, api_key },
    })
    console.log(`[${channel.id}]:${channel.name}`, "--- api_key:", api_key)
  }
}

main()
  .then()
  .catch(console.error)
  .finally(() => {
    db.$disconnect()
  })
