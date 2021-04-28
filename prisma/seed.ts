import { readFileSync, writeFileSync } from "fs"

import { PrismaClient } from "@prisma/client"
import { createHash } from "crypto"
import { join } from "path"

const db = new PrismaClient()

type Channels = {
  channels: { id: number; name: string }[]
  sensors: {
    field1: string
    field2: string
    field3: string
    field4: string
  }
}

const main = async () => {
  const data = readFileSync(join(__dirname, "data", "channels.json"), "utf-8")

  const { channels, sensors }: Channels = JSON.parse(data)
  const logs: string[] = []

  for (let channel of channels) {
    const api_key = createHash("md5").update(channel.name).digest("hex")
    await db.channel.upsert({
      where: { id: channel.id },
      update: { ...channel, ...sensors, api_key },
      create: { ...channel, ...sensors, api_key },
    })
    const log = `[${channel.id}] ${channel.name}\t [api_key]: ${api_key}`
    console.log(log)
    logs.push(log)
  }
  const apiPath = join(__dirname, "..", "api.log")
  writeFileSync(apiPath, logs.join("\n"))
}

main()
  .then()
  .catch(console.error)
  .finally(() => {
    db.$disconnect()
  })
