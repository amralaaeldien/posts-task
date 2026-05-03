import mongoose from "mongoose";
import type { PostDto } from "./post.dto.ts";
import  PostModel  from "./post.model.js";
import type { Types } from "mongoose";

export class PostRepository {

    constructor(private readonly model = PostModel) {}

    async createPost(postData: PostDto) {
        const post = await new this.model(postData);
        await post.save();
        return post;
    }

    async getPost(postId: string) {
        return await this.model.findById(postId).exec();
    }

    async listPosts() {
        return await this.model.find().exec();
    }
}