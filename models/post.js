const mongoose = require('mongoose')


const Schema = mongoose.Schema

const postSchema = new Schema({

    title : String,

    subtopics : [{
        title : String,
        text : String,
        url : String,
        rank : Number
    }]
    
})

const Post = mongoose.model('Post',postSchema)

module.exports = {
    Post
}