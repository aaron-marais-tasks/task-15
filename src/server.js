/*
	This file holds my server info
*/

// Im;port JSON5 library
require('json5/lib/register')

// Import person
const person = require("./person.json5")

// Import express and create app
const express = require("express")
const app = express()

// Use public dir for static files
app.use(express.static("public"))

// Root path should welcome user
app.get("/", (rq, rs) => {
    rs.send(`Welcome, ${person.name}`)
})

// Any other path except root and static will display message
app.get('*', (rq, rs) => {
  rs.send("Sorry, can't find that resource!")
})

// Listen on port 3000
app.listen(3000)

