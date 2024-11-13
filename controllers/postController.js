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

const updatePost = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400);
        throw new Error("Please provide post id");
    }
    const { message } = req.body;
    if (!message) {
        res.status(400);
        throw new Error("Please provide message");
    }
    const post = await Post.findById(id);
    if (!post) {
        res.status(404);
        throw new Error("Post not found");
    }
    post.message = message || post.message;
    await post.save();
    res.json({
        success: true,
        post
    })
}

export { createPost, getPostBySender, updatePost };