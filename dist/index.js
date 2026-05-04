import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import router from './posts/post.controller.js';
import { producer, ensureTopics } from './posts/post.producer.js';
const URI = process.env.MONGO_URI;
const PORT = Number(process.env.PORT) || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/posts', router);
async function start() {
    await mongoose.connect(URI);
    console.log('MongoDB connected');
    await ensureTopics();
    await producer.connect();
    console.log('Kafka producer connected');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
start().catch((err) => {
    console.error('Failed to start server', err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map