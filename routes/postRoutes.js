import express from 'express';
import { createPost, getPostBySender, updatePost, getAllPosts, getPostById } from '../controllers/postController.js';

const router = express.Router();

router.route('/').post(createPost);
router.route('/').get(getPostBySender);
router.route('/all').get(getAllPosts);
router.route('/:id').put(updatePost);
router.route('/:id').get(getPostById);

export default router