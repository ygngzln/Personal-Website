const mongoose = require('mongoose')

const blogs = mongoose.Schema({
    entry: {
        type: Number,
        required: false
    },
    date: {
        type: String
    },
    message: {
        type: String
    }
},{
    timestamps: false,
    versionKey: false
})

const suggestions = mongoose.Schema({
    message: {
        type: String
    },
    checked: {
        type: Boolean,
        required: false
    }
},{
    timestamps: false,
    versionKey: false,
})

const fhilts = mongoose.Schema({
    imgLink: {
        type: String
    },
    rank: {
        type: Number
    }
},{
    timestamps: false,
    versionKey: false
})

module.exports = {
    "Blogs": mongoose.model('Blog', blogs),
    "Suggestions": mongoose.model('Suggestion', suggestions),
    "Fhilts": mongoose.model('Fhilt', fhilts)
}