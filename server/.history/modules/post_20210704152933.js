const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    url: {
        type: String
    },
    status: {
        type: String,
        enum: ['finish', 'happenning', 'begin']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})
module.exports = mongoose.model('post', PostSchema)