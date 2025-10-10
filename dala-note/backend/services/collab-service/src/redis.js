import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

export const connectRedis = async () => {
  const client = createClient({
    username: 'default',
    password: 'qQ3L0tbeKlbWeljmvST0mKPYdQmKmujY',
    socket: {
        host: 'redis-10558.c62.us-east-1-4.ec2.redns.redis-cloud.com',
        port: 10558
    }
  });

  client.on('connect', () => console.log('✅ Redis connected'));
  client.on('error', err => console.log('Redis Client Error', err));

  await client.connect();
  return client;
};