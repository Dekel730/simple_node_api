import express from 'express';
import { createComment, getCommentByPost } from '../controllers/commentController';

const router = express.Router();

router.route('/').post(createComment);
router.route('/').get(getCommentByPost);

export default router