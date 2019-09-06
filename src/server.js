require('json5/lib/register')
const person = require("./person.json5")
const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/", (rq, rs) => {
    rs.send("welcome")
})

app.get('*', (rq, rs, nx) => {
  const err = new Error(`Page Not Found: ${rq.originalUrl}`)
  nx(err)
});

app.listen(3000)

