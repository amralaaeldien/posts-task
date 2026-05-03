import { Producer, stringSerializers } from '@platformatic/kafka';
const producerKafka = new Producer({
    clientId: 'my-producer',
    bootstrapBrokers: ['kafka:9091'],
    serializers: stringSerializers
});
import { Admin } from '@platformatic/kafka';
// Create an admin client
const admin = new Admin({
    clientId: 'my-admin',
    bootstrapBrokers: ['kafka:9092']
});
// Create topics
await admin.createTopics({
    topics: ['my-topic'],
    partitions: 3,
    replicas: 1
});
export default producerKafka;
//# sourceMappingURL=post.producer.js.map