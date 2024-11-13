import express from 'express';
import { createPost, getPostBySender, updatePost } from '../controllers/postController.js';

const router = express.Router();

router.route('/').post(createPost);
router.route('/').get(getPostBySender);
router.route('/:id').put(updatePost);

export default router