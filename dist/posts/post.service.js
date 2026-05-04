import { PostRepository } from './post.repository.js';
import { producer } from './post.producer.js';
export class PostService {
    repository;
    constructor(repository = new PostRepository()) {
        this.repository = repository;
    }
    async listPosts() {
        return await this.repository.listPosts();
    }
    async createPost(postData) {
        const post = await this.repository.createPost(postData);
        await producer.send({
            topic: "post-created",
            messages: [
                {
                    key: String(post._id),
                    value: JSON.stringify(post.toJSON()),
                },
            ],
        });
        return post;
    }
    async getPost(postId) {
        return await this.repository.getPost(postId);
    }
}
//# sourceMappingURL=post.service.js.map