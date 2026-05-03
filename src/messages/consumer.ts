import { Consumer, stringDeserializers } from '@platformatic/kafka'


// Create a consumer with string deserialisers
const consumer = new Consumer({
  groupId: 'my-consumer-group',
  clientId: 'my-consumer',
  bootstrapBrokers: ['kafka:9093'],
  deserializers: stringDeserializers
})

// Create a consumer stream
const stream = await consumer.consume({
  autocommit: true,
  topics: ['my-topic'],
  sessionTimeout: 10000,
  heartbeatInterval: 500
})

// Option 1: Event-based consumption
stream.on('data', message => {
  console.log(`Received: ${message.key} -> ${message.value}`)
})


// Close the consumer when done
await consumer.close()
