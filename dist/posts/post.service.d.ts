import type { PostDto } from './post.dto.js';
import { PostRepository } from './post.repository.js';
export declare class PostService {
    private readonly repository;
    constructor(repository?: PostRepository);
    listPosts(): Promise<(import("mongoose").Document<unknown, {}, {
        title: string;
        content: string;
    }, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<{
        title: string;
        content: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    })[]>;
    createPost(postData: PostDto): Promise<import("mongoose").Document<unknown, {}, {
        title: string;
        content: string;
    }, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<{
        title: string;
        content: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getPost(postId: string): Promise<(import("mongoose").Document<unknown, {}, {
        title: string;
        content: string;
    }, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<{
        title: string;
        content: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>;
}
//# sourceMappingURL=post.service.d.ts.map