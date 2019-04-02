const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')

//Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-crud', { useNewUrlParser: true });

//Express
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', routes)

app.listen(port, () => console.log(`Listening on port ${port}!`))