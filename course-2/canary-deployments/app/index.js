const express = require('express')

const app = express()

const VERSION = process.env.VERSION || '0.0.0-devlocal'
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send(`Deployed version: ${VERSION}\n`)
})

app.listen(PORT, () => console.log(`> Server listening on port: ${PORT}`))