import { RequestHandler } from "express"
import { db } from "../db"

export const update: RequestHandler = async (req, res) => {
  const client = db()
  try {
    const { api_key } = req.query

    if (typeof api_key !== "string") throw new Error("Not Authorized")

    const channel = await client.channel.findUnique({ where: { api_key } })

    if (channel === null) throw new Error("Not Authorized")

    const { field1, field2, field3, field4 } = req.query
    if (typeof field1 !== "string" && typeof field1 !== "undefined")
      throw new Error("Invalid Payload")
    if (typeof field2 !== "string" && typeof field2 !== "undefined")
      throw new Error("Invalid Payload")
    if (typeof field3 !== "string" && typeof field3 !== "undefined")
      throw new Error("Invalid Payload")
    if (typeof field4 !== "string" && typeof field4 !== "undefined")
      throw new Error("Invalid Payload")

    await client.feeds.create({
      data: {
        created_at: new Date(),
        channelId: channel.id,
        field1,
        field2,
        field3,
        field4,
      },
    })
    return res.json({ success: true, message: "Inserted" })
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    })
  } finally {
    client.$disconnect()
  }
}
