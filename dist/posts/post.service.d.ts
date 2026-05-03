import type { PostDto } from './post.dto.ts';
import { PostRepository } from './post.repository.js';
import mongoose, { Types } from 'mongoose';
export declare class PostService {
    private readonly repository;
    constructor(repository?: PostRepository);
    listPosts(): Promise<(mongoose.Document<unknown, {}, {
        title: string;
        content: string;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        title: string;
        content: string;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    })[]>;
    createPost(postData: PostDto): Promise<mongoose.Document<unknown, {}, {
        title: string;
        content: string;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        title: string;
        content: string;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getPost(postId: string): Promise<(mongoose.Document<unknown, {}, {
        title: string;
        content: string;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        title: string;
        content: string;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>;
}
//# sourceMappingURL=post.service.d.ts.map