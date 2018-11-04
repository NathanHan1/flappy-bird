const express = require('express')
const app = express()

app.use(express.static('../flappy-bird'))

app.listen(9200)