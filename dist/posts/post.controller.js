import express from 'express';
import { PostService } from './post.service.js';
import mongoose, { mongo, Types } from 'mongoose';
const postService = new PostService();
const router = express.Router();
router.get('/', async (req, res) => {
    const posts = await postService.listPosts();
    console.log('Listing posts:', posts);
    res.send(posts);
});
router.post('/', async (req, res) => {
    let post = {
        title: req.body.title,
        content: req.body.content
    };
    const newpost = await postService.createPost(post);
    res.send(newpost);
});
router.get('/:id', async (req, res) => {
    const postId = req.params.id;
    const post = await postService.getPost(postId);
    res.send(post);
});
export default router;
//# sourceMappingURL=post.controller.js.map