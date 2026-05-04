import { Kafka } from "kafkajs";

const broker = process.env.KAFKA_BROKER || "kafka:9092";

export const kafka = new Kafka({
  clientId: "posts-app",
  brokers: [broker],
  retry: {
    initialRetryTime: 1000,
    retries: 20,
  },
});

export const producer = kafka.producer();

export const consumer = kafka.consumer({
  groupId: "posts-consumer-group",
});

export async function ensureTopics() {
  const admin = kafka.admin();
  await admin.connect();
  try {
    const topics = await admin.listTopics();
    if (!topics.includes("post-created")) {
      await admin.createTopics({
        topics: [
          {
            topic: "post-created",
            numPartitions: 3,
            replicationFactor: 1,
          },
        ],
      });
    }
  } finally {
    await admin.disconnect();
  }
}
