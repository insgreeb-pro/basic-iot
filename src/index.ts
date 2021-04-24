import * as express from "express"

import { feeds } from "./controller/feeds"
import { update } from "./controller/update"

const port = process.env.PORT || 3000
const app = express()

// routing
app.get("/channels/:id/feeds.json", feeds)
app.get("/update(.json)?", update)

app.get("/", (_, res) => {
  return res.json({
    message: "It's works!",
  })
})

app.listen(port, () => console.log(`✔ Server run on http://localhost:${port}`))
