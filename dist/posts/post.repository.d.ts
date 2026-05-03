import mongoose from "mongoose";
import type { PostDto } from "./post.dto.ts";
import type { Types } from "mongoose";
export declare class PostRepository {
    private readonly model;
    constructor(model?: mongoose.Model<{
        title: string;
        content: string;
    }, {}, {}, {
        id: string;
    }, mongoose.Document<unknown, {}, {
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
    }, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
        title: string;
        content: string;
    }, mongoose.Document<unknown, {}, {
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
    }, unknown, {
        title: string;
        content: string;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }>, {
        title: string;
        content: string;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }>);
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
}
//# sourceMappingURL=post.repository.d.ts.map