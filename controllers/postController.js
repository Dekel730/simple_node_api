import Post from '../models/postModel.js';
import asyncHandler from "express-async-handler";

const createPost = asyncHandler(async (req, res) => {
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
})

const getAllPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({});
    res.json({
        success: true,
        posts
    })
});

const getPostById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    if(!id) {
        res.status(400);
        throw new Error("Please provide post id");
    }
    const post = await Post.findById(id);
    if (!post) {
        res.status(404);
        throw new Error("Post not found");
    }
    res.json({
        success: true,
        post
    })
})

const getPostBySender = asyncHandler(async (req, res) => {
    const sender = req.query.sender;
    const posts = await Post.find({ sender });
    res.json({
        success: true,
        posts
    })
})

const updatePost = asyncHandler(async (req, res) => {
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
})

export { createPost, getPostBySender, updatePost, getAllPosts, getPostById };