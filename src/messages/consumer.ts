import { consumer, ensureTopics } from "../posts/post.producer.js";

async function startConsumer() {
  await ensureTopics();
  await consumer.connect();
  await consumer.subscribe({
    topic: "post-created",
    fromBeginning: false,
  });
  console.log("Consumer connected and subscribed");
}

async function runConsumer() {
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      try {
        const value = message.value?.toString();
        if (!value) return;

        const data = JSON.parse(value);

        console.log("Received message:", {
          topic,
          partition,
          key: message.key?.toString(),
          data,
        });
      } catch (error) {
        console.error("Error processing message:", error);
      }
    },
  });
}

const shutdown = async () => {
  try {
    await consumer.disconnect();
  } finally {
    process.exit(0);
  }
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

await startConsumer();
await runConsumer();
