const mongoose = require('mongoose')

const URLSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    clicks: {
        type: Number,
        default: 0
    },
    date: {
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model('Url', URLSchema)