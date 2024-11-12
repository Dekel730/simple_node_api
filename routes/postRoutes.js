import express from 'express';
import { createPost, getPostBySender } from '../controllers/postController.js';

const router = express.Router();

router.route('/').post(createPost);
router.route('/').get(getPostBySender);

export default router