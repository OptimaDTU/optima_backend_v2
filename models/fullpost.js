const mongoose = require('mongoose')


const Schema = mongoose.Schema

const fullPostSchema = new Schema({
    
    title : String,
    text : String,

    subPosts : [{
        title : String,
        text : String,
        url : String,
        rank : Number
    }]
})

const FullPost = mongoose.model('FullPost',fullPostSchema)

module.exports = FullPost