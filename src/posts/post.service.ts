import type { PostDto } from './post.dto.ts';
import { PostRepository } from './post.repository.js';
import mongoose, { Types } from 'mongoose';
import  producerKafka from './post.producer.js';

export class PostService {

    constructor(private readonly repository= new PostRepository()) {}

    async listPosts() {
        const posts = await this.repository.listPosts();
        return posts;
    }

    async createPost(postData: PostDto) {
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

    async getPost(postId: string) {
        return await this.repository.getPost(postId);
    }

}