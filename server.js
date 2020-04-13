const express = require('express')
const routes = require('./src/routes')

const app = express()

app.use(express.json())
app.use(routes)
app.use(cors())


app.listen(3333)



 