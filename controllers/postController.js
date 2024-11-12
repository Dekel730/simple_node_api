import Post from '../models/postModel.js';

const createPost = async (req, res) => {
    const { message, sender } = req.body;
    if (!message || !sender) {
        res.status(400);
        throw new Error("Please provide message and sender");
    }
    const newPost = await Post.create({
        message,
        sender
    })
    res.json({
        success: true,
        post: newPost
    })
}

const getPostBySender = async (req, res) => {
    const sender = req.query.sender;
    const posts = await Post.find({ sender });
    res.json({
        success: true,
        posts
    })
}

export { createPost, getPostBySender };