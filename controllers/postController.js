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

export { createPost };