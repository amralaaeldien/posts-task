import  express from 'express';
import mongoose from 'mongoose';
import router from './posts/post.controller.js';


import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

import 'dotenv/config'

console.log('Environment variable MONGO_URI:', process.env.MONGO_URI);  

const URI = (process.env.MONGO_URI) as string;
const PORT = process.env.PORT || 3000;



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/posts', router);


app.listen(PORT, async () => {
    await mongoose.connect(URI);
    console.log(`Server is running on port ${PORT}`);
});