import { RequestHandler } from "express"
import { db } from "../db"

export const feeds: RequestHandler = async (req, res) => {
  const client = db()
  try {
    const { id: channelId } = req.params
    const id = parseInt(channelId)
    const {
      Feeds: feeds,
      api_key: _,
      ...channel
    } = await client.channel.findUnique({
      where: { id },
      include: {
        Feeds: {
          select: {
            id: true,
            created_at: true,
            field1: true,
            field2: true,
            field3: true,
            field4: true,
          },
          orderBy: {
            created_at: "desc",
          },
          take: 100,
        },
      },
    })
    res.json({
      success: true,
      channel,
      feeds,
    })
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    })
  } finally {
    client.$disconnect()
  }
}
