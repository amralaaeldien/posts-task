import mongoose from "mongoose";
import PostModel from "./post.model.js";
export class PostRepository {
    model;
    constructor(model = PostModel) {
        this.model = model;
    }
    async createPost(postData) {
        const post = await new this.model(postData);
        await post.save();
        return post;
    }
    async getPost(postId) {
        return await this.model.findById(postId).exec();
    }
    async listPosts() {
        return await this.model.find().exec();
    }
}
//# sourceMappingURL=post.repository.js.map