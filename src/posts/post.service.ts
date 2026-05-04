import type { PostDto } from './post.dto.js';
import { PostRepository } from './post.repository.js';
import { producer } from './post.producer.js';

export class PostService {

    constructor(private readonly repository = new PostRepository()) {}

    async listPosts() {
        return await this.repository.listPosts();
    }

    async createPost(postData: PostDto) {
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

    async getPost(postId: string) {
        return await this.repository.getPost(postId);
    }

}
