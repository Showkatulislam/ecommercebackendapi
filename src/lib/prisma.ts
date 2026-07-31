import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import 'dotenv/config';
import { PrismaClient } from '../../prisma/generate/client.js';
import { env } from '../config/env.js';

const adapter = new PrismaMariaDb({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  connectionLimit: 5,
});

// ১. গ্লোবাল অবজেক্টটিকে TypeScript-এর উপযোগী করে তৈরি করা হলো
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// ২. আগের কোনো PrismaClient থাকলে সেটা ব্যবহার করবে, না থাকলে নতুন তৈরি করবে
export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

// ৩. ডেভেলপমেন্ট এনভায়রনমেন্টে গ্লোবাল অবজেক্টে সেভ করে রাখা হচ্ছে
if (env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
