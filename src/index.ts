import * as express from "express"

const port = process.env.PORT || 3000
const app = express()

app.get("*", (_, res) => {
  return res.json({
    message: "It's works!",
  })
})

app.listen(port, () => console.log(`✔ Server run on localhost:${port}`))
