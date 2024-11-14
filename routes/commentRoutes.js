import express from 'express';
import { createComment, getCommentByPost, getComment } from '../controllers/commentController.js';

const router = express.Router();

router.route('/').post(createComment);
router.route('/').get(getCommentByPost);
router.route('/:id').get(getComment);

export default router