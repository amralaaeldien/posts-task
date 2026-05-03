import mongoose from 'mongoose';

export interface PostDto {
  id?: typeof mongoose.Types.ObjectId;
  title: string;
  content: string;
}