import express from 'express';
import { createComment, getCommentByPost, getComment, updateComment, deleteComment } from '../controllers/commentController.js';

const router = express.Router();

router.route('/').post(createComment);
router.route('/').get(getCommentByPost);
router.route('/:id').put(updateComment);
router.route('/:id').get(getComment);
router.route('/:id').delete(deleteComment);

export default router