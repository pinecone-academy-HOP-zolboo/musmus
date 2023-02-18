const { model, Schema } = require('mongoose');

const PostSchema = new Schema({
    userRole : String,
    img : String, //dd
    title : String ,
    description: String,
    profileImg : String , //dd
    profileName: String,
    postDate :{type :Date, default: Date.now},
    postText : String,
    blogPhoto : String //dd
})

const PostModel = model('Post', PostSchema);
module.exports = PostModel;