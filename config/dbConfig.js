require('dotenv').config()

const mongoose = require('mongoose')

const DB_URI = 'mongodb+srv://' + process.env.DB_UID + ':' + process.env.DB_PASS + '@cluster0.x7vwqqa.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

module.exports = connection