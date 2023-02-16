const { model, Schema } = require('mongoose');

const PostSchema = new Schema({
    description: String,
    userId: String,
    userName: String,
    userProfile: String,
    like: {
        type: Number,
        default: 0
    },
    images: String,
    comment:[String],
    registerDate:{type :Date, default: Date.now},
})

const PostModel = model('Post', PostSchema);
module.exports = PostModel;