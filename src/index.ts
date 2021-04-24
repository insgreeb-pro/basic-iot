import * as express from "express"

import { feeds } from "./controller/feeds"
import { logger } from "./middleware/logger"
import { update } from "./controller/update"

const port = process.env.PORT || 3000
const app = express()

// Middleware
app.use(logger)

// routing
app.get("/channels/:id(\\d+)/feeds.json", feeds)
app.get("/update(.json)?", update)

app.get("/", (_, res) => {
  return res.json({
    message: "It's works!",
  })
})

app.listen(port, () =>
  console.log(
    `[${new Date().toISOString()}]`,
    `✔ Server run on http://localhost:${port}`
  )
)
