import { PostRepository } from './post.repository.js';
import mongoose, { Types } from 'mongoose';
import producerKafka from './post.producer.js';
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
        const post = await this.repository.createPost(postData);
        await producerKafka.send({
            messages: [
                {
                    topic: 'my-topic',
                    key: 'hello',
                    value: 'world',
                }
            ]
        });
        return post;
    }
    async getPost(postId) {
        return await this.repository.getPost(postId);
    }
}
//# sourceMappingURL=post.service.js.map