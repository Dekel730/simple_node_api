import Comment from '../models/commentModel.js';

const createComment = async (req, res) => {
    const { message, sender, post } = req.body;
    if (!message || !sender || !post) {
        res.status(400);
        throw new Error("Please provide message, sender and post");
    }
    const newComment = await Comment.create({
        message,
        sender,
        post
    })
    res.json({
        success: true,
        comment: newComment
    })
}

const getCommentByPost = async (req, res) => {
    const post = req.query.post;
    const comments = await Comment.find({ post });
    res.json({
        success: true,
        comments
    })
}

export { createComment, getCommentByPost };