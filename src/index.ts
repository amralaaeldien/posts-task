import  express from 'express';
import mongoose from 'mongoose';
import router from './posts/post.controller.js';


import 'dotenv/config';

const URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/post_db';
const PORT = process.env.PORT || 3000;



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/posts', router);


app.listen(PORT, async () => {
    await mongoose.connect(URI);
    console.log(`Server is running on port ${PORT}`);
});