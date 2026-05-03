import { PostRepository } from './post.repository.js';
import mongoose, { Types } from 'mongoose';
export class PostService {
    repository;
    constructor(repository = new PostRepository()) {
        this.repository = repository;
    }
    async listPosts() {
        const posts = await this.repository.listPosts();
        return posts;
    }
    async createPost(postData) {
        return await this.repository.createPost(postData);
    }
    async getPost(postId) {
        return await this.repository.getPost(postId);
    }
}
//# sourceMappingURL=post.service.js.map