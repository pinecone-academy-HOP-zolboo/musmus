const PostModel = require("./model");

exports.createPost = async (req, res, next) => {
    try {
        const createPost = await PostModel.create({ ...req.body });
        res 
          .status(201)
          .json({ message: `New user is created.`, data: createPost });
    } catch (error) {
        return res.status(400).json({message: error})
    }
};
exports.getPost = async (req, res, next) => {
    const {id} = req.params
    try {
        const post = await PostModel.findById(id)
        res.status(200).json({message: true, data: post})
    } catch (error) {
        return res.status(400).json({message: error, data: null})
    }
}
exports.getPosts = async (req, res, next) => {
    try {
        const posts = await PostModel.find()
        res.status(200).json({message: true, data: posts})
    } catch (error) {
        return res.status(400).json({message: error, data: null})
    }
}