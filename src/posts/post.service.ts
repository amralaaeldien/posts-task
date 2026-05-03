import type { PostDto } from './post.dto.ts';
import { PostRepository } from './post.repository.js';
import mongoose, { Types } from 'mongoose';

export class PostService {

    constructor(private readonly repository= new PostRepository()) {}

    async listPosts() {
        const posts = await this.repository.listPosts();
        return posts;
    }

    async createPost(postData: PostDto) {
        return await this.repository.createPost(postData);
    }

    async getPost(postId: string) {
        return await this.repository.getPost(postId);
    }

}